import React from 'react';
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {logo} from "../../assets/images";
import { virginia } from '../../assets/images';
import { navLinks } from '../../constants';

const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    console.log(showMenu);

    return (
        <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-[#FF7ACD]">
            <div className="flex items-center gap-1">
                <img
                    src={virginia}
                    alt="Virginia"
                    className="w-14 h-14 lgl:w-16 lgl:h-16 rounded-full object-cover object-top border-2 border-[#FF7ACD] shadow-md"
                />

                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer"
                >
                    <img
                    src={logo}
                    alt="Logo"
                    className="w-12 lgl:w-14 object-contain"
                    />
                </Link>
            </div>

            <div>
                <ul className="hidden md:inline-flex flex items-center gap-6 lgl:gap-10">
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
                <span onClick={()=>setShowMenu(!showMenu)} className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer">
                    <FiMenu />
                </span>
                {showMenu && (
                    <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                        <div className= "flex flex-col gap-8 py-2 relative">
                            <div className="flex items-center gap-2">
                                <img src={virginia} alt="Virginia" className="w-16 h-16 rounded-full object-cover object-top border-2 border-[#FF7ACD] shadow-md" />
                                <img src={logo} alt="Logo" className="w-16 h-auto object-contain" />
                            
                            </div>
                            <p className="text-sm text-gray-400 mt-2">
                                    Welcome to my portfolio! I'm a passionate developer dedicated to crafting innovative solutions and creating impactful digital experiences. Explore my projects and let's connect!
                            </p>
                            <ul className="flex flex-col gap-4">
                                { navLinks.map(({ _id, title, link }) => (
                                    <li key={_id} className="text-base font-normal text-[#B57CFF] tracking-wide cursor-pointer hover:text-[#FF7ACD] duration-300"
                                    >
                                        <Link
                                            onClick={() => setShowMenu(false)}
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
                            <div className="flex flex-col gap-4">
                                <h2 className="text-base uppercase font-titleFont mb-4">
                                    Find me in
                                </h2>
                                <div className="flex gap-4">
                                    <span className="bannerIcon">
                                        <FaFacebookF />
                                    </span>
                                    <span className="bannerIcon">
                                        <FaTwitter />
                                    </span>
                                    <span className="bannerIcon">
                                        <FaLinkedinIn />
                                    </span>
                                </div>
                            </div>
                            <span 
                                onClick={() => setShowMenu(false)} 
                                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                            >
                                <MdClose />
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar