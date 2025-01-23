import React from 'react';

const Header = () => {
  return (
    <header 
      className="h-[80vh] flex flex-col justify-center items-center p-8 text-textdark bg-fixed bg-cover bg-center" 
    >
      {/* Main Header Title */}
      <h1 className="text-5xl font-extrabold font-poppins text-center">
        Davies' <span className="text-purple-500">Frontend Portfolio</span>
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg font-lora text-gray-500 text-center mt-4">
        Crafting modern, intuitive user experiences, and creative digital solutions
      </p>
      
      {/* Call to Action (CTA) Button */}
      <div className="text-center mt-6">
        <a
          href="https://calendly.com/daviesgotosa10/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-500 text-white text-lg font-medium px-10 py-6 lg:px-8 lg:py-4 rounded-full shadow-md hover:bg-purple-600 focus:ring-4 focus:ring-purple-300 transition-all duration-300"
          aria-label="Schedule a call with Davies"
        >
          Schedule a Call
        </a>
      </div>
    </header>
  );
};

export default Header;
