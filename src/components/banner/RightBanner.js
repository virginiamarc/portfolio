import React from "react";
import { bannerImg } from "../../assets/images";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">

      {/* Circle Glow Container */}
      <div
        className="relative flex justify-center items-center
        w-[400px] h-[400px]
        md:w-[480px] md:h-[480px]
        lgl:w-[650px] lgl:h-[650px]
        bg-gradient-to-br from-[#1E1E20] to-[#2C2C30]
        rounded-full shadow-shadowOne overflow-hidden"
      >
        {/* Image INSIDE the circle */}
        <img
          className="h-full w-full object-cover object-center"
          src={bannerImg}
          alt="Virginia Marc"
        />
      </div>

    </div>
  );
};

export default RightBanner;
