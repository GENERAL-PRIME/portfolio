import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const fullText = [
    "Hi, I’m Amborish Sen",
    "Full-Stack Developer & ML Enthusiast",
    "Building scalable web applications & AI solutions.",
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; // Speed for typing and deleting
    const delayAfterTyping = 2000; // Delay before deleting
    const delayBeforeTyping = 500; // Pause before starting next line

    let timeout;

    if (!isDeleting && charIndex < fullText[textIndex].length) {
      // Typing characters
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === fullText[textIndex].length) {
      // Wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayAfterTyping);
    } else if (isDeleting && charIndex > 0) {
      // Deleting characters
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % fullText.length);
      timeout = setTimeout(() => {}, delayBeforeTyping);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-r from-purple-900 via-indigo-800 to-indigo-900 px-12">
      {/* Left Side - Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/profile.jpg" // Change this to your actual image path
          alt="Amborish Sen"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover"
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        className="text-center text-white w-full md:w-1/2 mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold min-h-[60px]">{displayText}</h1>
        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 text-lg font-medium bg-white text-indigo-600 rounded-lg shadow-md hover:bg-indigo-100 transition"
        >
          View Projects
        </a>
      </motion.div>
    </div>
  );
}
