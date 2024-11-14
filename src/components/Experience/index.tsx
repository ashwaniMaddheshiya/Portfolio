import React from "react";
import Tag from "../UI/Tag";

const tech10 = ["JavaScript", "TypeScript", "React", "Nextjs", "TailwindCss"];
const techX = ["React", "SCSS", "TypeScript", "Solidity", "BlockChain", "WordPress"];
const techH = ["JavaScript", "NextJs", "NodeJs", "MongoDB"];

const Experience = () => {
  return (
    <div className="border border-[#232323] rounded-3xl p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
        <div className="text-secondary text-center md:text-left">
          AUG 2024 - Present
        </div>
        <div className="md:col-span-3">
          <div className="font-semibold">Frontend Developer, Xcelliance Technologies</div>
          <p className="text-secondary mt-2">
          As a Frontend Developer at Xcelliance Technology, I design engaging, responsive interfaces powered by React, WordPress, and blockchain, all while leveraging Google Analytics 4 (GA4) for in-depth user insights. My role combines the latest in decentralized tech and analytics to deliver innovative, data-driven digital experiences that captivate and inform.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {techX.map((tech, ind) => (
              <Tag label={tech} key={ind} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
        <div className="text-secondary text-center md:text-left">
          FEB - JULY 2024
        </div>
        <div className="md:col-span-3">
          <div className="font-semibold">Software Developer, 10Times</div>
          <p className="text-secondary mt-2">
          Contributed to an event management platform, focusing on delivering real-time insights into event engagement through dynamic charts and data visualization. My responsibilities included implementing OTP-based authentication for secure access, ensuring mobile and desktop responsiveness, and managing API integrations for data retrieval. I also handled authentication and data validation to support seamless and secure user experiences.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tech10.map((tech, ind) => (
              <Tag label={tech} key={ind} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
        <div className="text-secondary text-center md:text-left">
          JAN - APR 2023
        </div>
        <div className="md:col-span-3">
          <div className="font-semibold">Web Developer Intern, HashTag System Inc</div>
          <p className="text-secondary mt-2">
          Engineered and learnt to build high-performance RESTful APIs using Node.js and Express.js, ensuring seamless client-server communication and robust data flow. I also deployed a secure authentication system with Next.js, significantly strengthening user security and privacy measures.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {techH.map((tech, ind) => (
              <Tag label={tech} key={ind} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
