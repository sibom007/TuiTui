import { db } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    const { email, firstName, lastName, password, age } = body;
    if (!email || !firstName || !lastName || !password || !age) {
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

    const makeuser = await db.user.create({
      data: {
        email,
        firstName,
        lastName,
        hashpassword: hashedPassword,
        age,
      },
    });

    return NextResponse.json(
      { message: "User registered successfully", makeuser },
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse("Internal Error", { status: 400 });
  }
};
