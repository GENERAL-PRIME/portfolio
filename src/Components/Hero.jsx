import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-12 text-white overflow-hidden">
      {/* Background Gradient with Wave Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800">
        <div className="absolute inset-0 wave-overlay"></div>
      </div>

      {/* Left Side - Profile Image */}
      <motion.div
        className="z-10 w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="portfolio/src/assets/Images/my_photo_recent-removebg-preview.png" // Change this to your actual image path
          alt="Amborish Sen"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover"
        />
      </motion.div>

      {/* Right Side - Typing Text & CTA */}
      <motion.div
        className="z-10 text-center w-full md:w-1/2 mt-8 md:mt-0 flex flex-col items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold h-24 flex items-center justify-center">
          {displayText}
        </h1>
        <a
          onClick={() => scrollToSection("projects")}
          className="mt-12 inline-block px-6 py-3 text-lg font-medium bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-500 transition"
        >
          View Projects
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a onClick={() => scrollToSection("about")}>
          <div className="w-10 h-10 border-2 border-indigo-400 rounded-full flex items-center justify-center">
            ↓
          </div>
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
    </section>
  );
}
