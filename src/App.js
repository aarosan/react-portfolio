import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Error from "./pages/error";

import './App.css';

function App() {
  return (
   <div className="App">

      <svg id="background-svg" width="100%" height="100%" viewBox="0 0 1280 609" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H1280V480.5L0 609V0Z" fill="#BDD9FF"/>
      </svg>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
   </div>
  );
}

export default App;
