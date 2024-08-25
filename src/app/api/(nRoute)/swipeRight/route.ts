import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const PATCH = async (req: Request) => {
  const { id: CurrentId, likedUserId } = await req.json();
  if (!CurrentId || !likedUserId) {
    return NextResponse.json({ error: "Something wrong" }, { status: 400 });
  }

  await db.user.update({
    where: { id: CurrentId },
    data: {
      profile: {
        update: {
          YouLike: {
            push: likedUserId,
          },
        },
      },
    },
    include: { profile: true },
  });

  return NextResponse.json("Add to Like section", {
    status: 200,
  });
};
