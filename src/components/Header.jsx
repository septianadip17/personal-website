import React from "react";

const Header = () => {
  return (
    <div className="bg-background text-foreground flex items-center justify-between p-4">
      <div className="flex items-center">
        <span className="text-accent text-lg">&lt;C/&gt;</span>
        <span className="text-2xl font-bold ml-2">SinanTokmak</span>
      </div>
      <nav className="flex space-x-4">
        <a href="#" className="text-accent hover:text-accent/80">
          Home
        </a>
        <a href="#" className="text-accent hover:text-accent/80">
          Blogs
        </a>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-border rounded-lg p-2"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <img
              alt="search-icon"
              src="https://openui.fly.dev/openui/24x24.svg?text=🔍"
            />
          </button>
        </div>
      </nav>
      <div className="flex space-x-4">
        <a href="#" className="text-accent hover:text-accent/80">
          Instagram
        </a>
        <a href="#" className="text-accent hover:text-accent/80">
          Discord
        </a>
        <a href="#" className="text-accent hover:text-accent/80">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Header;
