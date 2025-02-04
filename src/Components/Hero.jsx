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
    const typingSpeed = isDeleting ? 70 : 150;
    const delayAfterTyping = 1500;
    const delayBeforeTyping = 600;

    let timeout;

    if (!isDeleting && charIndex < fullText[textIndex].length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === fullText[textIndex].length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayAfterTyping);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % fullText.length);
      timeout = setTimeout(() => {}, delayBeforeTyping);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center h-screen px-12 overflow-hidden text-white">
      {/* Background Gradient with Wave Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-800 to-indigo-900">
        <div className="absolute inset-0 wave-overlay"></div>
      </div>

      {/* Left Side - Image */}
      <motion.div
        className="z-10 w-full md:w-1/2 flex justify-center"
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
        className="z-10 text-center w-full md:w-1/2 mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold min-h-[60px]">
          {displayText}
          <span className="text-indigo-200">|</span>
        </h1>
        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 text-lg font-medium bg-white text-indigo-600 rounded-lg shadow-md hover:bg-indigo-100 transition"
        >
          View Projects
        </a>
      </motion.div>

      {/* CSS for Wave Effect */}
      <style>{`
        @keyframes waveAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .wave-overlay {
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%);
          background-size: 200% 200%;
          animation: waveAnimation 6s ease-in-out infinite;
          filter: blur(90px);
          position: absolute;
          inset: 0;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
