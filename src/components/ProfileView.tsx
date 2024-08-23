"use client";
import Image from "next/image";
import moduleName from "../../public/no-photo.png";
import {
  useGetprofileByIdQuery,
  useUpdateImageMutation,
} from "@/Redux/api/profile";
import { FaPencilAlt } from "react-icons/fa";
import { CldUploadButton } from "next-cloudinary";
import toast from "react-hot-toast";
import Diglog from "@/lib/UIDesign/Diglog";
import { useEffect, useState } from "react";

const ProfileView = ({ id }: { id: string | undefined }) => {
  const [bg, setbg] = useState("");
  const [UpdateImage] = useUpdateImageMutation();
  const { data } = useGetprofileByIdQuery({ id });
  const item = data?.data;

  const UploadImg = async (result: any) => {
    const Info = {
      id,
      image: result?.info?.secure_url,
    };
    const res = await UpdateImage(Info);
    toast.success(res?.data?.data?.message, { position: "top-right" });
  };
  useEffect(() => {
    setbg(item?.profile.backgroundcolour);
  }, [item?.profile.backgroundcolour]);

  return (
    <div>
      <p className="text-base text-gray-300 font-semibold">PREVIEW</p>
      <div
        style={{ backgroundColor: bg }}
        className={`flex min-w-[29vw] min-h-[10vw] rounded-t-md relative`}>
        <div className="absolute -right-2 -top-3 bg-gray-700/60 text-white p-1 rounded-full">
          <Diglog id={id} />
        </div>
        <div className="flex flex-col items-center justify-end -mb-[4vw] md:-mb-[2vw] ml-[1vw] ">
          <div className="flex items-center justify-center relative">
            <Image
              src={item?.profile.image || moduleName}
              className="w-[10vw] md:w-[6vw] h-[6vw]  rounded-full border-[6px] border-gray-800/50"
              height={200}
              width={200}
              alt="profile"
            />
            <CldUploadButton
              options={{ maxFiles: 1 }}
              onUpload={UploadImg}
              uploadPreset="gdvmyo1j">
              <div className="absolute right-0 top-1 bg-gray-700/60 text-white p-1 rounded-full">
                <FaPencilAlt />
              </div>
            </CldUploadButton>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 min-h-44 rounded-b-md">
        <div className="pt-10 pl-2 ">
          <h1 className="text-base md:text-xl font-semibold text-white">
            {item?.name}
          </h1>
          <p className=" text-sm md:text-base font-medium text-white pt-4 md:pt-8">
            {item?.profile.bio}
          </p>
          <div className="flex justify-center pt-3 md:pt-2 ">
            <button
              type="submit"
              className="w-9/12 bg-orange-400 py-1 rounded-md text-white text-base">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
