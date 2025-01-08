import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Link } from "react-scroll";

function List({classes}){
  return (
    <ul className={classes}>
      <li className="hover:underline hover:scale-105 transition-transform cursor-pointer">
        <Link to="hero" smooth={true} duration={500}>Home</Link>
      </li>
      <li className="hover:underline hover:scale-105 transition-transform cursor-pointer">
        <Link to="technologies" smooth={true} duration={500}>Technologies</Link>
      </li>
      <li className="hover:underline hover:scale-105 transition-transform cursor-pointer">
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
      </li>
      <li className="hover:underline hover:scale-105 transition-transform cursor-pointer">
        <Link to="about" smooth={true} duration={500}>About</Link>
      </li>
      <li className="hover:underline hover:scale-105 transition-transform cursor-pointer">
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </li>
    </ul>
  );
}

function Header() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div id="header" className="fixed flex w-screen p-5 z-10 justify-around text-white backdrop-blur-md shadow-lg">
      <text className="text-lg">My Portfolio</text>
      <List classes="hidden md:flex space-x-6 text-lg" />
      {showMenu ? (
        <>
        <X className="md:hidden block z-10" size="24" onClick={toggleMenu} />
        <div className="fixed p-12 md:hidden top-0 right-0 flex justify-center w-1/2 h-screen bg-slate-800" onClick={toggleMenu}>
        <List classes="space-y-6 text-lg" />
        </div>
        </>
      ) : (
        <>
        <Menu className="md:hidden block z-10" size="24" onClick={toggleMenu} />
        </>
      )}
    </div>
  );
}

export default Header;