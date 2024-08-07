import { db } from "@/lib/prisma";

export const getUserById = async (id: string) => {
  const user = await db.user.findUnique({
    where: {
      id,
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
      image: true,
    },
  });
  return user;
};
