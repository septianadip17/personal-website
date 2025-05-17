import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import SectionTitle from "./components/SectionTitle";

const App = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <About />
      {/* <SectionTitle /> */}
    </div>
  );
};

export default App;
