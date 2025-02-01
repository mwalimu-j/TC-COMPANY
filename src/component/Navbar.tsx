import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black text-white fixed w-full top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold">Terraso</Link>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
        
        {/* Navigation Links */}
        <ul className={`md:flex space-x-6 hidden`}>
          <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
          <li><Link to="/contacts" className="hover:text-blue-400">Contacts</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/feedback" className="hover:text-blue-400">Feedback</Link></li>
        </ul>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white w-full absolute top-16 left-0 py-4 shadow-lg">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link to="/services" onClick={closeMenu} className="hover:text-blue-400">Services</Link></li>
            <li><Link to="/contacts" onClick={closeMenu} className="hover:text-blue-400">Contacts</Link></li>
            <li><Link to="/about" onClick={closeMenu} className="hover:text-blue-400">About</Link></li>
            <li><Link to="/feedback" onClick={closeMenu} className="hover:text-blue-400">Feedback</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;