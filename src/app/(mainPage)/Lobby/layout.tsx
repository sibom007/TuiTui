import Bar from "@/components/Bar";
import MobilNavbar from "@/components/MobilNavbar";
import SideNavber from "@/components/SideNavber";
import { ReactNode } from "react";

const Lobbylayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Bar />
      <div className="md:flex w-full h-full">
        <SideNavber />
        {children}
        <MobilNavbar />
      </div>
    </div>
  );
};

export default Lobbylayout;
