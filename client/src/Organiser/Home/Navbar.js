import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="py-6">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="text-lg font-bold">NFTTickets</div>
        <div className="hidden md:flex space-x-12 items-center">
          <Link to="/" className=" hover:text-red-bg-btn font-bold">
            Home
          </Link>
          <Link to="/user" className=" hover:text-red-bg-btn font-bold">
            Instructions
          </Link>
          <a href="/" className="hover:text-red-bg-btn font-bold">
            Create Event
          </a>
          <a href="#clients" className="hover:text-red-bg-btn font-bold">
            Past Events
          </a>
          <a href="#hire" className="">
            <button class="px-6 py-2 bg-red-bg-btn hover:bg-red-500 font-bold text-white">
              Login
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
