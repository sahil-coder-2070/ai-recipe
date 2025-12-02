import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LoginBtn } from "../ui/Button";
import { Link } from "react-router-dom";

const MotionSpan = motion.span;
const MotionDiv = motion.div;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Recipes", href: "/recipe" },
    { name: "AI Bot", href: "/airecipe" },
  ];

  const [hoverd, setHoverd] = useState(null);

  return (
    <div className="sticky top-0 z-50 border-b border-neutral-300 py-4 px-8 backdrop-blur-md bg-neutral-100/30 ">
      <div className="flex  rounded-full justify-between items-center max-w-6xl mx-auto ">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src="https://raw.githubusercontent.com/sahilsaraearth-svg/recipewala/8d1fc62eede659f9cf5e57c8921d6572b22e3f45/public/logo.svg"
              alt="logo"
              className="h-10 w-12 cursor-pointer"
            />
          </Link>
          <Link
            to="/"
            className="font-bold capitalize text-3xl tracking-wide cursor-pointer text-neutral-700 font-display"
          >
            Chefy AI
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex   items-center gap-10 list-none text-neutral-700 font-medium">
          <nav className="  rounded-full  flex gap-2">
            {links.map((link, index) => (
              <MotionSpan key={link.href}>
                <Link
                  onMouseEnter={() => setHoverd(index)}
                  onMouseLeave={() => setHoverd(null)}
                  className=" relative block group text-center py-1 px-4"
                  to={link.href}
                >
                  <AnimatePresence>
                    {hoverd === index && (
                      <MotionDiv
                        layoutId="hoverd"
                        className="absolute h-full w-full bg-orange-600 inset-0 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10 font-medium tracking-wide text-neutral-600 group-hover:text-white">
                    {link.name}
                  </span>
                </Link>
              </MotionSpan>
            ))}
          </nav>
        </div>
        <div className="hidden sm:flex gap-5">
          <LoginBtn />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-neutral-900"
        >
          <MenuIcon />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute inset-x-0  top-0 z-50 w-screen h-screen rounded-lg  bg-neutral-50 text-2xl shadow-lg flex flex-col items-center justify-center">
            <X
              className="absolute top-12 right-7 sm:hidden cursor-pointer text-neutral-800"
              size={35}
              onClick={() => setIsOpen(false)}
            />

            <div className="flex flex-col items-start justify-center gap-6 w-full list-none text-neutral-800 p-4 max-w-2xs pl-20">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
              onClick={() => setIsOpen(false)}

                  className="hover:text-neutral-600 cursor-pointer text-4xl text-left "
                >
                  <Link to={link.href}>{link.name}</Link>
                  
                </motion.li>
              ))}
              <div 
              onClick={() => setIsOpen(false)}
              className="flex flex-col gap-5">
                <LoginBtn />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
