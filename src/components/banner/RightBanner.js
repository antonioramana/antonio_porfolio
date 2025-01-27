import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[200px] h-[150px] md:w-[300px] md:h-[250px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[450px] object-cover rounded-2xl shadow-md"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[220px] h-[150px] md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[250px] opacity-70 rounded-2xl"></div>
    </div>
  );
};

export default RightBanner;
