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

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>

          {/* =========== Jacqueline P. =========== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">

              {/* LEFT */}
              <div className="w-full lgl:w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  Client Testimonial
                </p>
                <h3 className="text-2xl font-bold">Jacqueline P.</h3>
                <p className="text-base tracking-wide text-gray-500">
                  Professional Client
                </p>
              </div>

              {/* RIGHT */}
              <div className="w-full lgl:w-[60%] flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />

                <div className="w-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-6 lgl:p-8 flex flex-col gap-6">
                  <div className="flex flex-col lgl:items-center py-6 border-b-2 border-gray-900">
                    <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                      A Truly Valuable Experience
                    </h3>
                    <p className="text-base text-gray-400 mt-3">
                      Client Feedback — 2024
                    </p>

                    <div className="text-yellow-500 flex gap-1 mt-4">
                      <RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill />
                    </div>
                  </div>

                  <p className="text-base font-titleFont text-gray-400 leading-6">
                    “I appreciate you so much and I will not forget your
                    professional experience and the value that you have shared
                    with me.”
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* =========== Barbara P. =========== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">

              {/* LEFT */}
              <div className="w-full lgl:w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  Client Testimonial
                </p>
                <h3 className="text-2xl font-bold">Barbara P.</h3>
                <p className="text-base tracking-wide text-gray-500">
                  Business Client
                </p>
              </div>

              {/* RIGHT */}
              <div className="w-full lgl:w-[60%] flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />

                <div className="w-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-6 lgl:p-8 flex flex-col gap-6">
                  <div className="flex flex-col lgl:items-center py-6 border-b-2 border-gray-900">
                    <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                      Smooth, Professional, Reliable
                    </h3>
                    <p className="text-base text-gray-400 mt-3">
                      Client Feedback — 2024
                    </p>

                    <div className="text-yellow-500 flex gap-1 mt-4">
                      <RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill />
                    </div>
                  </div>

                  <p className="text-base font-titleFont text-gray-400 leading-6">
                    “Virginia delivered exactly what we needed and made the
                    process incredibly smooth.”
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* =========== Giovanna L. =========== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">

              {/* LEFT */}
              <div className="w-full lgl:w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                  Client Testimonial
                </p>
                <h3 className="text-2xl font-bold">Giovanna L.</h3>
                <p className="text-base tracking-wide text-gray-500">
                  Creative Client
                </p>
              </div>

              {/* RIGHT */}
              <div className="w-full lgl:w-[60%] flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />

                <div className="w-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-6 lgl:p-8 flex flex-col gap-6">
                  <div className="flex flex-col lgl:items-center py-6 border-b-2 border-gray-900">
                    <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                      A Joy to Work With
                    </h3>
                    <p className="text-base text-gray-400 mt-3">
                      Client Feedback — 2024
                    </p>

                    <div className="text-yellow-500 flex gap-1 mt-4">
                      <RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill />
                    </div>
                  </div>

                  <p className="text-base font-titleFont text-gray-400 leading-6">
                    “Working with Virginia was a joy. She is professional, fast,
                    and truly cares about her clients.”
                  </p>
                </div>
              </div>

            </div>
          </div>

        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
