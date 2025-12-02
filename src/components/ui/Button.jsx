const Button = ({ btnname, cn, e }) => {
  return (
    <button
      onClick={e}
      className={`cursor-pointer hover:scale-95 transition-transform duration-200 bg-orange-600 rounded-full text-neutral-100 font-medium  shadow-neutral-300 shadow-md  border-neutral-300 border ${cn}`}
    >
      {btnname}
    </button>
  );
};

export default Button;
import { useEffect } from "react";
import { usePuterStore } from "../../lib/puter";

export const LoginBtn = () => {
  const { signIn, signOut, auth, checkAuthStatus } = usePuterStore();
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const handleClick = () => {
    if (auth.isAuthenticated) {
      const confirmed = window.confirm("Are you sure you want to logout?");
      if (confirmed) {
        signOut();
      }
    } else {
      signIn();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer hover:scale-95 transition-transform duration-200 bg-orange-600 rounded-full text-neutral-100 font-medium shadow-neutral-300 shadow-md border-neutral-300 border text-sm sm:text-base py-1 px-6"
    >
      {auth.isAuthenticated ? "Logout" : "Login"}
    </button>
  );
};

import { useNavigate } from "react-router-dom";

export const Herobtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/airecipe")}
      className="cursor-pointer hover:scale-95 transition-transform duration-200  bg-linear-to-br bg-orange-400 via-orange-500 to-orange-600 
rounded-full text-neutral-100 font-medium shadow-neutral-300 shadow-md border-neutral-300 border text-base sm:text-base py-1.5 px-6"
    >
      Get AI Suggestion
    </button>
  );
};
export const HerobtnTwo = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/recipe")}
      className="cursor-pointer hover:scale-95 transition-transform duration-200  bg-linear-to-br bg-neutral-100 via-neutral-200 to-neutral-100 
text-neutral-800 font-medium shadow-neutral-300 shadow-md border-neutral-300 border text-base sm:text-base py-1.5 px-6 rounded-full"
    >
      Explore Recipes
    </button>
  );
};