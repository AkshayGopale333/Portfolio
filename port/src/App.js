
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
 import Home from "./Pages/Home/Home";
 import About from "./Pages/About/About";
 import Education from "./Pages/Education/Education";
 import Experience from "./Pages/Experience/Experience";
 import Projects from "./Pages/Project/Projects";

 import Resume from "./Pages/Resume/Resume";
 import Contact from "./Pages/Contact/Contact";
 
 


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" index element={<Education />} />
          <Route path="/Experience" index element={<Experience />} />
          <Route path="/Project" index element={<Projects />} />
          {/* <Route path="/Skill" index element={<Skills />} /> */}
          <Route path="/Resume" index element={<Resume />} />
          <Route path="/Contact" index element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
