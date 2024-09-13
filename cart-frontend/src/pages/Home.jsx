import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
    <div className="relative flex flex-col gap-y-0 items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center">
        {/* "Farm" text */}
        <h2 className="text-[50px] md:text-[100px] lg:text-[150px] text-slate-300 dark:text-slate-50 font-bold lg:tracking-wide lg:leading-tight lg:shadow-md md:hover:text-slate-400">
          Farm
        </h2>
        {/* "Fresh" text, right below "Farm" */}
        <h2 className="text-[50px] md:text-[100px] lg:text-[150px] text-slate-300 dark:text-slate-50 font-bold lg:tracking-wide lg:leading-tight lg:shadow-md md:hover:text-slate-400">
          Fresh
        </h2>
      </div>
      <button className="mt-8 bg-[#2a2a2a] dark:bg-slate-800 text-white p-2 rounded-md cursor-pointer hover:bg-black">
        <Link to="/explore">Explore Now</Link>
      </button>
    </div>
  </div>
  );
};

export default Home;
