import React, { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import { quote } from "../../assets/images";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-designColor flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-designColor flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonials = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => setDotActive(next),
    appendDots: (dots) => (
      <div style={{ borderRadius: "10px", padding: "10px" }}>
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                background: "#CC55FF",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section
      id="testimonials"
      className="w-full py-20 border-b-[1px] border-[#FF7ACD]"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonials" />
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <Slider {...settings}>

          {/* Jacqueline P. */}
          <div className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
            <img className="w-16 mb-6" src={quote} alt="quote" />

            <p className="text-lg text-gray-300 leading-7 italic">
              “I appreciate you so much and I will not forget your professional
              experience and the value that you have shared with me.”
              <span className="ml-1 italic text-gray-300"> — Jacqueline P.</span>
            </p>

            <div className="flex gap-1 text-yellow-500 mt-4">
              <RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill />
            </div>
          </div>

          {/* Barbara P. */}
          <div className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
            <img className="w-16 mb-6" src={quote} alt="quote" />

            <p className="text-lg text-gray-300 leading-7 italic">
              “Virginia delivered exactly what we needed and made the process
              incredibly smooth.”
              <span className="ml-1 italic text-gray-300"> — Barbara P.</span>
            </p>

            <div className="flex gap-1 text-yellow-500 mt-4">
              <RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill />
            </div>
          </div>

          {/* Giovanna L. */}
          <div className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
            <img className="w-16 mb-6" src={quote} alt="quote" />

            <p className="text-lg text-gray-300 leading-7 italic">
              “Working with Virginia was a joy. She is professional, fast, and truly
              cares about her clients.”
              <span className="ml-1 italic text-gray-300"> — Giovanna L.</span>
            </p>

            <div className="flex gap-1 text-yellow-500 mt-4">
              <RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill />
            </div>
          </div>

        </Slider>
      </div>
    </section>

  );
};

export default Testimonials;
