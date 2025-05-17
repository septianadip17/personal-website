import React, { useState } from "react";
import PropTypes from "prop-types";
import discord from "../assets/icons/discord.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import search from "../assets/icons/icon-search.svg";

const SocialLink = ({ href, icon, label }) => (
  <a href={href} className="flex items-center space-x-1 hover:text-brand1">
    <img src={icon} alt={label} className="w-5 h-5" />
    <span className="hidden md:inline">{label}</span>
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-bg1">
      <header className="flex justify-between items-center border-b border-grey text-white mx-auto max-w-screen-2xl px-6 py-4 h-[100px]">
        {/* Logo */}
        <div className="text-2xl font-bold whitespace-nowrap font-mono">
          <span className="text-brand1 ">&lt;C/&gt;</span> Septian Adi Pratama
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-mono">
          <a href="#home" className="text-brand1 hover:underline">
            Home
          </a>
          <a href="#blogs" className="hover:text-brand1">
            Blogs
          </a>

          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-3 py-1 rounded-full bg-white text-black text-sm w-[150px]"
            />
            <img
              src={search}
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
          </div>

          <SocialLink href="#" icon={instagram} label="Instagram" />
          <SocialLink href="#" icon={discord} label="Discord" />
          <SocialLink href="#" icon={github} label="Github" />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="md:hidden bg-bg2 text-white px-6 pb-4 space-y-3 font-mono text-sm">
          <a href="#home" className="block text-brand1">
            Home
          </a>
          <a href="#blogs" className="block">
            Blogs
          </a>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-3 py-1 rounded-full bg-white text-black text-sm w-full"
            />
            <img
              src={search}
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
            />
          </div>
          <SocialLink href="#" icon={instagram} label="Instagram" />
          <SocialLink href="#" icon={discord} label="Discord" />
          <SocialLink href="#" icon={github} label="Github" />
        </div>
      )}
    </div>
  );
}
