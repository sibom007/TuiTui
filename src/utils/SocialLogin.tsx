import { signIn } from "next-auth/react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const handleGoogle = async () => {
    const response = await signIn("google", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  const handleGithub = async () => {
    const response = await signIn("github", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex justify-center items-center mt-4 space-x-2">
      {" "}
      <button
        onClick={handleGoogle}
        className="bg-gray-100 hover:bg-gray-200 duration-500 p-3 rounded-full w-10 h-10 flex items-center justify-center">
        <FcGoogle />
      </button>
      <button
        onClick={handleGithub}
        className="bg-gray-100 hover:bg-gray-200 duration-500 p-3 rounded-full w-10 h-10 flex items-center justify-center">
        <BsGithub />
      </button>
      <button className="bg-gray-100 hover:bg-gray-200 duration-500 p-3 rounded-full w-10 h-10 flex items-center justify-center">
        <BsFacebook className="text-blue-700" />
      </button>
    </div>
  );
};

export default SocialLogin;
