import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default App;
