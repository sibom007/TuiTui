"use client";
import Image from "next/image";
import moduleName from "../../../../../public/no-photo.png";
import Link from "next/link";
import { useGetUser } from "@/hooks/GetUserByClient";
import EmailHide from "./components/EmailHide";
import Diglog from "@/lib/UIDesign/NDiglog";
import Loader from "@/lib/Loader/Loader";
import PDiglog from "@/lib/UIDesign/PDiglog";

const AccountPage = () => {
  const res = useGetUser();
  const user = res.data?.data;

  return (
    <div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        {res.isLoading && res.isFetching ? <Loader /> : ""}
      </div>
      <p className="text-white text-xl font-semibold mb-5">My Account</p>
      <div
        style={{
          backgroundColor: user?.profile?.backgroundcolour || "#ff6666",
        }}
        className="flex min-w-[76vw] min-h-[12vw]  rounded-t-md">
        <div className="flex flex-col items-center justify-end">
          <div className="flex items-center gap-10 -mb-[6vw] ml-[3vw]">
            <Image
              src={user?.profile?.image || moduleName}
              className="w-[14vw] md:w-[8vw] h-28 rounded-full overflow-hidden border-[10px] border-slate-800"
              height={100}
              width={100}
              alt="profile"
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-800 p-4 rounded-b-md">
        <div className="flex justify-between items-center pt-5 md:pt-4 ">
          <h1 className="text-white text-xl font-semibold md:pl-24 lg:pl-28 xl:pl-40 ">
            {user?.name}
          </h1>
          <div className="md:mr-10">
            <Link
              href="Profile"
              className="bg-[#ff6666] p-2 rounded-md text-gray-200">
              Edit User Profile
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center  bg-[#313338] rounded-md p-5 mt-8">
          <div className="w-full space-y-7">
            <div className="text-white flex items-center justify-between  rounded-md">
              <div>
                <p className="uppercase">Display name</p> <p>{user?.name}</p>
              </div>
              <div className="px-4 py-2 bg-gray-600 rounded-md">
                <Link href="Profile">Edit</Link>
              </div>
            </div>
            <div className="text-white flex items-center justify-between  rounded-md">
              <EmailHide email={user?.email || ""} />
              <div className="px-4 py-2 bg-gray-600 rounded-md">
                <Link href="Profile">Edit</Link>
              </div>
            </div>
            <div className="text-white flex items-center justify-between  rounded-md">
              <div>
                <p className="uppercase">Phone Number</p>{" "}
                <p>{user?.number || "add Number"}</p>
              </div>
              <div className="px-4 py-2 bg-gray-600 rounded-md">
                <Diglog id={user?.id} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-white mt-10 ml-5">
          <div>
            <h1 className="text-white text-xl font-semibold mb-3">
              Password and Authorization
            </h1>
            <div className="px-3 py-2 rounded-sm bg-[#ff6666] w-44 ">
              <PDiglog />
            </div>
          </div>
          <div className="mt-7 ">
            <h1 className="text-gray-500 uppercase text-sm font-semibold mb-2">
              Account Removal
            </h1>
            <div className="flex items-center gap-5">
              <button className="px-3 border-2 border-transparent py-2 rounded-sm bg-[#ff6666]">
                Disable Account
              </button>
              <button className="px-3 py-2   rounded-sm  hover:bg-[#ff6666] duration-300 border-2 border-[#ff6666]">
                Delete Accoount
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountPage;
