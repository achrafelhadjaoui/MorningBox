import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext.js";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // Assuming 'user' has 'role' and 'isAuthenticated'
  console.log("I am navbar ", user);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
       <h1>Cafe<span className="text-yellow-500">Terea</span></h1>

        {/* Navigation Links */}
        <div
          id="collapseMenu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
        >
          <ul className="lg:flex gap-x-5">
            <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
              <Link
                to="/"
                className="hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
              >
                Home
              </Link>
            </li>

            {/* Links for Authenticated Users */}
            {user && (
              <>
                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                  <Link
                    to="/profile"
                    className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                  >
                    Profile
                  </Link>
                </li>
                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                  <Link
                    to="/settings"
                    className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                  >
                    Settings
                  </Link>
                </li>
              </>
            )}

            {/* Links based on Role */}
            {user?.user.role === "user" && (
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <Link
                  to="/user-dashboard"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  User Dashboard
                </Link>
              </li>
            )}
            {user?.user.role === "gerant" && (
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <Link
                  to="/gerant-dashboard"
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Gerant Dashboard
                </Link>
              </li>
            )}
            {user?.user.role === "admin" && (
              <>
                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                  <Link
                    to="/restaurant"
                    className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                  >
                    Restaurant
                  </Link>
                </li>
                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                  <Link
                    to="/user"
                    className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                  >
                    Users
                  </Link>
                </li>
              </>
            )}

            {/* Links for Unauthenticated Users */}
            {!user && (
              <>
                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                  <Link
                    to="/login"
                    className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                  >
                    Login
                  </Link>
                </li>
                <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                  <Link
                    to="/register"
                    className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <button id="toggleOpen" onClick={toggleMenu} className="lg:hidden">
          <svg
            className="w-7 h-7"
            fill="#000"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
