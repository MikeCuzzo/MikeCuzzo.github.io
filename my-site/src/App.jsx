import "./App.css";
import React from "react";
import {
  Header,
  Home,
  About,
  Projects,
  Contact,
  Footer,
} from "./components/Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
