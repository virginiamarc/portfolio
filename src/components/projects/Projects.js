import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/images/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <section 
            id="projects"
            className="w-full py-20 border-b-[1px] border-[#FF7ACD]"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="STEP INTO MY PORTFOLIO - A GLIMPSE INTO MY DESIGN JOURNEY"
                    des="Design Highlights"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard 
                    title="Project 1"
                    des="Description for Project 1"
                    src={projectOne}
                />
                <ProjectsCard 
                    title="Project 2"
                    des="Description for Project 2"
                    src={projectTwo}
                />
                <ProjectsCard 
                    title="Project 3"
                    des="Description for Project 3"
                    src={projectThree}
                />
                <ProjectsCard 
                    title="Project 4"
                    des="Description for Project 4"
                    src={projectFour}
                />
                <ProjectsCard 
                    title="Project 5"
                    des="Description for Project 5"
                    src={projectFive}
                />
                <ProjectsCard 
                    title="Project 6"
                    des="Description for Project 6"
                    src={projectSix}
                />
            </div>
        </section>
    );
};

export default Projects;