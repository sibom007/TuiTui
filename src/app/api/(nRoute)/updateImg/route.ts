import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, image } = body;

    if (!image) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const res = await db.profile.update({
      where: {
        userId: id,
      },
      data: {
        image,
      },
    });

    return NextResponse.json({ message: "Photo changed" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
