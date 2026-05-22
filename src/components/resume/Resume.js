import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Certifications from './Certifications';

const Resume = () => {
    const [educationData, setEducationData]= useState(true);
    const [skillsData, setSkillsData]= useState(false);
    const [experienceData, setExperienceData]= useState(false);
    const [certificationsData, setCertificationsData]= useState(false);
    return (
        <section id="resume" className="w-full py-20 border-b-[1px] border-[#FF7ACD]">
            <div className="flex justify-center items-center text-center">
                <Title title="Resume & Experience" des="Professional Journey" />
            </div>

            <div>
                <ul className="w-full grid grid-cols-4">
                    <li onClick={() => 
                            setEducationData(true) &
                            setSkillsData(false) &
                            setExperienceData(false) &
                            setCertificationsData(false)
                        }
                        className={`${
                            educationData 
                            ? "border-designColor rounded-lg" 
                            : "border-transparent"
                        } resumeLi`}
                    >
                        Education
                    </li>
                    <li onClick={() => 
                            setEducationData(false) &
                            setSkillsData(true) &
                            setExperienceData(false) &
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
                            setEducationData(false) &
                            setSkillsData(false) &
                            setExperienceData(true) &
                            setCertificationsData(false)
                        }
                        className={`${
                            experienceData 
                            ? "border-designColor rounded-lg" 
                            : "border-transparent"
                        } resumeLi`}
                    >
                        Experience
                    </li>
                    <li onClick={() =>
                            setEducationData(false) &
                            setSkillsData(false) &
                            setExperienceData(false) &
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
            {educationData && <Education />}
            {skillsData && <Skills />}
            {experienceData && <Experience />}
            {certificationsData && <Certifications />}
        
        </section>
    );
}

export default Resume;