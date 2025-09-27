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
  "Nestjs",
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
            🚀&nbsp; Contributed to and developed 3+ production-ready WordPress
            websites , custom-tailored to client requirements—from design to
            deployment—while integrating Google Analytics 4 (GA4) for actionable
            user insights and performance tracking.
          </p>

          <p className="text-secondary mt-2">
            🚀&nbsp; Built a College Management System single-handedly from
            scratch using Next.js and TurboRepo, enhancing load performance and
            enabling 1000+ students and faculty to access services seamlessly
            offline via PWA support, with a feature-rich admin dashboard and
            role-based access control.
          </p>
          <p className="text-secondary mt-2">
            🛠️&nbsp; Managed three projects simultaneously: (1) creating an
            AI-powered cannabis recommendation engine to handle 10k+ product
            records, (2) building a Sales Buddy application for 500+ retailers
            and distributors with integrated Meta catalogues, and (3) developing
            a secure crypto trading platform capable of handling real-time
            transactions with advanced TradingView charting and enterprise-grade
            security
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
            💼&nbsp; Contributed to an event management platform{" "}
            <Link
              href="https://gtm.whr.ai/"
              className="text-teal-400 underline"
            >
              EventGtm
            </Link>
            , focusing on delivering real-time insights into event engagement
            through dynamic charts and data visualization. My responsibilities
            included implementing OTP-based authentication for secure access,
            ensuring mobile and desktop responsiveness, and managing API
            integrations for data retrieval. I also handled authentication and
            data validation to support seamless and secure user experiences.
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
