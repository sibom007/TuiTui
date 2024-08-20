"use client";
import Image from "next/image";
import moduleName from "../../../../../public/no-photo.png";
import CInput from "@/shared/CInput";
import CForm from "@/shared/CFrom";
import { FieldValues } from "react-hook-form";
import CSelectField from "@/shared/CSelectField";

const ProfilePage = () => {
  const handleUpdate = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="md:flex justify-between gap-3 w-[70vw] min-h-[39vw] rounded-md ">
      <div className="flex w-[40vw]  rounded-t-md">
        <CForm onSubmit={handleUpdate}>
          <div className="flex flex-col items-center md:mx-10 my-9 gap-5">
            <div className="flex flex-col items-start border-b-2 border-gray-500 pb-10">
              <label
                htmlFor=""
                className="font-semibold text-base text-gray-300 uppercase mb-2 ">
                Display name
              </label>
              <CInput
                className="bg-white outline-none font-damion  py-2 px-3 w-[70vw] md:w-[30vw] flex-1 rounded-md text-gray-600"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col items-start border-b-2 border-gray-500 pb-10">
              <label
                htmlFor=""
                className="font-semibold text-base text-gray-300 uppercase mb-2">
                Discption
              </label>
              <CInput
                className="bg-white outline-none font-damion py-2 px-3 w-[70vw] md:w-[30vw] flex-1 rounded-md text-gray-600"
                type="text"
                name="bio"
              />
            </div>
            <div className="flex flex-col items-start border-b-2 border-gray-500 pb-10">
              <label
                htmlFor=""
                className="font-semibold text-base text-gray-300 uppercase mb-2">
                Age
              </label>
              <CInput
                className="bg-white outline-none font-damion py-2 px-3 w-[70vw] md:w-[30vw] flex-1 rounded-md text-gray-600"
                type="number"
                name="age"
              />
            </div>
            <div className="flex flex-col items-start border-b-2 border-gray-500 pb-10">
              <label
                htmlFor=""
                className="font-semibold text-base text-gray-300 uppercase mb-2">
                Country
              </label>
              <CSelectField
                className="bg-white outline-none font-damion py-2 px-3 w-[70vw] md:w-[30vw] flex-1 rounded-md text-gray-600"
                name="country"
                items={[
                  "United States",
                  "Canada",
                  "Mexico",
                  "Brazil",
                  "United Kingdom",
                  "Germany",
                  "France",
                  "India",
                  "Japan",
                  "Australia",
                ]}
                required
              />
            </div>
            <div className="flex flex-col items-start border-b-2 border-gray-500 pb-10">
              <label
                htmlFor=""
                className="font-semibold text-base text-gray-300 uppercase mb-2">
                Gender
              </label>
              <CSelectField
                className="bg-white outline-none font-damion py-2 px-3 w-[70vw] md:w-[30vw] flex-1 rounded-md text-gray-600"
                name="gender"
                items={["Male", "Female"]}
                required
              />
            </div>
            <div className="flex flex-col items-start border-b-2 border-gray-500 pb-10">
              <label
                htmlFor=""
                className="font-semibold text-base text-gray-300 uppercase mb-2">
                Lookingfor
              </label>
              <CSelectField
                className="bg-white outline-none font-damion py-2 px-3 w-[70vw] md:w-[30vw] flex-1 rounded-md text-gray-600"
                name="Lookingfor"
                items={["Male", "Female"]}
                required
              />
            </div>
            <div className="flex flex-col items-start  border-gray-500 pb-10">
              <label
                htmlFor=""
                className="font-semibold text-base text-gray-300 uppercase mb-2">
                Address
              </label>
              <CInput
                className="bg-white outline-none font-damion py-2 px-3 w-[70vw] md:w-[30vw] flex-1 rounded-md text-gray-600"
                type="text"
                name="address"
              />
            </div>
            <div className="text-xl font-damion outline outline-[#ff6666] text-white px-16 duration-500 py-2 hover:bg-[#ff6666] rounded-lg">
              <button>Update</button>
            </div>
          </div>
        </CForm>
      </div>
      <div>
        <p className="text-base text-gray-300 font-semibold">PREVIEW</p>
        <div className="flex min-w-[29vw] min-h-[10vw] bg-orange-300 rounded-t-md">
          <div className="flex flex-col items-center justify-end -mb-[4vw] md:-mb-[2vw] ml-[1vw] ">
            <Image
              src={moduleName}
              className="w-[10vw] md:w-[6vw] rounded-full border-[6px] border-gray-800/50"
              alt="profile"
            />
          </div>
        </div>
        <div className="bg-gray-900 min-h-44 rounded-b-md">
          <div className="pt-10 pl-2 ">
            <h1 className="text-base md:text-xl font-semibold text-white">
              Sibom saha
            </h1>
            <p className=" text-sm md:text-base font-medium text-white pt-4 md:pt-8">
              Be happy
            </p>
            <div className="flex justify-center pt-3 md:pt-2 ">
              <button className="w-9/12 bg-orange-400 py-1 rounded-md text-white text-base">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
