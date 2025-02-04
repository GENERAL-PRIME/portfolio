import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
