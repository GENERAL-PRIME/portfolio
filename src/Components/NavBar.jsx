import { useState, useEffect } from "react";
// import Image from "next/image"; // Or use <img> if you're not using Next.js

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 z-50 transition-all duration-300 ${
        scrolling
          ? "bg-transparent bg-opacity-70 backdrop-blur-md "
          : "bg-translucent"
      }`}
    >
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <img
            src="/path/to/your-photo.jpg" // Replace with your image file path
            alt="Your Name"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="ml-2 text-xl font-bold text-indigo-600">
          Your Name
        </span>
      </div>

      {/* Centered Links */}
      <div className="flex-grow flex justify-center space-x-6 text-lg font-medium text-indigo-600">
        <a href="#projects" className="hover:text-indigo-700">
          Projects
        </a>
        <a href="#skills" className="hover:text-indigo-700">
          Skills
        </a>
        <a href="#education" className="hover:text-indigo-700">
          Education
        </a>
        <a href="#contact" className="hover:text-indigo-700">
          Contact
        </a>
      </div>

      {/* Resume Button */}
      <div className="flex items-center">
        <a
          href="/path/to/your-resume.pdf" // Replace with your resume link
          className="px-6 py-2 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
