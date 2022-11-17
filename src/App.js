import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <>
      <header>
        <Sidebar />
      </header>

      <section
        className="scroll-smooth 
        snap-y snap-mandatory
        h-screen w-screen 
        overflow-x-hidden overflow-scroll"
      >
        <Home />
        <Projects />
        <About />
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
