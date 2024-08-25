"use client";
import Image from "next/image";
import nophoto from "../../public/no-photo.png";
import Link from "next/link";
import { useGetUser } from "@/hooks/GetUserByClient";

const LobbyAccount = () => {
  const user = useGetUser();
  return (
    <Link href={"/Lobby/Account"}>
      <div className="mt-5 fixed w-12 lg:w-40 bottom-2 left-2 right-0 hover:bg-orange-800/20 duration-500 p-2 mr-2 rounded-xl">
        <div className="flex items-center gap-3  lg:justify-normal ">
          <div>
            <Image
              src={user?.data?.data?.profile?.image || nophoto}
              className="rounded-full w-8 h-8"
              alt="user"
              width={30}
              height={30}
            />
          </div>
          <div className="hidden lg:block font-semibold text-xl ">
            <h1>Account</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default LobbyAccount;
