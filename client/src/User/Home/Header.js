import React from "react";

const Header = () => {
  return (
    <header className="py-6 ">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="text-lg font-bold">NFTTickets</div>
        <div className="hidden md:flex space-x-12 items-center">
          <a href="#" className="hover:text-selected-text">
            HOME
          </a>
          <a href="#work" className="hover:text-selected-text">
            EVENTS
          </a>
          <a href="#clients" className="hover:text-selected-text">
            YOUR NFTs
          </a>
          <a href="#hire" className="">
            <button class="px-6 py-2 bg-theme font-bold">LOGIN</button>
          </a>
        </div>
      </div>

      <div></div>
    </header>
  );
};

export default Header;
