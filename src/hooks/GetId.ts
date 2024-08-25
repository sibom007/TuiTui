"use client";
import { useSession } from "next-auth/react";

const useUserId = () => {
  const { data: session } = useSession();
  return session?.user?._id;
};

export { useUserId };
