import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const CurrentId = url.searchParams.get("id");

  if (CurrentId) {
    const user = await db.user.findUnique({
      where: { id: CurrentId },
      select: {
        profile: {
          select: {
            YouLike: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const likedProfiles = await db.user.findMany({
      where: {
        id: {
          in: user.profile?.YouLike || [],
        },
      },
      select: {
        name: true,
        email: true,
        profile: true,
      },
    });

    return NextResponse.json(likedProfiles, { status: 200 });
  }

  return NextResponse.json({ message: "ID is required" }, { status: 400 });
};

// export const PATCH = async (req: Request) => {
//   const url = new URL(req.url);
//   const currentId = url.searchParams.get("id");

//   if (currentId) {
//     const user = await db.user.findUnique({
//       where: { id: currentId },
//       select: {
//         profile: {
//           select: {
//             YouLike: true,
//           },
//         },
//       },
//     });
//     if (!user) {
//       return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }
//     const isLiked = user.profile?.YouLike || [];
//     console.log(isLiked);
//     const matchingId = isLiked.find((likedId: string) => likedId === currentId);

//     console.log(matchingId);

//     // return NextResponse.json(likedProfiles, { status: 200 });
//   }

//   return NextResponse.json({ message: "ID is required" }, { status: 400 });
// };

export const PATCH = async (req: Request) => {
  const url = new URL(req.url);
  const CurrentId = url.searchParams.get("id");
  if (!CurrentId) {
    return NextResponse.json({ error: "Something wrong" }, { status: 400 });
  }

  const user = await db.user.findUnique({
    where: { id: CurrentId },
    select: {
      profile: {
        select: {
          YouLike: true,
        },
      },
    },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const likedProfiles = await db.user.findMany({
    where: {
      id: {
        in: user.profile?.YouLike || [],
      },
      profile: {
        YouLike: {
          has: CurrentId, // This checks if the user's ID is in the YouLike array
        },
      },
    },
    select: {
      id: true,
      name: true,
      // Select the id of the matching users
      profile: {
        select: {
          YouLike: true,
        },
      },
    },
  });

  const alsoLikedme = likedProfiles[0]?.id;

  const result = await db.$transaction(async (tr) => {
    const update1 = await tr.user.update({
      where: { id: CurrentId },
      data: {
        profile: {
          update: {
            Match: {
              push: alsoLikedme,
            },
            YouLike: {
              set: (user.profile?.YouLike || []).filter(
                (id) => id !== alsoLikedme
              ),
            },
          },
        },
      },
      select: {
        id: true,
        profile: {
          select: {
            Match: true,
            YouLike: true,
          },
        },
      },
    });

    const profile = await tr.profile.findUnique({
      where: { userId: alsoLikedme },
      select: {
        YouLike: true,
      },
    });

    const updatedata = await tr.user.update({
      where: { id: alsoLikedme },
      data: {
        profile: {
          update: {
            Match: {
              push: CurrentId,
            },
            YouLike: {
              set: profile?.YouLike.filter((id) => id !== CurrentId),
            },
          },
        },
      },
      select: {
        id: true,
        profile: {
          select: {
            Match: true,
            YouLike: true,
          },
        },
      },
    });
    return { updatedata, update1 };
  });

  return NextResponse.json(result, { status: 200 });
};
