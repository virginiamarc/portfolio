import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = () => {
  return (
    <section id='home' 
        className="w-full py-20 flex items-center border-b-[1px] font-titleFont 
        border-[#FF7ACD]"
    >
        <LeftBanner />
        <RightBanner />
    </section>
  );
}

export default Banner