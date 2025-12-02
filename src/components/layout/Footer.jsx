import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Recipes", href: "/Recipe" },
    { name: "AI", href: "/airecipe" },
  ];
  return (
    <div>
      <div className=" px-8 pt-20 pb-32 relative bg-white border-neutral-200 border-t">
        <div className="max-w-6xl mx-auto text-sm text-neutral-800  flex sm:flex-row flex-col justify-between items-start  gap-5">
          <div className="flex flex-col gap-2">
            <a href="/" className="flex items-center font-bold text-md ">
              <img
                src="https://raw.githubusercontent.com/sahilsaraearth-svg/recipewala/8d1fc62eede659f9cf5e57c8921d6572b22e3f45/public/logo.svg"
                alt="logo"
                className="h-10 w-15 cursor-pointer object-cover pr-2"
              />
              Chefy AI
            </a>
            <p className="text-neutral-500 font-medium">
              Copyright © 2025 Chefy AI
            </p>
            <p className="text-neutral-500 font-medium">All rights reserved</p>
          </div>
          <div className="grid grid-cols-2 gap-10 h-full justify-between w-full md:w-fit">
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
              <div className="flex flex-col justify-between  ">
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
        <p className="text-center text-7xl md:text-9xl lg:text-[18rem] font-extrabold bg-clip-text text-transparent bg-linear-to-b from-neutral-50  to-neutral-200 dark:to-neutral-300 inset-x-0">
          CHEFY AI
        </p>
      </div>
    </div>
  );
};

export default Footer;
