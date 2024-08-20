import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, bio, country, gender, Lookingfor, address, age } = body;

    if (!id || !bio || !country || !gender || !Lookingfor || !address || !age) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    await db.profile.update({
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
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}