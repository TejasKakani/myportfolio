import { useState } from "react";
import { Menu, X } from "lucide-react"; // No change
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion"; // --- Change: Imported AnimatePresence ---

// --- List Component Improvements ---
function List({ classes, isMobile = false, onLinkClick = () => {} }) {
  const listItems = [
    { to: "hero", text: "Home" },
    { to: "technologies", text: "Technologies" },
    { to: "projects", text: "Projects" },
    { to: "about", text: "About" },
    { to: "contact", text: "Contact" }
  ];

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: isMobile ? 50 : 0, // Animate from right on mobile
      y: isMobile ? 0 : -10 // Animate from top on desktop
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: index * 0.1, // Simplified delay
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <ul className={classes}>
      {listItems.map((item, index) => (
        <motion.li
          key={item.to}
          custom={index} // Pass index to variants
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="relative group" // No change
        >
          <Link
            to={item.to}
            smooth={true}
            duration={500}
            spy={true} // --- Change: Added spy to enable activeClass ---
            activeClass="text-purple-400 font-bold" // --- Change: Added activeClass for visual feedback ---
            onClick={onLinkClick} // --- Change: Close menu on mobile link click ---
            className="px-4 py-2 rounded-full hover:text-purple-400 transition-colors duration-300 cursor-pointer"
          >
            {item.text}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              // --- Change: Added active state to underline (optional but nice) ---
              // This is more complex. For simplicity, we'll let activeClass handle text color.
              // To make the underline "stick" on active, you'd need to add `group-[.active]:scale-x-100`
              // and add `className="active"` to the Link's activeClass prop.
              // For now, text color feedback is a great improvement.
            />
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}

// --- Header Component Improvements ---
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // --- Change: Function to close menu, passed to List component ---
  const closeMenu = () => {
    setShowMenu(false);
  }

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      id="header"
      // --- Change: Added subtle border for better glassmorphism look ---
      className="fixed top-0 left-0 right-0 z-50 text-white backdrop-blur-lg bg-black/20 border-b border-white/10"
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">TK</span>
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex">
            <List classes="flex items-center gap-8 text-lg" />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            {/* --- Change: Accessible button with fade transition --- */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-white hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-label="Toggle navigation menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {showMenu ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* --- Change: Mobile Menu Dropdown --- */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            // --- Change: Positioned *below* the header, full width ---
            className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-black/95 backdrop-blur-lg md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              {/* --- Change: Removed redundant X, added onLinkClick to close menu --- */}
              <List
                classes="flex flex-col space-y-8 text-2xl items-center"
                isMobile={true}
                onLinkClick={closeMenu}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Header;