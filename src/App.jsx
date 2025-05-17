import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";

const App = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <About />
      <Skills />
      <Works />
    </div>
  );
};

export default App;
