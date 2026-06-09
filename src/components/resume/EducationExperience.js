import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { duration: 0.5 } }} 
            id="education" 
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >

            {/* LEFT COLUMN — EDUCATION */}
            <div className="w-full lgl:w-1/2">
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">
                        2003 - Present
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
                </div>

                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">

                    <ResumeCard 
                        title="A.S. – Web Development & Internet Services Technology" 
                        subTitle="Hillsborough Community College (2024 – Present)" 
                        results="4.0 GPA" 
                        des="In Progress - Expected Graduation: December2026. Dean’s List: Fall 2024, Spring 2025, Fall 2025. Coursework includes Database Programming, Client‑Side & Server‑Side Web Programming, Website Creation, Multimedia Authoring, Programming Logic, and Digital Audio/Video Design."
                    />

                    <ResumeCard 
                        title="B.S. – Biology, Minor in Chemistry" 
                        subTitle="Florida A&M University (2003 – 2009)" 
                        results="Completed" 
                        des="Completed a full undergraduate program with a strong foundation in scientific research, analytical thinking, and laboratory methodology."
                    />

                    <ResumeCard 
                        title="High School Diploma" 
                        subTitle="Plantation High School (Graduated 2003)" 
                        results="Completed" 
                        des="Graduated with a focus on science and technology, laying the foundation for future academic and professional development."
                    />

                </div>
            </div>

            {/* RIGHT COLUMN — EXPERIENCE */}
            <div className="w-full lgl:w-1/2">
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">
                        2019 - Present
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
                </div>

                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">

                    <ResumeCard 
                        title="Freelance Graphic Designer" 
                        subTitle="Self‑Employed (2019 – 2024)" 
                        results="Remote" 
                        des="Designed flyers, brochures, business cards, and branded marketing materials. Collaborated with clients to refine concepts, deliver polished designs, and manage multiple projects simultaneously using Canva and Adobe Creative Suite."
                    />

                    <ResumeCard 
                        title="Programming Logic – Team Lead" 
                        subTitle="HCC Project (Fall 2024)" 
                        results="Python" 
                        des="Led a team of five to build a functional Pizza Ordering App using Python. Managed timelines, wrote efficient code, and conducted user testing."
                    />

                    <ResumeCard 
                        title="Web Authoring & Multimedia Projects" 
                        subTitle="HCC Coursework (2024 – 2026)" 
                        results="HTML/CSS/JS" 
                        des="Developed responsive websites, multimedia projects, and interactive client‑side applications using HTML, CSS, JavaScript, Photoshop, Illustrator, Premiere Pro, and Animate."
                    />

                </div>
            </div>
        </motion.div>
    );
}

export default Education;
