import './App.css';
import React, { useEffect, useState } from 'react';
import Bio from './components/bio/bio';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import SelectLanguage from './components/selectLanguage/selectLanguage';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  let currentLanguage = "en";
  const [language, setLanguage] = useState(currentLanguage);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // window.location.reload();
  }

  useEffect(() => {
    currentLanguage = language || 'en';
  }, [language]);

  return (
    <div className="App">
      <Router>
        <Header lang={language} />
        <Routes>
          <Route path="/" element={<Home lang={language} />} />
          <Route path="bio" element={<Bio lang={language} />} />
          <Route path="skills" element={<Skills lang={language} />} />
          <Route path="projects" element={<Projects lang={language} />} />
          <Route path="contact" element={<Contact lang={language} />} />
        </Routes>
        <SelectLanguage handleLanguageChange={handleLanguageChange} lang={language} />
      </Router>
    </div>
  );
}

export default App;
