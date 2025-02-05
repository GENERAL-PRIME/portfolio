"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSchool, FaUniversity } from "react-icons/fa";

const education = [
  {
    title: "High School",
    institution: "Kendriya Vidyalaya No-1, Saltlake",
    year: "2020 - 2022",
    icon: <FaSchool className="text-yellow-400 text-3xl" />,
    description:
      "Completed my high school education with a focus on Science and Mathematics. I developed a strong foundation in science and mathematics, particularly in Physics, Chemistry, and Computer Science.",
  },
  {
    title: "College",
    institution: "Techno International Newtown",
    year: "2022 - 2026",
    icon: <FaUniversity className="text-blue-400 text-3xl" />,
    description:
      "Pursuing a Bachelor's degree in Computer Science. I focus on competitive programming, full-stack web development, and Machine Learning.",
  },
];

export default function Education() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile if width < 768px
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="education"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-6 py-16"
    >
      <motion.h2
        className="text-4xl font-bold text-indigo-400 my-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Education
      </motion.h2>

      <div className="relative w-full max-w-3xl">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600"></div>

        {education.map((edu, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center w-full my-12 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
            initial={{
              opacity: 0,
              x: isMobile ? 0 : index % 2 === 0 ? -100 : 100, // Side animation for desktop
              y: isMobile ? 100 : 0, // Top-to-bottom for mobile
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg text-left">
              <h3 className="text-lg font-semibold text-indigo-300">
                {edu.title}
              </h3>
              <p className="text-gray-400">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
              <p className="text-gray-300 mt-2">{edu.description}</p>
            </div>

            <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center border-4 border-indigo-400 my-4 md:my-0">
              {edu.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
