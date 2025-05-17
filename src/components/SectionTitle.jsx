import React from "react";
import PropTypes from "prop-types";
import mouse from "../assets/icons/mouse.svg";

const SectionTitle = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center">
        <img src={mouse} alt="mouse" />
        <div className="border-l border-dashed border-white h-12 mt-2"></div>
        <div className="w-2 h-2 bg-white rotate-45 mt-1"></div>
      </div>

      <h1 className="text-brand1 text-6xl font-normal">{title}</h1>

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center space-x-6">
          <div className="w-3 h-3 bg-brand1 rounded-full"></div>
          <div className="w-28 h-[2px] bg-brand1 rounded-full"></div>
          <div className="w-3 h-3 bg-brand1 rounded-full"></div>
        </div>

        <p className="text-white text-center mb-5 max-w-3xl text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

SectionTitle.defaultProps = {
  title: "Title",
  description: "Description",
};

export default SectionTitle;
