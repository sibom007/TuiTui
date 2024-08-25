import TinderCards from "@/lib/UIDesign/TinderCard";

const page = () => {
  return (
    <div className="w-[75vw]  min-h-[95vw] md:min-h-[60vw] lg:min-h-[49vw] xl:min-h-[39vw] flex justify-center items-center ">
      <TinderCards />
    </div>
  );
};

export default page;
