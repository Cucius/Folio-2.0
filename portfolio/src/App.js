import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <header>
        <Sidebar />
      </header>

      {/* <section
          className="flex
          scroll-smooth 
          snap-x snap-mandatory
          h-screen w-screen 
          overflow-y-hidden overflow-scroll"
        >  */}
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
    </React.Fragment>
  );
}

export default App;
