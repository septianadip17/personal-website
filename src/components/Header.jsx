import { FaInstagram, FaDiscord, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-gray-900 border-2 border-red-">
      <header className="flex justify-between px-6 py-4 border-b border-gray-700 bg-gray-900 text-white mx-auto container">
        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="text-teal-400">&lt;C/&gt;</span> Septian Adi Pratama
        </div>

        {/* Right Items */}
        <nav className="hidden md:flex space-x-6 text-sm font-mono">
          <a href="#home" className="text-teal-400">
            Home
          </a>
          <a href="#blogs">Blogs</a>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 rounded-full bg-white text-black text-sm hidden md:block"
            />
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-teal-400"
            >
              <FaInstagram />{" "}
              <span className="hidden md:inline">Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-teal-400"
            >
              <FaDiscord /> <span className="hidden md:inline">Discord</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-teal-400"
            >
              <FaGithub /> <span className="hidden md:inline">Github</span>
            </a>
          </div>
        </nav>
        <hr />
      </header>
    </div>
  );
}
