import { AiFillHome } from "react-icons/ai";
import { GiCircularSawblade } from "react-icons/gi";
import { HiMiniCurrencyEuro } from "react-icons/hi2";
import { MdManageAccounts } from "react-icons/md";
import LobbyAccount from "./LobbyAccount";
import Link from "next/link";

const SideNavber = () => {
  return (
    <div className="border-r-8 border-zinc-200 bg-[#FF6666] text-white hidden md:block w-[70px] lg:w-[180px] min-h-full">
      <div className="mt-10">
        <Link href="/Lobby">
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
        </Link>

        <Link href="/Lobby/Profile">
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
        </Link>
        <Link href="/Lobby/Sitting">
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
        </Link>
      </div>

      {/* login logout */}
      <LobbyAccount />
    </div>
  );
};

export default SideNavber;
