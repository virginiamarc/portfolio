import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { FaLinkedin } from "react-icons/fa";
import MicrosoftLearnIcon from "../icons/MicrosoftLearnIcon";

const certifications = [
  {
    title: "MERN Essential Training",
    subTitle: "LinkedIn Learning",
    year: "03/17/2026",
    image: "/certificates/mern.png",
  },
  {
    title: "React.js Essential Training",
    subTitle: "LinkedIn Learning",
    year: "03/07/2026",
    image: "/certificates/react.png",
  },
  {
    title: "JSON Essential Training",
    subTitle: "LinkedIn Learning",
    year: "02/08/2026",
    image: "/certificates/json.png",
  },
  {
    title: "Git Essential Training (2023)",
    subTitle: "LinkedIn Learning",
    year: "02/05/2026",
    image: "/certificates/git.png",
  },
  {
    title: "Node.js Essential Training",
    subTitle: "LinkedIn Learning",
    year: "01/20/2026",
    image: "/certificates/node.png",
  },
  {
    title: "AI Programming for JavaScript Developers",
    subTitle: "LinkedIn Learning",
    year: "10/19/2025",
    image: "/certificates/ai.png",
  },
  {
    title: "Learning JavaScript Debugging",
    subTitle: "LinkedIn Learning",
    year: "10/20/2025",
    image: "/certificates/debugging.png",
  },
];

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white text-xl bg-black/40 px-4 py-2 rounded-lg hover:bg-black/60 transition"
            >
              Close
            </button>

            <motion.img
              src={selectedImage}
              alt="Certificate"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        id="certifications"
        className="w-full py-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Certifications
        </h2>

        {/* Divider Header */}
        <h3 className="text-lg md:text-xl font-semibold mb-12 flex items-center justify-center gap-4 text-gray-200 uppercase tracking-widest">
          <span className="h-[1px] w-12 bg-[#FF7ACD]/40"></span>
          <FaLinkedin className="text-xl" />
          LinkedIn Learning
          <span className="h-[1px] w-12 bg-[#FF7ACD]/40"></span>
        </h3>

        {/* Certification Cards */}
        <div className="flex flex-col gap-10 max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(cert.image)}
            >
              <div className="flex items-center justify-between p-5 rounded-lg border border-gray-700 bg-black/20 hover:bg-black/30 transition-all duration-300 group-hover:shadow-[0_0_25px_#FF7ACD50]">
                
                {/* ResumeCard Content */}
                <div className="w-[70%]">
                  <ResumeCard
                    title={cert.title}
                    subTitle={cert.subTitle}
                    results={cert.year}
                    des=""
                  />
                </div>

                {/* Thumbnail */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-20 h-20 object-cover rounded-md shadow-md group-hover:scale-105 group-hover:shadow-[0_0_15px_#FF7ACD80] transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Azure Divider (empty for now) */}
        <h3 className="text-lg md:text-xl font-semibold my-12 flex items-center justify-center gap-4 text-gray-200 uppercase tracking-widest">
          <span className="h-[1px] w-12 bg-[#FF7ACD]/40"></span>
          Azure Certifications
          <span className="h-[1px] w-12 bg-[#FF7ACD]/40"></span>
        </h3>

        {/* Azure Placeholder Cards */}
        <div className="flex flex-col gap-10 max-w-3xl mx-auto">

        {/* AZ-900 */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
            className="group cursor-default"
        >
            <div className="flex items-center justify-between p-5 rounded-lg border border-gray-700 bg-black/20 opacity-60">
            <div className="w-[70%]">
                <h4 className="text-xl font-semibold text-gray-300">
                AZ-900: Microsoft Azure Fundamentals
                </h4>
                <p className="text-sm text-gray-400">Microsoft Learn</p>
                <p className="text-sm text-designColor mt-1 tracking-wide">
                Coming Soon
                </p>
            </div>

            <div className="w-20 h-20 rounded-md bg-gray-700/40 flex items-center justify-center">
                <MicrosoftLearnIcon className="w-10 h-10 opacity-70" />
            </div>
            </div>
        </motion.div>

        {/* AI-900 */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
            className="group cursor-default"
        >
            <div className="flex items-center justify-between p-5 rounded-lg border border-gray-700 bg-black/20 opacity-60">
            <div className="w-[70%]">
                <h4 className="text-xl font-semibold text-gray-300">
                AI-900: Azure AI Fundamentals
                </h4>
                <p className="text-sm text-gray-400">Microsoft Learn</p>
                <p className="text-sm text-designColor mt-1 tracking-wide">
                Coming Soon
                </p>
            </div>

            <div className="w-20 h-20 rounded-md bg-gray-700/40 flex items-center justify-center">
                <MicrosoftLearnIcon className="w-10 h-10 opacity-70" />
            </div>
            </div>
        </motion.div>

        {/* DP-900 (optional) */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
            className="group cursor-default"
        >
            <div className="flex items-center justify-between p-5 rounded-lg border border-gray-700 bg-black/20 opacity-60">
            <div className="w-[70%]">
                <h4 className="text-xl font-semibold text-gray-300">
                DP-900: Azure Data Fundamentals
                </h4>
                <p className="text-sm text-gray-400">Microsoft Learn</p>
                <p className="text-sm text-designColor mt-1 tracking-wide">
                Coming Soon
                </p>
            </div>

            <div className="w-20 h-20 rounded-md bg-gray-700/40 flex items-center justify-center">
                <MicrosoftLearnIcon className="w-10 h-10 opacity-70" />
            </div>
            </div>
        </motion.div>

        </div>

      </motion.div>
    </>
  );
};

export default Certifications;
