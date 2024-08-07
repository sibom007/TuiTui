import { AiFillHome } from "react-icons/ai";
import { GiCircularSawblade } from "react-icons/gi";
import { HiMiniCurrencyEuro } from "react-icons/hi2";
import { MdManageAccounts } from "react-icons/md";
import LobbyAccount from "./LobbyAccount";

const SideNavber = () => {
  return (
    <div className="border-r-8 border-zinc-200 bg-orange-400 text-white hidden md:block w-[70px] lg:w-[180px] h-screen">
      <div className="mt-10 ml-2 ">
        <div className="flex lg:justify-normal justify-center lg:text-left items-center gap-2">
          <span>
            <HiMiniCurrencyEuro className="size-9 lg:hidden" />
          </span>
          <p className="hidden lg:block font-semibold text-xl">TuiTui</p>
        </div>
      </div>

      <div className="mt-10">
        <div className="mt-5 lg:mt-2 ml-2 hover:bg-orange-800/20 duration-500 p-2 mr-2 rounded-xl">
          <div className="flex items-center gap-3  justify-center lg:justify-normal ">
            <div>
              <AiFillHome className="size-7" />
            </div>
            <div className="hidden lg:block font-semibold text-xl  ">
              <h1>Home</h1>
            </div>
          </div>
        </div>
        <div className="mt-5 lg:mt-2 ml-2 hover:bg-orange-800/20 duration-500 p-2 mr-2 rounded-xl">
          <div className="flex items-center gap-3  justify-center lg:justify-normal ">
            <div>
              <MdManageAccounts className="size-7" />
            </div>
            <div className="hidden lg:block font-semibold text-xl  ">
              <h1>Profile</h1>
            </div>
          </div>
        </div>
        <div className="mt-5 lg:mt-2 ml-2 hover:bg-orange-800/20 duration-500 p-2 mr-2 rounded-xl">
          <div className="flex items-center gap-3  justify-center lg:justify-normal ">
            <div>
              <GiCircularSawblade className="size-7" />
            </div>
            <div className="hidden lg:block font-semibold text-xl  ">
              <h1>Sitting</h1>
            </div>
          </div>
        </div>
      </div>

      {/* login logout */}
      <LobbyAccount />
    </div>
  );
};

export default SideNavber;
