import React from "react";

function Navbar() {
  return (
    <div className="py-6">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="text-lg font-bold">NFTTickets</div>
        <div className="hidden md:flex space-x-12 items-center">
          <a href="#" className=" hover:text-red-bg-btn font-bold">
            HOME
          </a>
          <a href="#" className=" hover:text-red-bg-btn font-bold">
            INSTRUCTIONS
          </a>
          <a href="#work" className="hover:text-red-bg-btn font-bold">
            CREATE EVENT
          </a>
          <a href="#clients" className="hover:text-red-bg-btn font-bold">
            PAST EVENTS
          </a>
          <a href="#hire" className="">
            <button class="px-6 py-2 bg-red-bg-btn hover:bg-red-500 font-bold text-white">
              LOGIN
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
