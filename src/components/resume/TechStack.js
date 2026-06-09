import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub,
  FaPalette, FaDatabase
} from "react-icons/fa";
import { 
  SiJavascript, SiMongodb, SiExpress, SiVercel, SiRender, SiCanva, SiFigma 
} from "react-icons/si";

const techStack = {
  frontend: [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
    { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
  ],

  backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  ],

  database: [
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Database", icon: <FaDatabase className="text-red-500" /> },
  ],

  tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Render", icon: <SiRender className="text-blue-300" /> },
  ],

  design: [
    { name: "Adobe Suite", icon: <FaPalette className="text-red-500" /> },
  ],
};

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      id="techstack"
      className="w-full py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Tech Stack
      </h2>

      {/* CATEGORY SECTIONS */}
      {Object.entries(techStack).map(([category, items]) => (
        <div key={category} className="w-full mb-20">
          <h3 className="text-lg md:text-xl font-semibold mb-12 flex items-center justify-center gap-4 text-gray-200 uppercase tracking-widest">
            <span className="h-[1px] w-12 bg-[#FF7ACD]/40"></span>
            {category}
            <span className="h-[1px] w-12 bg-[#FF7ACD]/40"></span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
            {items.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="text-5xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">{tech.icon}</div>
                <p className="text-sm font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default TechStack;
