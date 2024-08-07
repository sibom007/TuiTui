"use client";
import { loginprops } from "@/types";
import SocialLogin from "@/utils/SocialLogin";

import { validation } from "@/validation/loginvalidation";
import axios from "axios";
import { signIn } from "next-auth/react";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { use, useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { CiLock, CiMail } from "react-icons/ci";
import { FcAddImage, FcGoogle } from "react-icons/fc";
import { z } from "zod";

const AuthorizationPage = () => {
  const [variant, setVariant] = useState<"SIGNIN" | "SIGNUP">("SIGNIN");
  const [Error, setError] = useState<string>("");
  const [loading, setloading] = useState<boolean>(false);
  const router = useRouter();

  const toggleVariant = useCallback(() => {
    if (variant === "SIGNIN") {
      setVariant("SIGNUP");
    } else {
      setVariant("SIGNIN");
    }
  }, [variant]);

  const { register, handleSubmit, reset } = useForm<loginprops>();

  // const handleimgupload = async (result: any) => {
  //   setImg(await result?.info?.secure_url);
  //   toast.success("Image Uploaded");
  // };

  const onSubmit: SubmitHandler<loginprops> = async (data) => {
    if (variant === "SIGNUP") {
      const signupinfo = {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        age: Number(data.age),
      };

      try {
        setloading(true);
        const validationdata = await validation.loginvalidation.parseAsync(
          signupinfo
        );

        setError("");
        axios
          .post("api/register", validationdata)
          .then((response) => {
            toast.success("Account Create Successfully ", {
              position: "top-right",
            });
            setloading(false);
            setVariant("SIGNIN");
            reset();
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
    }
    if (variant === "SIGNIN") {
      try {
        setloading(true);
        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.error) {
            toast.error(callback.error || "invaild credentials", {
              position: "top-right",
            });
            setloading(false);
          }
          if (callback?.ok) {
            setloading(false);
            toast.success("Login Successful", { position: "top-right" });
            router.push("/");
          }
        });
      } catch (error) {}
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
              {variant === "SIGNIN"
                ? "Sign in to your account "
                : "Create your account"}
              <br />
              <p className="border-[2px] w-[30px] mx-auto border-orange-400 mt-1" />
            </h1>

            <SocialLogin />

            <p className="mt-4 text-gray-500 font-medium text-sm">
              or use your Email account.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-3 flex flex-col justify-center items-center">
              {variant === "SIGNIN" ? (
                <div className="px-2">
                  <div className="md:w-64 bg-gray-100 flex items-center p-2 rounded-lg">
                    <CiMail className="mr-2" />
                    <input
                      type="text"
                      className="flex-1 w-full outline-none bg-gray-100"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className="md:w-64 bg-gray-100 flex items-center p-2 rounded-lg mt-2">
                    <CiLock className="mr-2" />
                    <input
                      type="text"
                      className="flex-1 w-full outline-none bg-gray-100"
                      placeholder="Password"
                      {...register("password", { required: true })}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-4 p-2">
                    <div className=" bg-gray-100 flex  p-2 rounded-lg w-full">
                      <input
                        type="text"
                        className="flex-1 outline-none bg-gray-100 w-full"
                        placeholder="First name"
                        {...register("firstName", { required: true })}
                      />
                    </div>
                    <div className=" bg-gray-100 w-full  p-2 rounded-lg">
                      <input
                        type="text"
                        className="flex-1 outline-none bg-gray-100 w-full"
                        placeholder="Last name"
                        {...register("lastName", { required: true })}
                      />
                    </div>
                    <div className=" bg-gray-100  p-2 rounded-lg">
                      <input
                        type="text"
                        className="flex-1 outline-none bg-gray-100 w-full"
                        placeholder="Email"
                        {...register("email", { required: true })}
                      />
                    </div>
                    <div className=" bg-gray-100 w-full  p-2 rounded-lg">
                      <input
                        type="text"
                        className="flex-1 outline-none bg-gray-100 w-full"
                        placeholder="Password"
                        {...register("password", { required: true })}
                      />
                    </div>

                    <div className=" bg-gray-100  p-2 rounded-lg">
                      <input
                        type="number"
                        className="flex-1 w-full outline-none bg-gray-100"
                        placeholder="Age"
                        {...register("age", { required: true })}
                      />
                    </div>
                  </div>
                </>
              )}

              {Error === "" || !Error ? (
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
              )}

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
                {variant === "SIGNIN" ? (
                  <button
                    onClick={toggleVariant}
                    className="text-sm text-gray-500 hover:underline">
                    Create an account
                  </button>
                ) : (
                  <button
                    onClick={toggleVariant}
                    className="text-sm text-gray-500 hover:underline">
                    Already have an account?
                  </button>
                )}
              </div>

              <div className="flex gap-3 items-center ">
                {variant === "SIGNIN" ? (
                  <button
                    disabled={loading}
                    type="submit"
                    className="border-2  border-orange-400 rounded-3xl px-12 py-2 font-medium text-orange-400 mt-4 relative hover:text-white hover:bg-orange-400 duration-500 group">
                    <span className="bg-blue-400 group-hover:rotate-[230deg] group-hover:bg-blue-300  p-2 opacity-0 group-hover:opacity-100  group-hover:mt-6 mr-5 duration-500 absolute left-3" />
                    <span className="bg-blue-400 group-hover:rotate-[290deg] group-hover:bg-blue-300  opacity-0 group-hover:opacity-100 group-hover:-ml-6 absolute duration-700 p-2 left-3" />
                    Sign in
                    <span className="bg-blue-400 group-hover:rotate-[200deg] group-hover:bg-blue-300  opacity-0 group-hover:opacity-100 p-2  group-hover:mt-6 mr-5 duration-700 absolute right-0" />
                    <span className="bg-blue-400 group-hover:rotate-[250deg] group-hover:bg-blue-300  group-hover:ml-10 opacity-0 group-hover:opacity-100 absolute duration-700 p-2" />
                  </button>
                ) : (
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
                )}
              </div>
            </form>
          </div>

          <div className="bg-orange-400 w-3/9 rounded-r-2xl px-12 py-36 lg:block hidden">
            <h1 className="text-center text-lg text-white font-semibold ">
              Hello, Friends
            </h1>
            <p className="border-[2px] w-[30px] mx-auto border-white mt-1 " />
            <p className="text-white mt-2">
              Fill up the following information an start journey with us!
            </p>

            {variant === "SIGNUP" ? (
              <button
                onClick={toggleVariant}
                className="border-2  border-white rounded-3xl px-12 py-2 font-medium text-white mt-4 relative hover:text-orange-400 hover:bg-white duration-500 group">
                <span className="bg-blue-400 group-hover:rotate-[230deg] group-hover:bg-blue-300  p-2 opacity-0 group-hover:opacity-100  group-hover:mt-6 mr-5 duration-500 absolute left-3" />
                <span className="bg-blue-400 group-hover:rotate-[290deg] group-hover:bg-blue-300  opacity-0 group-hover:opacity-100 group-hover:-ml-6 absolute duration-700 p-2 left-3" />
                Sign IN
                <span className="bg-blue-400 group-hover:rotate-[200deg] group-hover:bg-blue-300  opacity-0 group-hover:opacity-100 p-2  group-hover:mt-6 mr-5 duration-700 absolute right-0" />
                <span className="bg-blue-400 group-hover:rotate-[250deg] group-hover:bg-blue-300  group-hover:ml-10 opacity-0 group-hover:opacity-100 absolute duration-700 p-2" />
              </button>
            ) : (
              <button
                onClick={toggleVariant}
                className="border-2  border-white rounded-3xl px-12 py-2 font-medium text-white mt-4 relative hover:text-orange-400 hover:bg-white duration-500 group">
                <span className="bg-blue-400 group-hover:rotate-[230deg] group-hover:bg-blue-300  p-2 opacity-0 group-hover:opacity-100  group-hover:mt-6 mr-5 duration-500 absolute left-3" />
                <span className="bg-blue-400 group-hover:rotate-[290deg] group-hover:bg-blue-300  opacity-0 group-hover:opacity-100 group-hover:-ml-6 absolute duration-700 p-2 left-3" />
                Sign Up
                <span className="bg-blue-400 group-hover:rotate-[200deg] group-hover:bg-blue-300  opacity-0 group-hover:opacity-100 p-2  group-hover:mt-6 mr-5 duration-700 absolute right-0" />
                <span className="bg-blue-400 group-hover:rotate-[250deg] group-hover:bg-blue-300  group-hover:ml-10 opacity-0 group-hover:opacity-100 absolute duration-700 p-2" />
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthorizationPage;
