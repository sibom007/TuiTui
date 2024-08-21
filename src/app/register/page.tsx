"use client";
import CForm from "@/shared/CFrom";
import CInput from "@/shared/CInput";
import SocialLogin from "@/utils/SocialLogin";
import { validation } from "@/validation/loginvalidation";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";

const RegisterPage = () => {
  const router = useRouter();
  const [Error, setError] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);

  const handleSubmit = async (data: any) => {
    const signupinfo = {
      email: data.email,
      password: data.password,
      name: data.name,
      age: Number(data.age),
    };
    try {
      setloading(true);
      const validationdata = await validation.loginvalidation.parseAsync(
        signupinfo
      );
      setError("");
      axios
        .post("http://localhost:3000/api/register", validationdata)
        .then((response) => {
          toast.success("Account Create Successfully ", {
            position: "top-right",
          });
          setloading(false);
          router.push("/Lobby");
        })
        .catch((e) => {
          toast.error(e.response.data, {
            position: "top-right",
          });
          setloading(false);
        });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMessages = error.errors.map((err) => err.message);
        setError(errorMessages[0]);
      }
    }
  };
  return (
    <div className="md:h-screen flex flex-col justify-center items-center py-2  bg-slate-200">
      <main className="flex flex-1 flex-col w-full justify-center items-center  px-20 text-center">
        <div className="lg:flex rounded-2xl lg:shadow-2xl w-4/5 max-w-4xl">
          <div className="bg-white w-5/6 rounded-l-2xl rounded-r-2xl lg:rounded-r-none pb-3">
            <h1 className="text-orange-400 text-left ml-4 text-sm font-bold mt-3">
              TuiTui
            </h1>
            <h1 className="text-orange-400 text-2xl font-semibold mt-7">
              Create your account
              <br />
              <p className="border-[2px] w-[30px] mx-auto border-orange-400 mt-1" />
            </h1>

            <SocialLogin />

            <p className="mt-4 text-gray-500 font-medium text-sm">
              or use your Email account.
            </p>

            <CForm onSubmit={handleSubmit}>
              <div className="mt-3 flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-4 p-2">
                  <div className=" bg-gray-100 flex  p-2 rounded-lg w-full">
                    <CInput
                      type="text"
                      className="flex-1 outline-none bg-gray-100 w-full"
                      name="name"
                      placeholder="Name"
                    />
                  </div>

                  <div className=" bg-gray-100  p-2 rounded-lg">
                    <CInput
                      type="text"
                      className="flex-1 outline-none bg-gray-100 w-full"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className=" bg-gray-100 w-full  p-2 rounded-lg">
                    <CInput
                      type="text"
                      className="flex-1 outline-none bg-gray-100 w-full"
                      name="password"
                      placeholder="Passowrd"
                    />
                  </div>

                  <div className=" bg-gray-100  p-2 rounded-lg">
                    <CInput
                      type="number"
                      className="flex-1 w-full outline-none bg-gray-100"
                      name="age"
                      placeholder="Age"
                    />
                  </div>
                </div>
              </div>

              {/* {Error === "" || !Error ? (
                <> </>
              ) : (
                <div className="border-red-200 bg-red-100 text-red-800 border-2 p-3 rounded-xl w-3/5 mx-auto mt-4 shadow-md transition-all duration-300 ease-in-out">
                  <p className="text-sm font-semibold">{Error}</p>
                  <button
                    onClick={() => setError("")}
                    className="absolute top-2 right-2 text-red-600 hover:text-red-800">
                    &times;
                  </button>
                </div>
              )} */}

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

              <div className="flex gap-3 justify-center items-center ">
                <button
                  disabled={loading}
                  type="submit"
                  className="border-2  border-orange-400 rounded-3xl px-12 py-2 font-medium text-orange-400 mt-4 relative hover:text-white hover:bg-orange-400 duration-500 group">
                  <span className="bg-blue-400 group-hover:rotate-[230deg] group-hover:bg-blue-300  p-2 opacity-0 group-hover:opacity-100  group-hover:mt-6 mr-5 duration-500 absolute left-3" />
                  <span className="bg-blue-400 group-hover:rotate-[290deg] group-hover:bg-blue-300  opacity-0 group-hover:opacity-100 group-hover:-ml-6 absolute duration-700 p-2 left-3" />
                  Sign up
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
              href="/login"
              className="border-2  border-white rounded-3xl px-12 py-2 font-medium text-white mt-4 relative hover:text-orange-400 hover:bg-white duration-500 group">
              <span className="bg-blue-400 group-hover:rotate-[230deg] group-hover:bg-blue-300  p-2 opacity-0 group-hover:opacity-100  group-hover:mt-6 mr-5 duration-500 absolute left-3" />
              <span className="bg-blue-400 group-hover:rotate-[290deg] group-hover:bg-blue-300  opacity-0 group-hover:opacity-100 group-hover:-ml-6 absolute duration-700 p-2 left-3" />
              Sign in
              <span className="bg-blue-400 group-hover:rotate-[200deg] group-hover:bg-blue-300  opacity-0 group-hover:opacity-100 p-2  group-hover:mt-6 mr-5 duration-700 absolute right-0" />
              <span className="bg-blue-400 group-hover:rotate-[250deg] group-hover:bg-blue-300  group-hover:ml-10 opacity-0 group-hover:opacity-100 absolute duration-700 p-2" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
