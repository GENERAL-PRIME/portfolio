"use client";

import { motion } from "framer-motion";
import { FaSchool, FaUniversity } from "react-icons/fa";

const education = [
  {
    title: "High School",
    institution: "XYZ High School",
    year: "2018 - 2020",
    icon: <FaSchool className="text-yellow-400 text-3xl" />,
    description:
      "Completed my high school education with a focus on Science and Mathematics.",
  },
  {
    title: "College",
    institution: "ABC University",
    year: "2020 - 2024",
    icon: <FaUniversity className="text-blue-400 text-3xl" />,
    description:
      "Pursuing a degree in Computer Science, specializing in AI and Machine Learning.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-6 py-16"
    >
      {/* Heading Animation */}
      <motion.h2
        className="text-4xl font-bold text-indigo-400 my-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Education
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative w-full max-w-3xl">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600"></div>

        {education.map((edu, index) => (
          <motion.div
            key={index}
            className={`flex items-center w-full my-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Card Placement */}
            {index % 2 === 0 ? (
              <>
                {/* Left Side Card (High School) */}
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm text-left">
                  <h3 className="text-lg font-semibold text-indigo-300">
                    {edu.title}
                  </h3>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                  <p className="text-gray-300 mt-2">{edu.description}</p>
                </div>
                {/* Icon on the Right */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center border-4 border-indigo-400">
                  {edu.icon}
                </div>
              </>
            ) : (
              <>
                {/* Icon on the Left */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center border-4 border-indigo-400">
                  {edu.icon}
                </div>
                {/* Right Side Card (College) */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm text-left">
                  <h3 className="text-lg font-semibold text-indigo-300">
                    {edu.title}
                  </h3>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                  <p className="text-gray-300 mt-2">{edu.description}</p>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
