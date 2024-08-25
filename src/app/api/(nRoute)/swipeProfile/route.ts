import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (id) {
    const user = await db.user.findUnique({
      where: {
        id: id,
      },
      include: {
        profile: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const users = await db.user.findMany({
      where: {
        AND: [
          {
            NOT: {
              id: id,
            },
          },
          {
            NOT: {
              id: {
                in: user.profile?.YouLike || [],
              },
            },
          },
          {
            NOT: {
              id: {
                in: user.profile?.Reject || [],
              },
            },
          },
          {
            NOT: {
              id: {
                in: user.profile?.LikedBy || [],
              },
            },
          },
        ],
      },
      include: {
        profile: true,
      },
    });

    return NextResponse.json(users, { status: 200 });
  }

  return NextResponse.json({ error: "ID is required" }, { status: 400 });
};
