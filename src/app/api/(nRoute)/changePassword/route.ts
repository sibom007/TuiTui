import { db } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const PUT = async (req: Request) => {
  try {
    const body = await req.json();
    const { id, currentpass, newPass } = body;

    const user = await db.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    const passwordmatch = await bcrypt.compare(currentpass, user.hashPassword!);

    if (!passwordmatch) {
      return new Response("wrong Password", { status: 400 });
    }

    const hashPassword = await bcrypt.hash(newPass, 10);

    await db.user.update({
      where: {
        id: id,
      },
      data: {
        hashPassword: hashPassword,
      },
    });
    return new Response("Password updated successfully", { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
