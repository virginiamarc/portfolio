import React from 'react';
import { AiOutlineRise } from "react-icons/ai";
import {FaMobile, FaGlobe, FaBars, FaShareAlt } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section 
      id="features" 
      className="w-full py-20 border-b-[1px] border-[#FF7ACD]"
    >
      <Title title="Features" des="What I do" />
      <div className="grid grid-cols-3 gap-20">
        <Card 
          title="Business Strategy"
          des="I help businesses develop and implement effective strategies to achieve their goals."
          icon={<FaBars />}
        />
        <Card 
          title="Digital Marketing"
          des="I create and manage digital marketing campaigns to increase brand awareness and drive sales."
          icon={<FaMobile />}
        />
        <Card 
          title="Web Development"
          des="I build responsive and user-friendly websites that provide an excellent user experience."
          icon={<FaGlobe />}
        />
        <Card 
          title="Content Creation"
          des="I create engaging and valuable content that resonates with your target audience."
          icon={<SiProgress />}
        />
        <Card 
          title="SEO Optimization"
          des="I optimize your website for search engines to improve visibility and attract more organic traffic."
          icon={<AiOutlineRise />}
        />
        <Card 
          title="Social Media Management"
          des="I manage your social media accounts to build a strong online presence and engage with your audience."
          icon={<FaShareAlt />}
        />
      </div>
    </section>
  );
}

export default Features