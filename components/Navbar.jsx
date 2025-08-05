"use client";
import Image from "next/image";
import logo from "../assets/images/logo-white.png";
import profileDefault from "../assets/images/profile.png";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Left side - Logo and main nav */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden rounded-md p-2 text-indigo-200 hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
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
                <a
                  href="/"
                  className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Home
                </a>
                <a
                  href="/properties"
                  className="text-indigo-100 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Properties
                </a>
                <a
                  href="/add-property"
                  className="text-indigo-100 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Add Property
                </a>
              </div>
            </div>
          </div>

          {/* Right side - User controls */}
          <div className="flex items-center">
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
              <div>
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center gap-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                  id="user-menu"
                  aria-haspopup="true"
                  aria-expanded={isProfileMenuOpen}
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src={profileDefault}
                      alt="User profile"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-white hidden md:inline-block">
                    John Doe
                  </span>
                  <svg
                    className={`text-indigo-200 h-4 w-4 hidden md:inline-block transition-transform ${
                      isProfileMenuOpen ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* Profile dropdown */}
              <div
                className={`${
                  isProfileMenuOpen ? "block" : "hidden"
                } origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-xl py-2 bg-white ring-1 ring-black ring-opacity-5 z-50`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500 truncate">
                    john@example.com
                  </p>
                </div>
                <a
                  href="/profile"
                  className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-200"
                  role="menuitem"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Your Profile
                </a>
                <a
                  href="/saved-properties"
                  className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-200"
                  role="menuitem"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                  Saved Properties
                </a>
                <a
                  href="/settings"
                  className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-200"
                  role="menuitem"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
                </a>
                <div className="border-t border-gray-100 my-1"></div>
                <a
                  href="/logout"
                  className="flex items-center px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50 transition-colors duration-200"
                  role="menuitem"
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Sign out
                </a>
              </div>
            </div>

            {/* Login Button (shown when not logged in) */}
            <button className="ml-4 hidden md:flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-700"
          >
            Home
          </a>
          <a
            href="/properties"
            className="block px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:text-white hover:bg-indigo-700"
          >
            Properties
          </a>
          <a
            href="/add-property"
            className="block px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:text-white hover:bg-indigo-700"
          >
            Add Property
          </a>
        </div>
        <div className="pt-4 pb-3 border-t border-indigo-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src={profileDefault}
                  alt="User profile"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">John Doe</div>
              <div className="text-sm font-medium text-indigo-200">
                john@example.com
              </div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <a
              href="/profile"
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:text-white hover:bg-indigo-700"
            >
              Your Profile
            </a>
            <a
              href="/saved-properties"
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:text-white hover:bg-indigo-700"
            >
              Saved Properties
            </a>
            <a
              href="/logout"
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-100 hover:text-white hover:bg-indigo-700"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;