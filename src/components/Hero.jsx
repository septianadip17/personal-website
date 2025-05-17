import React from "react";

function SideNav() {
  const navItems = [
    { icon: "fa-th", label: "Dashboard", color: "#7FFFD4" },
    { icon: "fa-user", label: "User" },
    { icon: "fa-code", label: "Code" },
    { icon: "fa-desktop", label: "Desktop" },
    { icon: "fa-pen", label: "Edit" },
    { icon: "fa-envelope", label: "Mail" },
  ];

  return (
    <nav className="flex flex-col gap-6 bg-[#282E34] border border-white border-opacity-30 rounded-full p-2 w-12 h-[280px] justify-center items-center">
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
          <i className={`fas ${icon}`}></i>
        </button>
      ))}
    </nav>
  );
}

function ProfileCard() {
  const skills = ["HTML", "CSS", "JS", "REACT"];
  const info = [
    { icon: "fa-envelope", text: "abdurrahman_sinan@hotmail.com" },
    { icon: "fa-map-marker-alt", text: "Turkey" },
    { icon: "fa-briefcase", text: "Full-time / Freelancer" },
    { icon: "fa-link", text: "www.sinantokmak.com" },
  ];

  return (
    <div className="relative flex flex-col items-center text-center text-white border border-white border-opacity-70 rounded-tr-[100px] rounded-br-[100px] rounded-tl-md rounded-bl-md p-6 md:p-8 max-w-[280px] w-full">
      <div className="absolute top-0 left-0 h-full w-1.5 rounded-tr-[100px] rounded-br-[100px] bg-gradient-to-b from-[#7FFFD4] to-[#00BFA5] -translate-x-full" />
      <div className="relative z-10 flex flex-col items-center gap-2">
        <img
          src="https://storage.googleapis.com/a1aa/image/d0e199d8-66d9-4bd9-8e4d-5c3a845e4710.jpg"
          alt="Avatar"
          className="w-20 h-20 rounded-full border-2 border-[#7FFFD4]"
        />
        <h2 className="text-lg font-mono font-semibold">Sinan</h2>
        <p className="text-xs font-mono text-white/80">Full-stack developer</p>
        <ul className="mt-4 space-y-2 text-xs font-mono text-white/80 text-left w-full max-w-[220px]">
          {info.map(({ icon, text }) => (
            <li key={text} className="flex items-center gap-2">
              <i className={`fas ${icon} text-[#7FFFD4] text-[12px]`}></i>
              {text}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 mt-3 flex-wrap justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-[#7FFFD4] text-[#282E34] text-[10px] font-mono rounded-full px-2 py-[2px]"
            >
              {skill}
            </span>
          ))}
        </div>
        <button className="mt-6 bg-white text-[#282E34] rounded-full px-6 py-2 flex items-center gap-2 text-sm">
          Download CV <i className="fas fa-file-download text-[#B94A48]" />
        </button>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex flex-col max-w-[480px] w-full">
      <h1 className="text-[#7FFFD4] text-[4rem] sm:text-[5rem] font-sans font-normal text-center md:text-left leading-[1]">
        Developer
      </h1>
      <div className="mt-6 text-white font-sans">
        <p className="text-xs text-[#7FFFD4] font-mono mb-1">&lt;h1&gt;</p>
        <h2 className="text-4xl font-normal leading-tight">
          Hey
          <br />
          I’m <span className="text-[#7FFFD4]">Sinan</span>,<br />
          Full-Stack Developer
          <span className="text-xs text-[#7FFFD4] font-mono ml-2">
            &lt;/h1&gt;
          </span>
        </h2>
        <p className="mt-6 text-xs font-mono text-white/80">
          I help business grow by crafting amazing web experiences. If you’re
          looking for a developer that likes to get stuff done,
        </p>
        <p className="mt-6 text-[#7FFFD4] font-mono text-lg flex items-center gap-2 cursor-pointer select-none">
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
    { value: 4, label1: "Programming", label2: "Language" },
    { value: 6, label1: "Development", label2: "Tools" },
    { value: 8, label1: "Years of", label2: "Experience" },
  ];

  return (
    <div className="bg-[#1B1F25] rounded-full max-w-[160px] w-full flex flex-col gap-8 py-8 px-6 text-white font-mono text-xs">
      {stats.map(({ value, label1, label2 }) => (
        <div key={label1} className="flex items-center gap-3">
          <span className="text-[#7FFFD4] text-2xl font-semibold">{value}</span>
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
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-10 bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 w-full max-w-[1200px] mx-auto">
        <SideNav />
        <ProfileCard />
        <MainContent />
        <StatsCard />
      </div>
    </section>
  );
}
