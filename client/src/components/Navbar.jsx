import { useContext } from "react";
import { Link, NavLink } from "react-router";

import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="font-semibold hover:text-accent">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/events" className="font-semibold hover:text-accent">
          Events
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/add-event"
              className="font-semibold hover:text-accent"
            >
              Add Event
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-events"
              className="font-semibold hover:text-accent"
            >
              My Events
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="w-full bg-base-100 text-base-content px-4 md:px-8 shadow-md z-50">
      <div className="navbar max-w-7xl mx-auto flex justify-between ">
        {/* Left: Logo */}
        <div className="">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <img src="/EventEase.png" alt="EventEase" className="w-8" />
            <span className="text-accent">EventEase</span>
          </Link>
        </div>

        {/* Middle: Links */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>

        {/* Right: Auth + Mobile Menu */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                  <img
                    src={user.photo || "https://i.pravatar.cc/150?u=user"}
                    alt="User Avatar"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="text-center text-sm font-semibold text-neutral">
                  {user.name || "Anonymous"}
                </li>
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm bg-accent text-black hover:bg-accent-focus"
            >
              Sign In
            </Link>
          )}

          {/* Hamburger for small screens */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-green-300 text-neutral rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
