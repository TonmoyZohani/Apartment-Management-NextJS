"use client";
import Image from "next/image";
import logo from "../assets/images/logo-white.png";
import profileDefault from "../assets/images/profile.png";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLoggedIn = false; // Replace with your actual auth state

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Left side - Logo and main nav */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden rounded-md p-2 text-indigo-200 hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center">
                <div className="h-10 w-10 relative">
                  <Image
                    src={logo}
                    alt="PropertyPulse Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="ml-3 text-white text-2xl font-bold hidden md:block">
                  Property<span className="font-light">Pulse</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}

            <div className="hidden md:ml-10 md:block">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive("/")
                      ? "bg-white text-indigo-600"
                      : "text-indigo-100 hover:bg-indigo-700 hover:text-white"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/properties"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive("/properties")
                      ? "bg-white text-indigo-600"
                      : "text-indigo-100 hover:bg-indigo-700 hover:text-white"
                  }`}
                >
                  Properties
                </Link>
                {/* {isLoggedIn && ( */}
                <Link
                  href="/properties/add"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive("/add-property")
                      ? "bg-white text-indigo-600"
                      : "text-indigo-100 hover:bg-indigo-700 hover:text-white"
                  }`}
                >
                  Add Property
                </Link>
                {/* )} */}
              </div>
            </div>
          </div>

          {/* Right side - User controls */}
          <div className="flex items-center">
            {isLoggedIn ? (
              <>
                {/* Notifications */}
                <button
                  type="button"
                  className="p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white relative"
                >
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-indigo-600"></span>
                </button>

                {/* User Profile */}
                <div className="ml-4 relative">
                  {/* ... profile dropdown code ... */}
                </div>
              </>
            ) : (
              <div className="hidden md:block md:ml-4">
                <button className="flex items-center text-white bg-indigo-700 hover:bg-indigo-800 rounded-md px-4 py-2 transition-colors duration-200">
                  <FaGoogle className="mr-2" />
                  <span>Login or Register</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive("/")
                ? "bg-white text-indigo-600"
                : "text-indigo-100 hover:bg-indigo-700 hover:text-white"
            }`}
          >
            Home
          </a>
          <a
            href="/properties"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive("/properties")
                ? "bg-white text-indigo-600"
                : "text-indigo-100 hover:bg-indigo-700 hover:text-white"
            }`}
          >
            Properties
          </a>
          {isLoggedIn && (
            <a
              href="/add-property"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/add-property")
                  ? "bg-white text-indigo-600"
                  : "text-indigo-100 hover:bg-indigo-700 hover:text-white"
              }`}
            >
              Add Property
            </a>
          )}
          {!isLoggedIn && (
            <button className="flex items-center justify-center w-full text-white bg-indigo-700 hover:bg-indigo-800 rounded-md px-3 py-2 my-1 transition-colors duration-200">
              <FaGoogle className="mr-2" />
              <span>Login or Register</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
