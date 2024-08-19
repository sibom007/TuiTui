import { BsFillSearchHeartFill } from "react-icons/bs";
import { HiMiniCurrencyEuro } from "react-icons/hi2";

const DesktopBar = () => {
  return (
    <div className="hidden md:flex justify-between px-14 border-b-2 border-gray-300  bg-[#FF6666] p-2">
      <div>
        <p className=" font-semibold text-xl text-zinc-100 mt-1">TuiTui</p>
      </div>
      <div className="flex items-center justify-center bg-yellow-100/40 rounded-full w-[30vw] py-2 px-4">
        <BsFillSearchHeartFill className="text-white" />
        <input
          type="text"
          className="bg-transparent outline-none flex-1 text-white ml-4 custom-placeholder"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default DesktopBar;
