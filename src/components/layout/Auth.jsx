import React, { useEffect } from "react";
import Button from "../ui/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { usePuterStore } from "../../lib/puter";

const Auth = () => {
  const { isLoading, auth } = usePuterStore();

  //   const location = useLocation();
  //   const next = location.search.split("next=")[1] || "/";
  //   const navigate = useNavigate();

  //   // When logged in → redirect automatically
  //   useEffect(() => {
  //     if (auth.isAuthenticated) navigate(next);
  //   }, [auth.isAuthenticated, next, navigate]);
  useEffect(() => {
    auth.checkAuthStatus(); 
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="absolute min-h-screen w-full bg-linear-to-br bg-black/10">
        <div className="min-h-screen max-w-md m-auto flex justify-center items-center">
          <div className="w-full">
            <div className="shadow-lg border border-neutral-200 bg-neutral-50 rounded-2xl p-10 text-center flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl">Welcome To Chey AI</h1>
                <p className="text-sm text-neutral-600">
                  Login To Continue Your Cooking
                </p>
              </div>

              <div>
                {isLoading ? (
                  <Button
                    btnname="Loading..."
                    cn="text-sm sm:text-lg py-1 px-8 rounded-full"
                  />
                ) : auth.isAuthenticated ? (
                  <Button
                    btnname="Log Out"
                    e={auth.signOut}
                    cn="text-sm sm:text-lg py-1 px-8 rounded-full"
                  />
                ) : (
                  <Button
                    btnname="Login"
                    e={auth.signIn}
                    cn="text-sm sm:text-lg py-1 px-8 rounded-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
