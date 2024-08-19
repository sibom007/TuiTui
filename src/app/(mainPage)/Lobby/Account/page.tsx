import Image from "next/image";
import moduleName from "../../../../../public/no-photo.png";
import Link from "next/link";
const AccountPage = () => {
  return (
    <div>
      <p className="text-white text-xl font-semibold mb-5">My Account</p>
      <div className="flex min-w-[76vw] min-h-[12vw] bg-orange-300 rounded-t-md">
        <div className="flex flex-col items-center justify-end">
          <div className="flex items-center gap-10 -mb-[6vw] ml-[3vw]">
            <Image
              src={moduleName}
              className="w-[14vw] md:w-[8vw] rounded-full border-[10px] border-slate-800"
              alt="profile"
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-800 p-4 rounded-b-md">
        <div className="flex justify-between items-center pt-5 md:pt-4 ">
          <h1 className="text-white text-xl font-semibold md:pl-24 lg:pl-28 xl:pl-40 ">
            Sibom asha
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
                <p className="uppercase">Display name</p> <p>sibom saha</p>
              </div>
              <div className="px-4 py-2 bg-gray-600 rounded-md">
                <Link href="Profile">Edit</Link>
              </div>
            </div>
            <div className="text-white flex items-center justify-between  rounded-md">
              <div className="flex items-end gap-2">
                <p>
                  <p className="uppercase">Email</p> <p>sibom saha</p>
                </p>
                <p className="text-blue-600 hover:underline">Reveal</p>
              </div>
              <div className="px-4 py-2 bg-gray-600 rounded-md">
                <Link href="Profile">Edit</Link>
              </div>
            </div>
            <div className="text-white flex items-center justify-between  rounded-md">
              <div>
                <p className="uppercase">Phone Number</p>{" "}
                <p>You Do Not Have Number</p>
              </div>
              <div className="px-4 py-2 bg-gray-600 rounded-md">
                <Link href="Profile">Add</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white mt-10 ml-5">
          <div>
            <h1 className="text-white text-xl font-semibold mb-3">
              Password and Authorization
            </h1>
            <button className="px-3 py-2 rounded-sm bg-[#ff6666]">
              Change Password
            </button>
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
