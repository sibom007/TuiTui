import { BsFillSearchHeartFill } from "react-icons/bs";
import { HiMiniCurrencyEuro } from "react-icons/hi2";
import Logout from "./Logout";

const DesktopBar = () => {
  return (
    <div className="hidden md:flex justify-between items-center px-14 border-b-2 border-gray-300  bg-[#FF6666] p-2">
      <div>
        <p className=" font-semibold text-xl text-zinc-100  font-damion">
          TuiTui
        </p>
      </div>
      <div className="flex items-center justify-center bg-yellow-100/40 rounded-full w-[30vw] py-2 px-4">
        <BsFillSearchHeartFill className="text-white " />
        <input
          type="text"
          className="bg-transparent outline-none flex-1 text-white ml-4 custom-placeholder font-damion"
          placeholder="Search"
        />
      </div>
      <div>
        <Logout className=" outline outline-white hover:bg-[#fd5959] duration-300 hover:animate-bounce text-zinc-700 font-semibold rounded-md px-3 py-1 font-damion" />
      </div>
    </div>
  );
};

export default DesktopBar;
