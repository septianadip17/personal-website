import React from "react";

const Works = () => {
  return (
    <section className="bg-bg1 min-h-screen flex flex-col items-center justify-center px-4 text-center text-[#2af9f4] relative">
      <div className="flex flex-col items-center mb-6">
        <div className="flex flex-col items-center">
          <div className="border border-[#2af9f4] rounded-full w-8 h-12 flex items-center justify-center mb-2">
            <i className="fas fa-mouse-pointer text-[#2af9f4] text-lg"></i>
          </div>
          <div className="w-[2px] h-10 border-r border-dashed border-[#2af9f4] relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
          </div>
        </div>
        <h2 className="text-5xl font-semibold mb-2">Works</h2>
        <div className="flex items-center justify-center space-x-2 mb-12">
          <div className="w-2 h-2 rounded-full bg-[#2af9f4]"></div>
          <div className="border-b border-[#2af9f4] w-24"></div>
          <div className="w-2 h-2 rounded-full bg-[#2af9f4]"></div>
        </div>
        <p className="text-white text-xs max-w-[400px]">
          I had the pleasure of working with these awesome projects
        </p>
      </div>
      <div className="relative flex items-center justify-center w-full max-w-5xl">
        <button
          aria-label="Previous"
          className="absolute left-0 z-10 bg-[#2a2f37] bg-opacity-30 hover:bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center text-white cursor-pointer"
        >
          <i className="fas fa-chevron-left text-lg"></i>
        </button>
        <div className="flex items-center space-x-6">
          <img
            alt="Vertical computer monitor displaying code editor with colorful code lines on dark background"
            className="w-[200px] h-[250px] object-contain"
            height="250"
            src="https://storage.googleapis.com/a1aa/image/0cac0ba7-fdb4-4809-eadb-88cdfdfb4aff.jpg"
            width="200"
          />
          <div className="flex flex-col items-center">
            <a
              href="#"
              className="text-[#2af9f4] underline underline-offset-4 text-lg mb-2 cursor-pointer"
            >
              View Website
            </a>
            <img
              alt="Wide computer monitor showing a website homepage with snowy mountain background and blue call to action button"
              className="w-[350px] h-[250px] object-contain"
              height="250"
              src="https://storage.googleapis.com/a1aa/image/df0b732a-de69-45b1-1edd-3df4cdebfd46.jpg"
              width="350"
            />
          </div>
        </div>
        <button
          aria-label="Next"
          className="absolute right-0 z-10 bg-[#2a2f37] bg-opacity-30 hover:bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center text-white cursor-pointer"
        >
          <i className="fas fa-chevron-right text-lg"></i>
        </button>
      </div>
    </section>
  );
};

export default Works;
