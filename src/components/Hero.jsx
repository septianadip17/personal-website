// src/components/Hero.jsx
import { FaEnvelope, FaDownload, FaGlobe, FaBriefcase, FaMapMarkerAlt, FaEnvelopeOpen } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-10 bg-gray-900 text-white">
      
      {/* Sidebar Buttons */}
      <div className="hidden lg:flex flex-col items-center space-y-4 mr-6">
        <div className="bg-gray-800 p-3 rounded-full hover:bg-teal-400 transition cursor-pointer">
          <span>🏠</span>
        </div>
        <div className="bg-gray-800 p-3 rounded-full hover:bg-teal-400 transition cursor-pointer">
          <span>👤</span>
        </div>
        <div className="bg-gray-800 p-3 rounded-full hover:bg-teal-400 transition cursor-pointer">
          <span>💻</span>
        </div>
        <div className="bg-gray-800 p-3 rounded-full hover:bg-teal-400 transition cursor-pointer">
          <span>📝</span>
        </div>
        <div className="bg-gray-800 p-3 rounded-full hover:bg-teal-400 transition cursor-pointer">
          <FaEnvelope />
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-gray-800 p-6 rounded-[50px_0_50px_0] border-l-4 border-teal-400 w-full md:w-1/3 mb-10 md:mb-0">
        <div className="flex flex-col items-center">
          <img
            src="/avatar.jpg"
            alt="Sinan"
            className="w-24 h-24 rounded-full border-4 border-teal-400 mb-4"
          />
          <h2 className="text-xl font-semibold">Sinan</h2>
          <p className="text-gray-400">Full-stack developer</p>
          <div className="mt-4 space-y-2 text-sm text-left w-full">
            <p className="flex items-center"><FaEnvelope className="mr-2" /> abdurrahman_sinan@hotmail.com</p>
            <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Turkey</p>
            <p className="flex items-center"><FaBriefcase className="mr-2" /> Full-time / Freelancer</p>
            <p className="flex items-center"><FaGlobe className="mr-2" /> www.sinantokmak.com</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-teal-500 px-2 py-1 rounded text-xs">HTML</span>
            <span className="bg-teal-500 px-2 py-1 rounded text-xs">CSS</span>
            <span className="bg-teal-500 px-2 py-1 rounded text-xs">JS</span>
            <span className="bg-teal-500 px-2 py-1 rounded text-xs">REACT</span>
          </div>
          <button className="mt-4 flex items-center px-4 py-2 bg-white text-black rounded-full hover:bg-teal-400 transition">
            Download CV <FaDownload className="ml-2" />
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="w-full md:w-2/3 text-left md:pl-10">
        <h1 className="text-6xl font-bold text-teal-300">Developer</h1>
        <div className="mt-4 text-3xl font-semibold">
          <p>Hey</p>
          <p>I’m <span className="text-teal-400">Sinan</span>,</p>
          <p>Full-Stack Developer</p>
        </div>
        <p className="mt-6 text-gray-400 max-w-xl">
          I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,
        </p>
        <div className="mt-4">
          <a href="#contact" className="text-teal-400 inline-flex items-center text-lg font-bold">
            Let’s Talk <FaEnvelopeOpen className="ml-2" />
          </a>
        </div>

        {/* Experience Box */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-3xl text-center">
            <p className="text-3xl text-teal-400">4</p>
            <p className="text-sm mt-1">Programming Language</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-3xl text-center">
            <p className="text-3xl text-teal-400">6</p>
            <p className="text-sm mt-1">Development Tools</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-3xl text-center">
            <p className="text-3xl text-teal-400">8</p>
            <p className="text-sm mt-1">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
