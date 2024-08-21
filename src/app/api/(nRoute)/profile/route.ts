import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, bio, country, gender, Lookingfor, address, age } = body;

    if (!id || !bio || !country || !gender || !Lookingfor || !address || !age) {
      return new NextResponse("Missing required fields", { status: 400 });
    }
    const user = await db.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    await db.profile.updateMany({
      where: {
        id: id,
      },
      data: {
        bio,
        country,
        gender,
        Lookingfor,
        address,
        age,
      },
    });

    return NextResponse.json(
      { message: "Profile updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
