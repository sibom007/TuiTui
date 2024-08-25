import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, bio, country, gender, Lookingfor, address, age, name, number } =
      body;

    const user = await db.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const updateData: any = {};
    const profileUpdateData: any = {};

    if (name) updateData.name = name;
    if (number) updateData.number = number;

    if (bio) profileUpdateData.bio = bio;
    if (country) profileUpdateData.country = country;
    if (gender) profileUpdateData.gender = gender;
    if (Lookingfor) profileUpdateData.Lookingfor = Lookingfor;
    if (address) profileUpdateData.address = address;
    if (age) profileUpdateData.age = age;

    if (Object.keys(updateData).length > 0) {
      await db.user.update({
        where: { id: id },
        data: updateData,
      });
    }

    if (Object.keys(profileUpdateData).length > 0) {
      await db.profile.update({
        where: { userId: id },
        data: profileUpdateData,
      });
    }
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

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (id) {
    const user = await db.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        number: true,
        profile: true,
      },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  }
  return NextResponse.json({ message: "No user found" }, { status: 400 });
};
  
