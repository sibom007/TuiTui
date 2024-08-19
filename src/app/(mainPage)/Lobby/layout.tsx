import DesktopBar from "@/components/DesktopBar";
import MobilBar from "@/components/MobilBar";
import MobilNavbar from "@/components/MobilNavbar";
import SideNavber from "@/components/SideNavber";
import { ReactNode } from "react";

const Lobbylayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <DesktopBar />
      <MobilBar />
      <div className="md:flex w-full min-h-full bg-[#313338]">
        <SideNavber />
        <div className="p-10">{children}</div>
        <MobilNavbar />
      </div>
    </div>
  );
};

export default Lobbylayout;
