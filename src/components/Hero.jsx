import React from "react";
import programmer from "../assets/programmer.svg";
import grid from "../assets/icons/grid.svg";
import profile from "../assets/icons/profile.svg";
import monitor from "../assets/icons/monitor.svg";
import code from "../assets/icons/code.svg";
import edit from "../assets/icons/edit.svg";
import mail from "../assets/icons/mail.svg";
import greenMail from "../assets/icons/greenmail.svg";
import location from "../assets/icons/location.svg";
import briefcase from "../assets/icons/briefcase.svg";
import link from "../assets/icons/link.svg";
import download from "../assets/icons/download.svg";

// sidebar navigation
function SideNav() {
  const navItems = [
    { icon: grid, label: "Dashboard", color: "#7FFFD4" },
    { icon: profile, label: "User" },
    { icon: code, label: "Code" },
    { icon: monitor, label: "Desktop" },
    { icon: edit, label: "Edit" },
    { icon: mail, label: "Mail" },
  ];

  return (
    <nav className="flex flex-col gap-6 bg-bg2 border border-white border-opacity-30 rounded-full p-2 w-12 h-[280px] justify-center items-center">
      {navItems.map(({ icon, label, color }) => (
        <button
          key={label}
          aria-label={label}
          className={`w-8 h-8 flex items-center justify-center rounded-md text-lg ${
            color
              ? "text-[#7FFFD4] rounded-full border border-white border-opacity-70"
              : "text-[#F7C6C7]"
          }`}
        >
          <img src={icon} alt={label} className="w-5 h-5" />
        </button>
      ))}
    </nav>
  );
}

// profile card
function ProfileCard() {
  const skills = ["HTML", "CSS", "JS", "REACT"];
  const info = [
    { icon: greenMail, text: "septianadip7998@gmail.com", alt: "mail" },
    { icon: location, text: "Indonesia", alt: "location" },
    { icon: briefcase, text: "Full-time / Freelancer", alt: "work" },
    { icon: link, text: "linkedin.com/in/septianadip17", alt: "link" },
  ];

  return (
    <div className="relative flex flex-col items-center text-center text-white border border-white border-opacity-70 rounded-tr-[100px] rounded-br-[100px] rounded-tl-md rounded-bl-md p-6 md:p-8 max-w-[280px] w-full">
      <div className="absolute top-0 left-0 h-full w-1.5 rounded-tr-[100px] rounded-br-[100px] bg-gradient-to-b from-[#7FFFD4] to-[#00BFA5] -translate-x-full" />
      <div className="relative z-10 flex flex-col items-center gap-2">
        <img
          src={programmer}
          alt="Avatar"
          className="w-20 h-20 rounded-full border-2 border-brand1"
        />
        <h2 className="text-lg font-mono font-semibold">Septian</h2>
        <p className="text-xs font-mono text-white/80">Junior Web Developer</p>
        <ul className="mt-4 space-y-2 text-xs font-mono text-white/80 text-left w-full max-w-[220px]">
          {info.map(({ icon, text, alt }) => (
            <li key={text} className="flex items-center gap-2">
              <img src={icon} alt={alt} className="w-4 h-4" />
              {text}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 mt-3 flex-wrap justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-brand1 text-[#282E34] text-[10px] font-mono rounded-full px-2 py-[2px]"
            >
              {skill}
            </span>
          ))}
        </div>
        <button className="mt-6 bg-white text-[#282E34] rounded-full px-6 py-2 flex items-center gap-2 text-sm">
          Download CV{" "}
          <img src={download} alt="download-icon" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex flex-col max-w-[500px] w-full">
      <div className="mt-6 text-white font-sans">
        <p className="text-xs text-brand1 font-mono mb-1">&lt;h1&gt;</p>
        <h2 className="text-4xl font-normal leading-tight">
          Hey
          <br />
          I’m <span className="text-brand1">Septi</span>,<br />
          Junior Frontend Developer
          <span className="text-xs text-brand1 font-mono ml-2">
            &lt;/h1&gt;
          </span>
        </h2>
        <p className="text-xs mt-6 text-brand1 font-mono mb-1">&lt;p&gt;</p>
        <p className=" text-xs font-mono text-white/80">
          I am passionate about creating web experiences and eager to learn
          more. If you&apos;re looking for an enthusiastic junior developer
          ready to grow,
        </p>
        <p className="text-xs text-brand1 font-mono mb-1">&lt;/p&gt;</p>
        <p className="mt-6 text-brand1 font-mono text-lg flex items-center gap-2 cursor-pointer select-none">
          Let’s Talk
          <span className="bg-[#282E34] rounded-full p-1 flex items-center justify-center">
            <i className="fas fa-envelope" />
          </span>
        </p>
      </div>
    </div>
  );
}

function StatsCard() {
  const stats = [
    { value: 2, label1: "Programming", label2: "Language" },
    { value: 6, label1: "Development", label2: "Tools" },
    { value: 1, label1: "Years of", label2: "Experience" },
  ];

  return (
    <div className="bg-bg2 rounded-full max-w-[160px] w-full flex flex-col gap-8 py-12 px-12 text-white font-mono text-xs">
      {stats.map(({ value, label1, label2 }) => (
        <div key={label1} className="flex items-center gap-3">
          <span className="text-brand1 text-2xl font-semibold">{value}</span>
          <div>
            <p>{label1}</p>
            <p>{label2}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-10 bg-bg1 text-white">
      <h1 className="text-brand1 text-[4rem] sm:text-[5rem] font-sans font-normal text-center leading-[1] mb-10">
        Developer
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 w-full max-w-[1200px] mx-auto">
        <SideNav />
        <ProfileCard />
        <MainContent />
        <StatsCard />
      </div>
    </section>
  );
}
