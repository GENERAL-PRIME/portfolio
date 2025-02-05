import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on mobile after clicking
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolling ? "bg-translucent bg-opacity-70" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <img
            src="/portfolio/modern_logo-removebg-preview.png"
            alt="Your Name"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="ml-2 text-lg font-bold text-white">Amborish Sen</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 text-lg font-medium text-indigo-400">
        {["about", "projects", "skills", "education", "contact"].map(
          (section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="hover:text-indigo-500"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Resume Button - Always Visible */}
      <div className="hidden md:flex items-center">
        <a
          href="general-prime.github.io/porfolio/resume.pdf"
          className="px-6 py-2 border-2 border-indigo-600 text-indigo-400 rounded-full hover:bg-indigo-600 hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center p-4 space-y-4 text-lg font-medium text-indigo-400 md:hidden">
          {["about", "projects", "skills", "education", "contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="hover:text-indigo-500"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            )
          )}
          <a
            href="general-prime.github.io/porfolio/resume.pdf"
            className="px-6 py-2 border-2 border-indigo-600 text-indigo-400 rounded-full hover:bg-indigo-600 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
