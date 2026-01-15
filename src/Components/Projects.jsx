import { motion } from "framer-motion";
const projects = [
  {
    title: "Smart Traffic Light Controller",
    description:
      "A real-time AI-based traffic management system that dynamically adjusts traffic light timings based on vehicle density. It optimizes traffic flow, reduces congestion, and prioritizes emergency vehicles like ambulances.",
    githubLink:
      "https://github.com/GENERAL-PRIME/smart-traffic-light-controller",
    image: "/portfolio/traffic.jpg",
  },
  {
    title: "Website For Barasat Yoga Vigyan Kendra",
    description: "Website for Barasat Yoga Vigyan Kendra.",
    githubLink: "https://github.com/GENERAL-PRIME/BYVK-web",
    image: "/portfolio/web.png",
  },
  {
    title: "School Dropout Analysis",
    description:
      "School Dropout Analysis using Machine Learning & ANN | A modular project using SVM, Random Forest, and Artificial Neural Networks (ANNs) to predict school dropout rates.",
    githubLink: "https://github.com/GENERAL-PRIME/school-dropout-analysis",
    image: "/portfolio/school.jpg",
  },
  {
    title: "Wordle Solver",
    description:
      "An Entropy-optimal Wordle solver. It uses a FastAPI backend with mem-map precomputations to deliver instant, mathematically proven suggestions. It features a modern web UI that allows users to cycle through tile colors & refine candidate lists in real-time using information theory to maximize info gain.A Wordle solver using Python and machine learning techniques to predict the most likely words based on previous guesses.",
    githubLink: "https://github.com/GENERAL-PRIME/wordle-solver",
    image: "/portfolio/wordle.png",
  },
  {
    title: "BYVK Student Management System",
    description:
      "A comprehensive web-based dashboard application for managing yoga institute students, batches, and payment tracking with receipt management. Built using the MERN stack (PostgreSQL, Supabase, React.js, Node.js, OAuth) to provide a seamless user experience for administrators and staff.",
    githubLink: "https://github.com/GENERAL-PRIME/yoga-students",
    image: "/portfolio/students.jpg",
  },
  {
    title: "Nutrition Recommendation Model",
    description:
      "A Python-based nutrition recommendation system that provides personalized dietary suggestions. It utilizes user health data and preferences to generate tailored meal plans and nutritional advice. The model leverages Decision Tree ML algorithm and NLP to analyze dietary patterns and optimize nutrition for better health outcomes.",
    githubLink:
      "https://github.com/GENERAL-PRIME/personal-nutri-recommend-sys/tree/amborish-dev",
    image: "/portfolio/nrs.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-[95vh] flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-6 py-6"
    >
      <motion.h2
        className="text-4xl font-bold text-indigo-400 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-lg mx-auto justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-full max-w-xs"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Cover Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              {/* Title */}
              <motion.h3
                className="text-xl font-semibold text-indigo-400 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {project.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {project.description}
              </motion.p>

              {/* GitHub Link */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-indigo-500 transition duration-200"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
