import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-10 bg-secondary-color flex items-center justify-between lg:px-20 sm:px-10 max-sm:px-6 ">
      <div className="logo">
        <h1 className="lg:text-2xl sm:text-xl font-thin text-text-muted ">
          readme.hp
        </h1>
      </div>

      <div className="logo">
        <a href="https://github.com/dothp-harshu/" target="_blank">
          <FaGithub size={25} className="hover:text-gray-500 duration-500" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
