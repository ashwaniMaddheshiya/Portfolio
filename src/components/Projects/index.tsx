"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import arrowIcon from "/public/arrow.svg";
import AI_Img from "/public/ai.png";
import Chat_Img from "/public/chat.png";
import Prompt_Img from "/public/prompt.jpg";
import Portfolio_Img from '/public/portfolio.png'

const projects = [
  {
    name: "Chat Application",
    liveLink: "https://chatbox-client.netlify.app/",
    githubLink: "https://github.com/ashwaniMaddheshiya/ChatterBox",
    imgSrc: Chat_Img,
  },
  {
    name: "Prompt AI",
    liveLink: "https://promptai-client.onrender.com/",
    githubLink: "https://github.com/ashwaniMaddheshiya/PromptAI",
    imgSrc: Prompt_Img,
  },
  {
    name: "AI Image Generator",
    liveLink: "https://ai-image-generate.onrender.com/",
    githubLink: "https://github.com/ashwaniMaddheshiya/Ai-Image-Generator",
    imgSrc: AI_Img,
  },
  {
    name: "Portfolio",
    liveLink: "https://weather-app.com",
    githubLink: "https://github.com/weather-app-repo",
    imgSrc: Portfolio_Img,
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative border border-[#232323] rounded-3xl overflow-hidden hover:text-teal-400"
        >
          <motion.div
            className="w-full h-80 overflow-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={project.githubLink}>
              <Image
                src={project.imgSrc}
                alt={project.name}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </Link>
          </motion.div>

          <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
            <div className="text-lg font-bold">{project.name}</div>
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition"
            >
              <Image src={arrowIcon} alt="Live Link" width={25} height={25} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
