import React from 'react';
import { motion } from 'framer-motion';

// Reusable bar component
const Bar = ({ label, width, delay = 0.5 }) => (
    <div className="overflow-x-hidden">
        <p className="text-sm uppercase font-medium">{label}</p>
        <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
            <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay }}
                className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                style={{ width }}
            >
                <span className="absolute -top-7 right-0">{width}</span>
            </motion.span>
        </span>
    </div>
);

// Arrays of skills
const designSkills = [
    { label: "Photoshop", width: "100%" },
    { label: "Illustrator", width: "95%" },
    { label: "InDesign", width: "95%" },
    { label: "Premiere Pro", width: "90%" },
    { label: "Canva", width: "100%" },
    { label: "Multimedia Authoring", width: "90%" },
];

const devSkills = [
    { label: "HTML5", width: "100%" },
    { label: "CSS3", width: "95%" },
    { label: "JavaScript (ES6+)", width: "85%" },
    { label: "React", width: "80%" },
    { label: "MongoDB", width: "85%" },
    { label: "SQL", width: "90%" },
    { label: "Responsive Design", width: "95%" },
    { label: "Git & GitHub", width: "90%" },
    { label: "API Integration", width: "85%" },
    { label: "Python (Programming Logic)", width: "80%" },
];

const Skills = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { duration: 0.5 } }} 
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >

            {/* DESIGN SKILLS */}
            <div className="w-full lgl:w-1/2">
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Design Skills</h2>
                </div>

                <div className="mt-6 lgl:mt-14 w-full flex flex-col gap-6">
                    {designSkills.map((skill, index) => (
                        <Bar 
                            key={skill.label} 
                            label={skill.label} 
                            width={skill.width} 
                            delay={0.3 + index * 0.1}
                        />
                    ))}
                </div>
            </div>

            {/* DEVELOPMENT SKILLS */}
            <div className="w-full lgl:w-1/2">
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Development Skills</h2>
                </div>

                <div className="mt-6 lgl:mt-14 w-full flex flex-col gap-6">
                    {devSkills.map((skill, index) => (
                        <Bar 
                            key={skill.label} 
                            label={skill.label} 
                            width={skill.width} 
                            delay={0.3 + index * 0.1}
                        />
                    ))}
                </div>
            </div>

        </motion.div>
    );
}

export default Skills;
