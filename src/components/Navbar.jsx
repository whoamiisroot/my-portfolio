import React from "react";
import { ProfilePic } from "../assets";

const Navbar = () => {
  const navlinks = [
    {
      name: "About",
      id: "about",
    },
    {
      name: "Projects",
      id: "project",
    },
    {
      name: "Timeline",
      id: "timeline",
    },
  ];
  return (
    <nav className="bg-white py-4 border-t-2 border-b-2 border-gray-300" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="h-8 w-auto rounded-full"
              src={ProfilePic}
              alt="Logo"
            />
            <div className="ml-4 font-medium text-gray-800 text-lg">
  <a href="https://www.linkedin.com/in/youssef-erasekh-858b51262/">ERASEKH Youssef</a>
</div>

          </div>
          <div className="hidden md:block">
            {navlinks.map((link, index) => (
              <a
                href={`#${link.id}`}
                key={index}
                className="text-gray-500 transition duration-500 hover:text-gray-700 px-3 py-2 rounded-md text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
