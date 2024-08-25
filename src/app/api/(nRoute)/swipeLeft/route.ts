import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const PATCH = async (req: Request) => {
  const { id, DisLikeUserId } = await req.json();
  if (!id || !DisLikeUserId) {
    return NextResponse.json({ error: "Something wrong" }, { status: 400 });
  }

  await db.user.update({
    where: { id: id },
    data: {
      profile: {
        update: {
          Reject: {
            push: DisLikeUserId,
          },
        },
      },
    },
  });

  return NextResponse.json("Reject Done", {
    status: 200,
  });
};
