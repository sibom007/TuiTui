"use client";
import Loader from "@/lib/Loader/Loader";
import CForm from "@/shared/CFrom";
import CInput from "@/shared/CInput";
import SocialLogin from "@/utils/SocialLogin";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { CiLock, CiMail } from "react-icons/ci";

const LoginPage = () => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    const logininfo = {
      email: data.email,
      password: data.password,
    };
    const res = await signIn("credentials", logininfo);
    if (res?.ok) {
      router.push("/Lobby");
      setIsLoading(false);
    }
  };
  return (
    <div className=" min-h-[105vw] sm:min-h-[70vw] md:min-h-[63vw] lg:min-h-[49vw] flex flex-col justify-center items-center py-2  bg-slate-200">
      <main className="flex flex-1 flex-col w-full justify-center items-center  px-20 text-center">
        <div className="lg:flex rounded-2xl lg:shadow-2xl w-4/5 max-w-4xl">
          <div className="bg-white w-5/6 rounded-l-2xl rounded-r-2xl lg:rounded-r-none pb-3">
            <h1 className="text-orange-400 text-left ml-4 text-sm font-bold mt-3">
              TuiTui
            </h1>
            <h1 className="text-orange-400 text-2xl font-semibold mt-7">
              Login your account
              <br />
              <p className="border-[2px] w-[30px] mx-auto border-orange-400 mt-1" />
            </h1>

            <SocialLogin />

            <p className="mt-4 text-gray-500 font-medium text-sm">
              or use your Email account.
            </p>

            <CForm onSubmit={handleSubmit}>
              <div className="mt-3 flex flex-col justify-center items-center">
                <div className="md:w-64 bg-gray-100 flex items-center p-2 rounded-lg">
                  <CiMail className="mr-2" />
                  <CInput
                    type="text"
                    className="flex-1 outline-none bg-gray-100 w-full"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div className="md:w-64 bg-gray-100 flex items-center p-2 rounded-lg mt-2">
                  <CiLock className="mr-2" />
                  <CInput
                    type="text"
                    className="flex-1 outline-none bg-gray-100 w-full"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex justify-around  items-center mt-2 w-8/12 mx-auto">
                <div className="flex items-center">
                  <input type="checkbox" name="" id="" />
                  <p className="text-gray-400 md:text-sm text-xs">
                    Remember me
                  </p>
                </div>
                <div className=" md:text-sm text-xs text-gray-500 hover:underline">
                  <a href="#">Forget password?</a>
                </div>
              </div>
              <div className="text-sm text-gray-500 hover:underline  lg:hidden block">
                <button className="text-sm text-gray-500 hover:underline">
                  Create an account
                </button>
              </div>
              {isloading && (
                <>
                  <Loader />
                </>
              )}

              <div className="flex gap-3 justify-center items-center ">
                <button
                  disabled={isloading}
                  type="submit"
                  className="border-2  border-orange-400 rounded-3xl px-12 py-2 font-medium text-orange-400 mt-4 relative hover:text-white hover:bg-orange-400 duration-500 group">
                  <span className="bg-blue-400 group-hover:rotate-[230deg] group-hover:bg-blue-300  p-2 opacity-0 group-hover:opacity-100  group-hover:mt-6 mr-5 duration-500 absolute left-3" />
                  <span className="bg-blue-400 group-hover:rotate-[290deg] group-hover:bg-blue-300  opacity-0 group-hover:opacity-100 group-hover:-ml-6 absolute duration-700 p-2 left-3" />
                  Sign in
                  <span className="bg-blue-400 group-hover:rotate-[200deg] group-hover:bg-blue-300  opacity-0 group-hover:opacity-100 p-2  group-hover:mt-6 mr-5 duration-700 absolute right-0" />
                  <span className="bg-blue-400 group-hover:rotate-[250deg] group-hover:bg-blue-300  group-hover:ml-10 opacity-0 group-hover:opacity-100 absolute duration-700 p-2" />
                </button>
              </div>
            </CForm>
          </div>

          <div className="bg-orange-400 w-3/9 rounded-r-2xl px-12 py-36 lg:block hidden">
            <h1 className="text-center text-lg text-white font-semibold ">
              Hello, Friends
            </h1>
            <p className="border-[2px] w-[30px] mx-auto border-white mt-1 " />
            <p className="text-white mt-2 mb-5">
              Fill up the following information an start journey with us!
            </p>

            <Link
              href="/register"
              className="border-2 m  border-white rounded-3xl px-12 py-2 font-medium text-white relative hover:text-orange-400 hover:bg-white duration-500 group">
              <span className="bg-blue-400 group-hover:rotate-[230deg] group-hover:bg-blue-300  p-2 opacity-0 group-hover:opacity-100  group-hover:mt-6 mr-5 duration-500 absolute left-3" />
              <span className="bg-blue-400 group-hover:rotate-[290deg] group-hover:bg-blue-300  opacity-0 group-hover:opacity-100 group-hover:-ml-6 absolute duration-700 p-2 left-3" />
              Sign Up
              <span className="bg-blue-400 group-hover:rotate-[200deg] group-hover:bg-blue-300  opacity-0 group-hover:opacity-100 p-2  group-hover:mt-6 mr-5 duration-700 absolute right-0" />
              <span className="bg-blue-400 group-hover:rotate-[250deg] group-hover:bg-blue-300  group-hover:ml-10 opacity-0 group-hover:opacity-100 absolute duration-700 p-2" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
