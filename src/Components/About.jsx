import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white px-6 py-6"
    >
      {/* Applying motion to only the text */}
      <motion.h2
        className="text-4xl font-bold text-indigo-400 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🎓 I’m a{" "}
        <span className="font-semibold text-indigo-300">B.Tech CSE</span>{" "}
        undergraduate at
        <span className="font-semibold text-indigo-300">
          {" "}
          Techno International New Town
        </span>
        .
      </motion.p>
      <motion.p
        className="text-lg text-gray-300 leading-relaxed mt-4 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        💻 Skilled in{" "}
        <span className="font-semibold text-white">Full-Stack Development</span>
        , working with
        <span className="text-indigo-300">
          {" "}
          ReactJS, NodeJS, JavaScript, and PostgreSQL
        </span>
        .
      </motion.p>
      <motion.p
        className="text-lg text-gray-300 leading-relaxed mt-4 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        🤖 Passionate about{" "}
        <span className="font-semibold text-white">
          Machine Learning & Data Science
        </span>
        .
      </motion.p>
      <motion.p
        className="text-lg text-gray-300 leading-relaxed mt-4 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        🛡️ Exploring{" "}
        <span className="font-semibold text-white">Cybersecurity</span> and
        ethical hacking.
      </motion.p>
      <motion.p
        className="text-lg text-gray-300 leading-relaxed mt-6 text-center max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        🚀 Constantly learning and building innovative solutions!
      </motion.p>
    </div>
  );
}
