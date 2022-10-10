import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      <header>
        <Sidebar />
      </header>

      {/* <section
        className="flex
        scroll-smooth 
        snap-x snap-mandatory
        h-screen w-screen 
        overflow-y-hidden overflow-scroll"
      > */}
      <section
        className="scroll-smooth 
        snap-y snap-mandatory
        h-screen w-screen 
        overflow-x-hidden overflow-scroll"
      >
        {/* <Route path="/" element={<Sidebar />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} /> */}
        <Home />
        <Projects />
        <About />
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
      {/* </Route> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
    </React.Fragment>
  );
}
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

export default App;
