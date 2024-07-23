import { ReactElement, useState } from "react";
import RenderSearch from "./RenderSearch";

const SiteHeader = () => {
  const [result, setResult] = useState<ReactElement>();
  const handleSubmit = (e: string) => {
    setResult(<RenderSearch e={e} />);
  };

  return (
    <>
      <div className="px-20 sticky top-0 z-50 bg-slate-300 shadow-md shadow-slate-500">
        <div className=" py-5 flex justify-between items-center ">
          <a className="font-bold lg:w-1/3 md:w-2/2 text-2xl" href="/">
            CAKE BY THE OCEAN
          </a>
          <form className="w-full">
            <input
              className="border border-black rounded-md w-full h-10 px-3"
              type="search"
              name="search"
              placeholder="Serach for meals"
              onChange={(e) => handleSubmit(e.target.value)}
            />
          </form>
        </div>
      </div>
      {result && result}
    </>
  );
};

export default SiteHeader;
