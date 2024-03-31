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
