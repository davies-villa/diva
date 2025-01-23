import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center py-10 px-6">
      {/* Header Section */}
      <h1 className="text-2xl font-bold font-poppins mb-8 text-center">
        Get in <span className="text-purple-500">Touch</span>
      </h1>

      {/* Contact Information */}
      <div className="text-center mb-6">
        {/* Phone Number */}
        <p className="text-lg font-poppins text-gray-800">
          Phone: {" "}
          <a href="tel:+263771386552" className=" font-regular">
            +263 771 386 552
          </a>
        </p>
        {/* Email Address */}
        <p className="text-lg font-poppins text-gray-800">
          Email: {" "}
          <a
            href="mailto:daviesgotosa10@gmail.com"
            className="font-regular"
          >
            daviesgotosa10@gmail.com
          </a>
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/davies-gotosa/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-purple-500 rounded-full p-4 hover:text-purple-500 hover:bg-white text-2xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/daviescodes/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-purple-500 rounded-full p-4 hover:text-purple-500 hover:bg-white text-2xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-purple-500 rounded-full p-4 hover:text-purple-500 hover:bg-white text-2xl"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Contact;
