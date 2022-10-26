import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
// import Projects from "./components/Projects";
// import About from "./components/About";
// import Sidebar from "./components/Sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Router>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes> */}
    <App />
    {/* </Router> */}
  </React.StrictMode>
);
