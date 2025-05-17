import React from "react";
import PropTypes from "prop-types";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import jsIcon from "../assets/icons/js.svg";
import reactIcon from "../assets/icons/react.svg";
import background from "../assets/skills.svg";
import SectionTitle from "./SectionTitle";
import monitor from "../assets/icons/black-monitor.svg";

const skillsData = [
  {
    icon: htmlIcon,
    name: "HTML",
    color: "htmlColor",
    alt: "HTML5 logo white on orange circular background",
  },
  {
    icon: cssIcon,
    name: "CSS",
    color: "cssColor",
    alt: "CSS3 logo white on blue circular background",
  },
  {
    icon: jsIcon,
    name: "JS",
    color: "jsColor",
    alt: "JavaScript logo white on yellow circular background",
  },
  {
    icon: reactIcon,
    name: "REACT",
    color: "reactColor",
    alt: "React logo white on blue circular background",
  },
];

const SkillCard = ({ icon, name, color, alt }) => (
  <div className="flex flex-col items-center space-y-3 cursor-default transform hover:scale-105 transition-transform duration-300">
    <img
      alt={alt}
      className="w-16 h-16 md:w-24 md:h-24"
      src={icon}
      width="48"
      height="48"
    />
    <span
      className={`text-${color} font-semibold text-base md:text-lg select-none`}
    >
      {name}
    </span>
  </div>
);

const Skills = () => {
  return (
    <div className="bg-bg1 font-[Roboto Mono] relative overflow-x-hidden py-10">
      {/* Background */}
      <div className="absolute inset-0 opacity-60">
        <img
          alt="Background image showing blurred code on a dark screen"
          className="w-full h-full object-cover"
          src={background}
        />
      </div>

      {/* Content */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills"
          description="I am striving to never stop learning and improving"
        />

        {/* Skill Category */}
        <div className="flex justify-center mb-16 mt-10">
          <div className="bg-brand2 rounded-md w-full sm:w-64 py-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={monitor} alt="Monitor icon" className="w-12 h-12 mb-3" />
            <h3 className="text-black text-lg mb-1">Web Development</h3>
            <p className="text-xs text-black/70">HTML·CSS·JS·REACT</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
          {skillsData.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </section>
    </div>
  );
};
SkillCard.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Skills;
