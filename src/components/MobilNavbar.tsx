import { AiFillHome } from "react-icons/ai";
import { GiCircularSawblade } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";

const MobilNavbar = () => {
  return (
    <div className="md:hidden fixed bottom-2 left-0 right-0 ">
      <div className="py-2 trbg shadow-md shadow-zinc-500 rounded-lg mx-2">
        <div className="flex justify-around items-center group">
          <AiFillHome className="size-9 text-white flex-1 duration-500 hover:text-yellow-300" />
          <MdManageAccounts className="size-9 text-white flex-1 duration-500 hover:text-yellow-300" />
          <GiCircularSawblade className="size-9 text-white flex-1 duration-500 hover:text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default MobilNavbar;
