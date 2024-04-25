import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  console.log(nav);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 5, link: "contact" },
  ];
  return (
    <div
      className="flex justify-between items-center bg-black
     text-white w-full h-20 z-10 fixed"
    >
      {/* logo */}
      <div>
        <h1 className="text-5xl px-6 ml-2 font-sign">vasa</h1>
      </div>
      {/* desktop-links */}
      <ul className="hidden md:flex pr-6">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium capitalize
             text-gray-500 hover:scale-105 hover:text-white duration-200"
          >
           <Link to={link} smooth duration={300}>{link}</Link>  
          </li>
        ))}
      </ul>
      {/* hamburger menu & links for mobile */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-6 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col absolute top-0 right-0 justify-center 
          items-center w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              id={id}
              className="pb-8 cursor-pointer font-medium capitalize active:scale-105
             active:text-white duration-200 text-3xl"
            >
            <Link onClick={()=>setNav(!nav)} to={link} smooth duration={300}>{link}</Link>  
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
