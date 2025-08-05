"use client";
import Image from "next/image";
import logo from "../assets/images/logo-white.png";
import profileDefault from "../assets/images/profile.png";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Left side - Logo and main nav */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
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
                  className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                  id="user-menu"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-indigo-600 font-medium">JD</span>
                  </div>
                  <span className="ml-2 text-white hidden md:inline-block">
                    John Doe
                  </span>
                  <svg
                    className="ml-1 text-indigo-200 h-4 w-4 hidden md:inline-block"
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
                className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-150"
                  role="menuitem"
                >
                  Your Profile
                </a>
                <a
                  href="/saved-properties"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-150"
                  role="menuitem"
                >
                  Saved Properties
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-150"
                  role="menuitem"
                >
                  Settings
                </a>
                <a
                  href="/logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-150"
                  role="menuitem"
                >
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
      <div className="md:hidden hidden" id="mobile-menu">
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
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-indigo-600 font-medium">JD</span>
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
