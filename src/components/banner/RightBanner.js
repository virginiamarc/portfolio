import React from 'react';
import { bannerImg } from "../../assets/images";

const RightBanner = () => {
  return (
    <div className="w-1/2 flex justify-center items-center relative">
        <img 
            className="w-[500px] h-[680px] z-10"
            src={bannerImg} 
            alt="Banner" 
        />
        <div className="absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r 
            from-[#1E1E20] to-[#2C2C30] shadow-shadowOne flex justify-center items-center rounded-full filter"
        ></div>
    </div>
  );
}

export default RightBanner;