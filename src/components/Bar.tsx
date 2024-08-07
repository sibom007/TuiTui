import { BsFillSearchHeartFill } from "react-icons/bs";

const Bar = () => {
  return (
    <div className=" md:hidden">
      <div className="bg-orange-400 p-2 grid grid-cols-2 justify-center items-center  ">
        <div>
          <p className=" col-span-1 text-center text-xl font-bold  text-yellow-50">
            TuiTui
          </p>
        </div>
        <div>
          <div className="col-span-11 bg-yellow-100/40 rounded-full py-2">
            <div className="flex items-center ml-7 gap-4">
              <BsFillSearchHeartFill />

              <input
                type="text"
                className="bg-transparent outline-none flex-1 text-pretty text-white custom-placeholder"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
