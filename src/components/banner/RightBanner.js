import React from 'react';
import { bannerImg } from "../../assets/images";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        <img 
            className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
            src={bannerImg} 
            alt="Virginia Marc" 
        />
        <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r 
            from-[#1E1E20] to-[#2C2C30] shadow-shadowOne flex justify-center items-center rounded-full filter"
        ></div>
    </div>
  );
}

export default RightBanner;