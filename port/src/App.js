


import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';

import Home from './Home';

import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Resume from './Resume';
import Contact from './Contact';
import About from "./About";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>                              
          <Route path="/" element={<Home />}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Education" index element={<Education />} />
            <Route path="/Experience" index element={<Experience />} />
            <Route path="/Project" index element={<Projects />} />
            <Route path="/Skill" index element={<Skills />} />
            <Route path="/Resume" index element={<Resume />} />
            <Route path="/Contact" index element={<Contact />} />     
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
