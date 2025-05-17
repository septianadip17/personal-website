import React from "react";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import jsIcon from "../assets/icons/js.svg";
import reactIcon from "../assets/icons/react.svg";
import background from "../assets/skills.svg";
import SectionTitle from "./SectionTitle";
import monitor from "../assets/icons/black-monitor.svg";

const Skills = () => {
  return (
    <div className="bg-[#1a2633] font-[Roboto Mono] relative overflow-x-hidden">
      <div className="absolute inset-0 opacity-60">
        <img
          alt="Background image showing blurred code on a dark screen"
          className="w-full h-full object-cover"
          height="1080"
          src={background}
          width="1920"
        />
      </div>
      <section className="relative z-10 flex flex-col items-center pt-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40">
        <SectionTitle title="Skills" description="I am striving to never stop learning and improving"/>
        <div className="flex flex-col sm:flex-row justify-center gap-10 mb-16 w-full max-w-4xl">
          <div className="bg-[#a6f9f6] rounded-md w-64 py-6 flex flex-col items-center shadow-md">
            <img src={monitor} alt="" />
            <h3 className="text-black text-lg mb-1">Web Developement</h3>
            <p className="text-xs text-black/70">HTML·CSS·JS·REACT</p>
          </div>
        </div>
        <div className="flex justify-center gap-20 flex-wrap max-w-4xl w-full">
          <div className="flex flex-col items-center space-y-3 cursor-default">
            <div className="bg-[#e44d26] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
              <img
                alt="HTML5 logo white on orange circular background"
                className="w-12 h-12"
                height="48"
                src={htmlIcon}
                width="48"
              />
            </div>
            <span className="text-[#e44d26] font-semibold text-lg select-none">
              HTML
            </span>
          </div>
          <div className="flex flex-col items-center space-y-3 cursor-default">
            <div className="bg-[#1572b6] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
              <img
                alt="CSS3 logo white on blue circular background"
                className="w-12 h-12"
                height="48"
                src={cssIcon}
                width="48"
              />
            </div>
            <span className="text-[#1572b6] font-semibold text-lg select-none">
              CSS
            </span>
          </div>
          <div className="flex flex-col items-center space-y-3 cursor-default">
            <div className="bg-[#f0a91b] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
              <img
                alt="JavaScript logo white on yellow circular background"
                className="w-12 h-12"
                height="48"
                src={jsIcon}
                width="48"
              />
            </div>
            <span className="text-[#f0a91b] font-semibold text-lg select-none">
              JS
            </span>
          </div>
          <div className="flex flex-col items-center space-y-3 cursor-default">
            <div className="bg-[#3bafda] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
              <img
                alt="React logo white on blue circular background"
                className="w-12 h-12"
                height="48"
                src={reactIcon}
                width="48"
              />
            </div>
            <span className="text-[#3bafda] font-semibold text-lg select-none">
              REACT
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
