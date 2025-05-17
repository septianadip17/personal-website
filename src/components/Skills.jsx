import React from "react";


const Skills = () => {
  return (
    <div className="bg-[#1a2633] font-[Roboto Mono] relative overflow-x-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          alt="Background image showing blurred code on a dark screen"
          className="w-full h-full object-cover"
          height="1080"
          src="https://storage.googleapis.com/a1aa/image/6cb35086-6056-4441-0177-f69a654b4593.jpg"
          width="1920"
        />
      </div>
      <section className="relative z-10 flex flex-col items-center pt-20 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40">
        <div className="flex items-center space-x-6 mb-2">
          <div className="text-[#00f0d8] text-3xl sm:text-4xl md:text-5xl leading-none">
            <i className="fas fa-mouse-pointer"></i>
          </div>
          <div className="border-l border-[#00f0d8] h-12"></div>
          <div className="text-[#00f0d8] text-[6rem] sm:text-[8rem] md:text-[10rem] font-extralight leading-none select-none">
            &lt;/&gt;
          </div>
        </div>
        <h2 className="text-[#00f0d8] text-4xl sm:text-5xl md:text-6xl font-normal mb-1 select-none">
          Skills
        </h2>
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-14 h-1 bg-[#00f0d8] rounded-full"></div>
          <div className="w-3 h-3 bg-[#00f0d8] rounded-full"></div>
        </div>
        <p className="text-white text-xs sm:text-sm md:text-base mb-12 text-center max-w-xl">
          I am striving to never stop{" "}
          <span className="font-semibold">learning</span> and improving
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-10 mb-16 w-full max-w-4xl">
          <div className="bg-[#a6f9f6] rounded-md w-64 py-6 flex flex-col items-center shadow-md">
            <i className="fas fa-tv text-xl mb-2"></i>
            <h3 className="text-black text-lg mb-1">Web Developement</h3>
            <p className="text-xs text-black/70">HTML·CSS·JS·REACT</p>
          </div>
          <div className="bg-[#a6f9f6] rounded-md w-64 py-6 flex flex-col items-center shadow-md">
            <i className="fas fa-mobile-alt text-xl mb-2"></i>
            <h3 className="text-black text-lg mb-1">App Developement</h3>
            <p className="text-xs text-black/70">iOS·Android</p>
          </div>
        </div>
        <div className="flex justify-center gap-20 flex-wrap max-w-4xl w-full">
          <div className="flex flex-col items-center space-y-3 cursor-default">
            <div className="bg-[#e44d26] w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
              <img
                alt="HTML5 logo white on orange circular background"
                className="w-12 h-12"
                height="48"
                src="https://storage.googleapis.com/a1aa/image/180089bb-80de-4dde-86ba-409e1e68d9bc.jpg"
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
                src="https://storage.googleapis.com/a1aa/image/be0ecef9-0b30-4a06-642a-3a6fddd763f6.jpg"
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
                src="https://storage.googleapis.com/a1aa/image/f81c0c61-1418-4a16-5dd5-d5a7a028e40c.jpg"
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
                src="https://storage.googleapis.com/a1aa/image/05bb0c1d-5c6d-4289-790f-879835612720.jpg"
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
