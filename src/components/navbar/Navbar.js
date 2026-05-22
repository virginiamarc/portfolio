import React from 'react';
import { Link } from "react-scroll";
import {logo} from "../../assets/images";
import { virginia } from '../../assets/images';
import { navLinks } from '../../constants';

const Navbar = () => {
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-[#FF7ACD]">
        <div className="flex items-center gap-0.1">
            <img src={virginia} alt="Virginia" className="w-16 h-16 rounded-full object-cover object-top border-2 border-[#FF7ACD] shadow-md" />
            <img src={logo} alt="Logo" className="w-16 h-auto object-contain" />
        </div>
        <div>
            <ul className="flex items-center gap-10">
                {navLinks.map(({ _id, title, link }) => (
                    <li 
                        className="text-base font-normal text-[#B57CFF] tracking-wide cursor-pointer hover:text-[#FF7ACD] transition-colors duration-200"
                        key={_id}
                    >
                        <Link
                         activeClass="active"
                         to={link} 
                         spy={true} 
                         smooth={true} 
                         offset={-70}
                         duration={500}
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default Navbar