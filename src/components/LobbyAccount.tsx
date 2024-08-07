import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUserById } from "@/utils/getUser";
import { getServerSession } from "next-auth";
import Image from "next/image";
import nophoto from "../../public/no-photo.png";

const LobbyAccount = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }
  const user = await getUserById(session?.user?._id);
  return (
    <div className="mt-5 fixed w-12 lg:w-40 bottom-2 left-2 right-0 hover:bg-orange-800/20 duration-500 p-2 mr-2 rounded-xl">
      <div className="flex items-center gap-3  lg:justify-normal ">
        <div>
          <Image
            src={user?.image || nophoto}
            className="rounded-full"
            alt="user"
            width={30}
            height={30}
          />
        </div>
        <div className="hidden lg:block font-semibold text-xl ">
          <h1>Account</h1>
        </div>
      </div>
    </div>
  );
};

export default LobbyAccount;
