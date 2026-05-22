import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Full Stack Developer.", "UI Designer.", "Creator."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className="text-lg font-normal">EXPLORING MY JOURNEY</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm {" "}
                    <span className="text-[#FF7ACD] capitalize">Virginia Marc</span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    a <span className="text-white">{text}</span>
                    <Cursor 
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#FF7ACD"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    I am a passionate web developer with a strong desire to create innovative and user-friendly websites. With a solid foundation in HTML, CSS, and JavaScript, I am constantly expanding my skill set to stay up-to-date with the latest technologies and trends in web development. I am dedicated to delivering high-quality work and providing exceptional user experiences through my projects.
                </p>
            </div>
                <div className="flex justify-between items-start gap-10 w-full">

                    <div className="flex flex-col">
                        <h2 className="text-base uppercase font-titleFont mb-4">
                            Explore My Journey
                        </h2>
                        <div className="flex gap-4">
                            <span className="bannerIcon"><FaFacebookF /></span>
                            <span className="bannerIcon"><FaTwitter /></span>
                            <span className="bannerIcon"><FaLinkedinIn /></span>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-base uppercase font-titleFont mb-4">
                            BEST SKILLS ON 
                        </h2>
                        <div className="flex gap-4">
                            <span className="bannerIcon"><FaReact /></span>
                            <span className="bannerIcon"><SiTailwindcss /></span>
                            <span className="bannerIcon"><SiFigma /></span>
                            <span className="bannerIcon"><SiNextdotjs /></span>
                        </div>
                    </div>

                </div>
        </div>
    );
}

export default LeftBanner