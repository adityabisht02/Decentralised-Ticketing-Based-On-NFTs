import React from "react";
import TicketImage from "../../images/nft-ticket.jpg";
const Header = () => {
  return (
    <div className="flex lg:ml-20 justify-center max-w-xl md:my-35 mt-11 pt-5">
      <div className="mt-19 pt-20">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
          NFTTickets
        </h1>
        <p class="mt-3 section-paragraph text-lg">
          Much more than pretty collectibles!
        </p>
        <div class="w-full flex justify-center md:justify-start">
          <a href="" target="_blank">
            <button class="px-8 py-4 bg-red-bg-btn hover:bg-red-500 text-white font-bold mt-12 flex items-center space-x-3">
              <span>Why NFT Tickets ?</span>
            </button>
          </a>
        </div>
      </div>

      <img
        src={TicketImage}
        alt=""
        className="w-1/2 mt-12 md:absolute md:mt-0 right-5 -z-1 border-10"
      />
    </div>
  );
};

export default Header;
