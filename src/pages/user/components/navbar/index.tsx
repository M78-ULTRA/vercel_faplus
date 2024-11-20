import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showLoginCard, setShowLoginCard] = useState(false);
  const [isRegister, setIsRegister] = useState(false); // State to toggle between Login and Register

  const toggleLoginCard = () => {
    setShowLoginCard((prev) => !prev);
  };

  const toggleFormMode = () => {
    setIsRegister((prev) => !prev); // Toggle between Login and Register
  };

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar fixed top-0 left-0 w-full h-[8vh] flex items-center justify-center transition-all duration-300">
          {/* Logo on the far left */}
          <div className="absolute left-8">
            <img
              src="/logo/FA+logo.png"
              alt="FA Plus Logo"
              className="max-h-1/3 sm:max-h-1/4 md:max-h-1/6 lg:max-h-1/8 object-contain"
            />
          </div>

          {/* Centered Navigation Links */}
          <div className="flex space-x-8">
            <Link href="/user/home">
              <span className="hover:underline-animation">Home</span>
            </Link>
            <Link href="/user/events">
              <span className="hover:underline-animation">Events</span>
            </Link>
            <Link href="/user/about">
              <span className="hover:underline-animation">About</span>
            </Link>
          </div>

          {/* Google Icon on the far right */}
          <div className="absolute right-8" onClick={toggleLoginCard}>
            <span className="material-symbols-outlined text-blue-400 text-3xl cursor-pointer">
              person
            </span>
          </div>
        </nav>
      </div>

      {/* Login/Register Card */}
      {showLoginCard && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/50 z-50"
          onClick={toggleLoginCard}
        >
          <div
            className="bg-white p-6 rounded-md shadow-md relative"
            onClick={(e) => e.stopPropagation()} // Prevent click inside the card from closing it
          >
            <h2 className="text-center text-xl font-bold mb-4">
              {isRegister ? "Register" : "Log In"}
            </h2>
            <form>
              {isRegister && (
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              )}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-between space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-500 text-white py-2 rounded-md"
                >
                  {isRegister ? "Register" : "Log In"}
                </button>
                <button
                  type="button"
                  className="flex-1 bg-blue-500 text-white py-2 rounded-md"
                  onClick={toggleFormMode} // Toggle between Register and Login
                >
                  {isRegister ? "Back to Login" : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;










