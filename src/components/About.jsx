import React from "react";
import work from "../assets/work.png";
import SectionTitle from "./SectionTitle";
import background from "../assets/aboutme.svg";

const About = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover" }}
    >
      {/* <SectionTitle /> */}
      <div className="flex justify-between w-full max-w-6xl">
        {/* Left side - About content */}
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="relative self-start">
            <h1 className="text-white text-4xl md:text-5xl font-normal leading-tight rounded-tr-lg rounded-br-lg border-2 border-[#2ee8e0] px-6 py-3 max-w-max">
              About Me
            </h1>
          </div>
          
          <div className="bg-[#222b31] rounded-xl p-8 max-w-xl">
            <p className="text-[#7a7a7a] text-xs mb-2">&lt;p&gt;</p>
            <p className="text-[#2ee8e0] text-lg font-semibold mb-2">Hello!</p>
            
            <p className="text-white text-sm leading-relaxed">
              My name is Sinan and I specialize in web developement that utilizes{" "}
              <span className="text-[#2ee8e0]">HTML</span>,{" "}
              <span className="text-[#2ee8e0]">CSS</span>,{" "}
              <span className="text-[#2ee8e0]">JS</span>, and{" "}
              <span className="text-[#2ee8e0]">REACT</span> etc.
            </p>

            <p className="text-white text-sm leading-relaxed mt-4">
              I am a highly motivated individual and eternal optimist dedicated to writing
              clear, concise, robust code that works. Striving to never stop learning and
              improving.
            </p>

            <p className="text-white text-sm leading-relaxed mt-4">
              When Im not coding, I am{" "}
              <span className="text-[#2ee8e0]">writing bolgs</span>, reading,
              or picking up some new hands-on art project like{" "}
              <span className="text-[#2ee8e0]">photography</span>.
            </p>

            <p className="text-white text-sm leading-relaxed mt-4">
              I like to have my perspective and belief systems challenged so that I see
              the world through new eyes.
            </p>

            <p className="text-[#7a7a7a] text-xs mt-6">&lt;/p&gt;</p>
          </div>
        </div>

        {/* Right side - Image */}
        <img
          alt="Person coding on laptop near window with plant and coffee cup on desk"
          className="hidden md:block max-w-[400px] w-full rounded-xl"
          height={400}
          src={work}
          width={600}
        />
      </div>
    </div>
  );
};

export default About;