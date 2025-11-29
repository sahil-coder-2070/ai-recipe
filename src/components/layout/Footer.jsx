import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Recipes", href: "/Recipe" },
    { name: "About", href: "/About" },
  ];
  return (
    <div>
      <div className=" px-8 pt-20 pb-32 relative bg-white border-neutral-200 border-t">
        <div className="max-w-6xl mx-auto text-sm text-neutral-800  flex sm:flex-row flex-col justify-between items-start ">
          <div className="flex flex-col gap-2">
            <a href="/" className="flex items-center font-bold text-md">
              <img
                src="../src/assets/logo.png"
                alt="logo"
                className="h-8 w-8 cursor-pointer"
              />
              Chefy AI
            </a>
            <p className="text-neutral-500 font-medium">
              Copyright © 2025 Chefy AI
            </p>
            <p className="text-neutral-500 font-medium">All rights reserved</p>
          </div>
          <div className="grid grid-cols-2 gap-10 h-full">
            <div className="flex flex-col justify-between ">
              {links.map((navlinks) => {
                return (
                  <Link key={navlinks.name} to={navlinks.href} className="mt-2">
                    {navlinks.name}
                  </Link>
                );
              })}{" "}
            </div>
            <div>
              <div className="flex flex-col justify-between ">
                {links.map((navlinks) => {
                  return (
                    <Link
                      key={navlinks.name}
                      to={navlinks.href}
                      className="mt-2"
                    >
                      {navlinks.name}
                    </Link>
                  );
                })}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-5xl md:text-9xl lg:text-[18rem] font-extrabold bg-clip-text text-transparent bg-linear-to-b from-neutral-50  to-neutral-200 dark:to-neutral-300 inset-x-0">
          CHEFY AI
        </p>
      </div>
    </div>
  );
};

export default Footer;
