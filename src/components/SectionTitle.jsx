import React from "react";
import mouse from "../assets/icons/mouse.svg";

const SectionTitle = () => {
  return (
    <div>
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <img src={mouse} alt="mouse" />
        <div className="border-l border-dashed border-white h-12 mt-2"></div>
        <div className="w-2 h-2 bg-white rotate-45 mt-1"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
