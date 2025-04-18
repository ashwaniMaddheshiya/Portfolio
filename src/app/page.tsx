"use client";
import { motion } from "framer-motion";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SectionHeader from "@/components/UI/SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <motion.div
      className="p-6 md:p-16 max-w-7xl mx-auto flex flex-col gap-8 relative z-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={sectionVariants}>
        <Header />
      </motion.div>

      {/* Experience Section */}
      <motion.div variants={sectionVariants}>
        <SectionHeader title="Experience" />
        <Experience />
      </motion.div>

      {/* Projects Section */}
      <motion.div variants={sectionVariants}>
        <SectionHeader title="Personal Projects" />
        <Projects />
      </motion.div>

      {/* Contact Section */}
      <motion.div id="contact" variants={sectionVariants}>
        <SectionHeader title="Contact Me" />
        <Contact />
      </motion.div>
    </motion.div>
  );
}
