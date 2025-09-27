"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    name: "InterviewCraft",
    description:
      "An AI-powered interview practice platform that helps developers prepare for technical interviews with role-based, experience-specific questions and instant feedback. Built with Next.js 15, NestJS, and OpenAI GPT models, it offers smart question generation, real-time performance analysis, and a seamless, responsive user experience.",
    liveLink: "https://interviewcraft-xi.vercel.app/",
    githubLink: "https://github.com/ashwaniMaddheshiya/interviewcraft",
  },
  {
    name: "Code Sync Editor",
    description:
      "A real-time collaborative code editor built with WebSockets and Node.js. It allows multiple users to code together seamlessly, with instant updates across sessions. Designed for teams who need quick collaboration without external tools.",
    liveLink: "https://code-sync-editor-client.onrender.com/",
    githubLink: "https://github.com/ashwaniMaddheshiya/code-sync-editor",
  },

  {
    name: "AI Image Generator",
    description:
      "A text-to-image generator leveraging OpenAI's image models. Users can input prompts and instantly generate unique visuals. Built with React, Node.js, and Tailwind, it delivers fast responses with a clean, minimal UI.",
    liveLink: "https://github.com/ashwaniMaddheshiya/Ai-Image-Generator",
    githubLink: "https://github.com/ashwaniMaddheshiya/Ai-Image-Generator",
  },
  {
    name: "Portfolio",
    description:
      "My personal portfolio built with Next.js and Tailwind CSS. It highlights my projects, skills, and experiences with a focus on performance and responsive design. The site is fully optimized for dark mode with smooth animations.",
    liveLink: "https://portfolio-ashwani.vercel.app/",
    githubLink: "https://github.com/ashwaniMaddheshiya/Portfolio",
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="border border-gray-700 bg-[#111111] rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-teal-500/20"
        >
          {/* Project Title & Description */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {project.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-between mt-auto">
            <Link
              href={project.liveLink}
              target="_blank"
              className="text-teal-400 hover:underline text-sm font-medium"
            >
              🔗 Live
            </Link>
            <Link
              href={project.githubLink}
              target="_blank"
              className="text-teal-400 hover:underline text-sm font-medium"
            >
              💻 Source
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
