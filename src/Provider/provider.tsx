"use client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { store } from "@/Redux/store";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        {children}
        <Toaster />
      </Provider>
    </SessionProvider>
  );
};

export default MainProvider;
