import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/images";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">

      {/* Logo + Socials */}
      <div className="w-full h-full flex flex-col gap-8">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <img className="w-32" src={logo} alt="logo" />
        </Link>

        <div className="flex gap-4">
          <span className="bannerIcon"><FaFacebookF /></span>
          <span className="bannerIcon"><FaTwitter /></span>
          <span className="bannerIcon"><FaLinkedinIn /></span>
        </div>
      </div>

      {/* Quick Links */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wide">Quick Links</h3>

        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">

          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group"
            >
              About
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group"
            >
              Portfolio
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>

          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group"
            >
              Services
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>

          <li>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group"
            >
              Blog
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group"
            >
              Contact
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          </li>

        </ul>
      </div>

      {/* Resources */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wide">Resources</h3>

        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li className="text-gray-400">Authentication</li>
          <li className="text-gray-400">System Status</li>
          <li className="text-gray-400">Terms of Service</li>
          <li className="text-gray-400">Pricing</li>
          <li className="text-gray-400">Something</li>
        </ul>
      </div>

      {/* Developers */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wide">Developers</h3>

        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li className="text-gray-400">Documentation</li>
          <li className="text-gray-400">Authentication</li>
          <li className="text-gray-400">API Reference</li>
          <li className="text-gray-400">Support</li>
          <li className="text-gray-400">Open Source</li>
        </ul>
      </div>

    </div>
  );
};

export default Footer;
