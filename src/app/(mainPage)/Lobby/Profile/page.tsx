"use client";

import CInput from "@/shared/CInput";
import CForm from "@/shared/CFrom";
import { FieldValues } from "react-hook-form";
import CSelectField from "@/shared/CSelectField";
import { useSession } from "next-auth/react";
import { useUpdateprofileMutation } from "@/Redux/api/profile";
import toast from "react-hot-toast";
import ProfileView from "@/components/ProfileView";
import { useUserId } from "@/hooks/GetId";

const ProfilePage = () => {
  const id = useUserId();
  const [Updateprofile] = useUpdateprofileMutation();
  const handleUpdate = async (data: FieldValues) => {
    const updateInfo = {
      id: id,
      name: data.name,
      gender: data.gender,
      bio: data.bio,
      Lookingfor: data.lookingfor,
      address: data.address,
      age: Number(data.age),
      country: data.country,
    };
    const res = await Updateprofile(updateInfo);
    if (res?.data?.status === 200) {
      toast.success(res?.data?.data.message, { position: "top-right" });
    }
  };

  return (
    <div className="md:flex justify-between gap-3 w-[70vw] min-h-[39vw] rounded-md ">
      <div className="flex w-[40vw]  rounded-t-md">
        <CForm resetAfterSubmit={true} onSubmit={handleUpdate}>
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
                items={["MAIE", "FEMAIE"]}
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
                name="lookingfor"
                items={["MAIE", "FEMAIE"]}
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
            <div className="text-xl  font-damion outline outline-[#ff6666] text-white px-16 duration-500 py-2 hover:bg-[#ff6666] rounded-lg flex-1">
              <button className="flex-1">Update</button>
            </div>
          </div>
        </CForm>
      </div>
      <ProfileView id={id} />
    </div>
  );
};

export default ProfilePage;
