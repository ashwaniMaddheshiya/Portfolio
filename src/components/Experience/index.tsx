import React from "react";
import Tag from "../UI/Tag";
import Link from "next/link";

const tech10 = ["JavaScript", "TypeScript", "React", "Nextjs", "TailwindCss"];
const techX = [
  "React",
  "Next",
  "SCSS",
  "TypeScript",
  "Turborepo",
  "Solidity",
  "BlockChain",
  "WordPress",
];
const techH = ["JavaScript", "NextJs", "NodeJs", "MongoDB"];

const Experience = () => {
  return (
    <div className="border border-[#232323] rounded-3xl p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
        <div className="text-secondary text-center md:text-left">
          AUG 2024 - Present
        </div>
        <div className="md:col-span-3">
          <div className="font-semibold">
            Software Developer, Xcelliance Technologies
          </div>
          <p className="text-secondary mt-2">
            🚀&nbsp; Contributed to and developed two production-ready WordPress
            websites <Link href="https://shackverse.in/" className="text-teal-400 underline">Shackverse</Link> and{" "}
            <Link href="https://xcelliance.com" className="text-teal-400 underline">Xcelliance</Link> ,
            custom-tailored to client requirements—from design to
            deployment—while integrating Google Analytics 4 (GA4) for actionable
            user insights and performance tracking.
          </p>

          <p className="text-secondary mt-2">
            🚀&nbsp; Spearheaded the development of a full-scale College
            Management System using Turborepo and Next.js, featuring separate
            web applications for faculty, admin, and students. Single-handedly
            handled everything from architecture and development to final
            deployment, ensuring a scalable and seamless multi-role experience.
          </p>
          <p className="text-secondary mt-2">
            🛠️&nbsp; Currently working on the frontend development of a Crypto
            Trading Platform, focusing on delivering a fast, intuitive, and
            secure user experience using React and modern web technologies.
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
            💼&nbsp; Contributed to an event management platform, focusing on
            delivering real-time insights into event engagement through dynamic
            charts and data visualization. My responsibilities included
            implementing OTP-based authentication for secure access, ensuring
            mobile and desktop responsiveness, and managing API integrations for
            data retrieval. I also handled authentication and data validation to
            support seamless and secure user experiences.
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
          <div className="font-semibold">
            Web Developer Intern, HashTag System Inc
          </div>
          <p className="text-secondary mt-2">
            🧠&nbsp; Engineered and learnt to build high-performance RESTful
            APIs using Node.js and Express.js, ensuring seamless client-server
            communication and robust data flow. I also deployed a secure
            authentication system with Next.js, significantly strengthening user
            security and privacy measures.
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
