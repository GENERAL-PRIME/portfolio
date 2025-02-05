import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Education from "./Components/Education";

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
