import { Routes, Route } from "react-router-dom";


import logo from './logo.svg';

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



{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}