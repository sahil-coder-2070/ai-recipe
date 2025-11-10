import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Recipes", href: "/recipes" },
    { name: "About", href: "/about" },
  ];

  const btnName = "Login";
  const btnNameTwo = "Sign up";

  return (
    <div className="sticky top-0 z-50 border-b border-neutral-300 py-4 px-8 backdrop-blur-md bg-neutral-100/10 ">
      <div className="flex  rounded-full justify-between items-center max-w-7xl mx-auto ">
        <h1 className="font-bold uppercase text-3xl tracking-wide cursor-pointer text-neutral-700">
          Chef
        </h1>
        {/* Desktop Menu */}
        <div className="hidden sm:flex   items-center gap-10 list-none text-neutral-700 font-medium">
          {links.map((link, index) => (
            <li
              key={index}
              className="hover:text-neutral-400 cursor-pointer hover:-translate-y-0.75 transition-transform duration-200"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </div>
        <div className="hidden sm:flex gap-5">
          <button>Login</button>
          <Button btnname={btnNameTwo} />
        </div>
        {/* Mobile Menu Button */}
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

            <div className="flex flex-col items-center justify-center gap-6 w-full list-none text-neutral-800 p-4">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2, // stagger each li
                    duration: 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="hover:text-neutral-200 cursor-pointer text-4xl"
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
              <div className="flex  gap-5">
                <button>Login</button>
                <Button btnname={btnNameTwo} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
