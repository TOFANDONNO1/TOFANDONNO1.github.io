import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./navbar.css";
import logo from "../../Assests/soumya-favicon-black.png";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="navbar" >
     <a href="#about"><div className="navbar-logo" >
        <img src={logo}alt="Logo" />
      </div></a> 

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            className="navbar-links"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {["Home", "About", "Blogs", "Skills", "Projects", "Stats", "Contact"].map((text, index) => (
              <motion.li
                key={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <a href={`#${text.toLowerCase()}`}>{text}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      
      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        <motion.span className="bar" animate={{ rotate: isMobileMenuOpen ? 45 : 0 }} />
        <motion.span className="bar" animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} />
        <motion.span className="bar" animate={{ rotate: isMobileMenuOpen ? -45 : 0 }} />
      </div>
    </nav>
  );
};

export default Navbar;
