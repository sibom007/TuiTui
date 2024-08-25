import { db } from "@/lib/prisma";

export const getUserById = async (id: string) => {
  const user = await db.profile.findUnique({
    where: {
      userId: id,
    },
    include: {
      user: {
        select: {
          id: true,
          number: true,
          name: true,
          email: true,
        },
      },
    },
  });
  return user;
};
export const getUserByEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
  return user;
};
