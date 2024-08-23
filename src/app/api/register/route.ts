import { db } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const { email, name, password } = body;
    if (!email || !password) {
      return new NextResponse("Missing credentials", { status: 400 });
    }

    const user = await db.user.findFirst({
      where: {
        email,
      },
    });

    if (user) {
      return new NextResponse("User already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

  const result = await db.$transaction(async (TC) => {
    const user = await db.user.create({
      data: {
        name,
        email,
        hashPassword: hashedPassword,
      },
    });

    const userProfile = await TC.profile.create({
      data: {
        userId: user.id,
      },
    });

    return { user, userProfile };
  });

  return NextResponse.json(
    { message: "User registered successfully", result },
    { status: 201 }
  );
  } catch (error) {
    return new NextResponse("Internal Error", { status: 400 });
  }
};
