import React from "react";

const Header = () => {
  return (
    <div className="flex flex-wrap lg:ml-20 justify-between max-w-xl mt-0 md:my-35">
      <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
        NFTTickets
      </h1>
      <p class="mt-3 section-paragraph text-lg">Not your regular tickets</p>
      <div class="w-full flex justify-center md:justify-start">
        <a href="https://github.com/adityabisht02" target="_blank">
          <button class="px-8 py-4 bg-red-bg-btn hover:bg-red-500 text-white font-bold mt-12 flex items-center space-x-3">
            <span>Why NFT Tickets ?</span>
          </button>
        </a>
      </div>

      <img
        src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s"
        alt=""
        class="w-1/2 mt-12 md:absolute md:mt-0 right-5 -z-1"
      />
    </div>
  );
};

export default Header;
