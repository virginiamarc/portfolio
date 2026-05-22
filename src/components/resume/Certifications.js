import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Certifications = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { duration: 0.5 } }} 
            id="certifications" 
            className="w-full flex flex gap-20"
        >
            {/* LEFT COLUMN */}
            <div className="w-1/2">
                <div className="py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">
                        Features
                    </p>
                    <h2 className="text-4xl font-bold">Certifications</h2>
                </div>

                <div className="mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard 
                        title="A.S. - Web Development & Internet Services Technology" 
                        subTitle="Hillsborough College (2024 - 2026)" 
                        results="Success" 
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate." 
                    />
                    <ResumeCard 
                        title="B.S. - Biology, Minor in Chemistry" 
                        subTitle="Florida Agricultural and Mechanical University (2003 - 2009)" 
                        results="Success" 
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate." 
                    />
                    <ResumeCard 
                        title="Data Analysis" 
                        subTitle="Online Course (2023 - 2023)" 
                        results="Success" 
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate." 
                    />
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="w-1/2">
                <div className="py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">
                        Features
                    </p>
                    <h2 className="text-4xl font-bold">Development Skills</h2>
                </div>

                <div className="mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard 
                        title="A.S. - Web Development & Internet Services Technology" 
                        subTitle="Hillsborough College (2024 - 2026)" 
                        results="Success" 
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate." 
                    />
                    <ResumeCard 
                        title="B.S. - Biology, Minor in Chemistry" 
                        subTitle="Florida Agricultural and Mechanical University (2003 - 2009)" 
                        results="Success" 
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate." 
                    />
                    <ResumeCard 
                        title="Data Analysis" 
                        subTitle="Online Course (2023 - 2023)" 
                        results="Success" 
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate." 
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default Certifications;