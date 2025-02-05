import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiPython,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTensorflow,
  SiOpencv,
  SiC,
  SiCplusplus,
  SiFigma,
} from "react-icons/si";

const skills = [
  { name: "ReactJS", icon: <SiReact className="text-blue-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Python", icon: <SiPython className="text-blue-500" /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn className="text-orange-400" /> },
  { name: "Git", icon: <SiGit className="text-red-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "NodeJS", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "NoSQL (MongoDB)", icon: <SiMongodb className="text-green-400" /> },
  { name: "SQL (MySQL)", icon: <SiMysql className="text-blue-500" /> },
  {
    name: "SQL (PostgreSQL)",
    icon: <SiPostgresql className="text-blue-400" />,
  },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
  { name: "OpenCV", icon: <SiOpencv className="text-blue-500" /> },
  { name: "C", icon: <SiC className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white px-6 py-16"
    >
      {/* Heading Animation */}
      <motion.h2
        className="text-4xl font-bold text-indigo-400 mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-screen-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-lg flex flex-col items-center shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="text-gray-300 mt-2">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
