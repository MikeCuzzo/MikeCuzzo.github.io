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
