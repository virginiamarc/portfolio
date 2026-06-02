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
                    title="Newsletter Preview Interface"
                    des="A sleek, visually driven newsletter preview layout crafted to highlight content, brand identity, and digital storytelling through a refined, minimalist interface."
                    src={projectOne}
                    github="https://github.com/virginiamarc/newsletter-design"
                    website="https://drive.google.com/file/d/1qE_Sop1cAoH4pAR4asDTfUJsx2d7oy_p/view"
                />
                <ProjectsCard 
                    title="Wheel Foodie Food Truck App"
                    des="Wheel Foodie is an app for a local food truck business. It allows users to view the menu, place orders, and track the food truck's location in real-time. The app also includes a loyalty program and social media integration to enhance customer engagement."
                    src={projectTwo}
                    github="https://github.com/virginiamarc/wf"
                    website="https://virginiamarc.com/wf"
                />
                <ProjectsCard 
                    title="PSD Studio - Creative Portfolio Website"
                    des="A sleek, visually driven portfolio layout crafted to highlight creative work, brand identity, and digital storytelling through a refined, minimalist interface."
                    src={projectThree}
                    github="https://github.com/virginiamarc/studio"
                    website="https://studio.pranswendeou.com"
                />
                <ProjectsCard 
                    title="Foodie Finder - Recipe & Meal Inspiration App"
                    des="A mobile app designed to help users discover new recipes and meal ideas based on their dietary preferences and available ingredients."
                    src={projectFour}
                    github="https://github.com/virginiamarc/foodiefinder"
                    website="https://foodiefinder-app.netlify.app"
                />
                <ProjectsCard 
                    title="Money Matters Website - Finance Management Platform"
                    des="Money Matters is a comprehensive finance management platform designed to help users track expenses, set budgets, and achieve their financial goals. The website features intuitive tools for budgeting, expense tracking, and financial goal setting, all wrapped in a user-friendly interface."
                    src={projectFive}
                    github="https://github.com/virginiamarc/money-matters"
                    website="https://virginiamarc.com/mmbt/"
                />
                <ProjectsCard 
                    title="Expense Tracker - Income & Budget Management Tool"
                    des="A streamlined expense and income tracking application designed to simplify budgeting, categorize transactions, and provide clear insights into daily financial habits."
                    src={projectSix}
                    github="https://github.com/virginiamarc/expense-tracker"
                    website="https://virginiamarc.com/p8/"
                />
            </div>
        </section>
    );
};

export default Projects;