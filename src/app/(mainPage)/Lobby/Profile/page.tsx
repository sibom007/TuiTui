import Image from "next/image";
import moduleName from "../../../../../public/no-photo.png";

const ProfilePage = () => {
  return (
    <div className="md:flex justify-between gap-3 w-[70vw] min-h-[39vw] rounded-md ">
      <div className="flex w-[40vw]  rounded-t-md">
        <div className="flex flex-col items-center md:mx-10 my-9 gap-5">
          <div className="flex flex-col items-start border-b-2 border-gray-500 pb-10">
            <label
              htmlFor=""
              className="font-semibold text-base text-gray-300 uppercase mb-2 ">
              Display name
            </label>
            <input
              className="bg-white outline-none  py-2 px-3 w-[70vw] md:w-[30vw] flex-1 rounded-md text-gray-600"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start border-b-2 border-gray-500 pb-10">
            <label
              htmlFor=""
              className="font-semibold text-base text-gray-300 uppercase mb-2">
              Discption
            </label>
            <input
              className="bg-white outline-none  py-2 px-3 w-[70vw] md:w-[30vw] flex-1 rounded-md text-gray-600"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start border-b-2 border-gray-500 pb-10">
            <label
              htmlFor=""
              className="font-semibold text-base text-gray-300 uppercase mb-2">
              Colour
            </label>
            <input
              className="bg-white outline-none  py-2 px-3 w-[70vw] md:w-[30vw] flex-1 rounded-md text-gray-600"
              type="text"
            />
          </div>
        </div>
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
