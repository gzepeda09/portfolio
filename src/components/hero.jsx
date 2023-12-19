import React from "react";

const Hero = () => {
  return (
    <section className="bg-dark text-white py-20 md:py-40">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-12 md:space-y-20">
        <h1 className="text-4xl font-bold text-center md:text-5xl">
          Your Name - Portfolio
        </h1>
        <p className="text-lg text-center md:text-xl">
          Crafting captivating experiences with code and design.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="your-projects-page"
            className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white"
          >
            See My Projects
          </a>
          <a
            href="your-contact-page"
            className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;