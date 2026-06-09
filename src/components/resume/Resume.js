import React, { useState } from 'react';
import Title from '../layouts/Title';
import EducationExperience from './EducationExperience';
import Skills from './Skills';
import TechStack from './TechStack';
import Certifications from './Certifications';

const Resume = () => {
    const [educationExperienceData, setEducationExperienceData]= useState(true);
    const [skillsData, setSkillsData]= useState(false);
    const [techStackData, setTechStackData]= useState(false);
    const [certificationsData, setCertificationsData]= useState(false);
    return (
        <section id="resume" className="w-full py-20 border-b-[1px] border-[#FF7ACD]">
            <div className="flex justify-center items-center text-center">
                <Title title="Resume Overview" des="Professional Journey" />
            </div>

            <div>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    <li
                        onClick={() => {
                            setEducationExperienceData(true);
                            setSkillsData(false);
                            setTechStackData(false);
                            setCertificationsData(false);
                        }}
                        className={`${educationExperienceData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}
                    >
                        Education & Experience
                    </li>

                    <li onClick={() => 
                            setEducationExperienceData(false) &
                            setSkillsData(true) &
                            setTechStackData(false) &
                            setCertificationsData(false)
                        }
                        className={`${
                            skillsData 
                            ? "border-designColor rounded-lg" 
                            : "border-transparent"
                        } resumeLi`}
                    >
                        Skills
                    </li>
                    <li onClick={() => 
                            setEducationExperienceData(false) &
                            setSkillsData(false) &
                            setTechStackData(true) &
                            setCertificationsData(false)
                        }
                        className={`${
                            techStackData 
                            ? "border-designColor rounded-lg" 
                            : "border-transparent"
                        } resumeLi`}
                    >
                        Tech Stack
                    </li>
                    <li onClick={() =>
                            setEducationExperienceData(false) &
                            setSkillsData(false) &
                            setTechStackData(false) &
                            setCertificationsData(true)
                        }
                        className={`${
                            certificationsData 
                            ? "border-designColor rounded-lg" 
                            : "border-transparent"
                        } resumeLi`}
                    >
                        Certifications
                    </li>
                </ul>
            </div>
            {educationExperienceData && <EducationExperience />}
            {skillsData && <Skills />}
            {techStackData && <TechStack />}
            {certificationsData && <Certifications />}
        
        </section>
    );
}

export default Resume;