import React from "react";
import Navbar from "./Navbar";
import TicketImage from "./images/nft-ticket.jpg";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex lg:ml-20 justify-center max-w-xl md:my-35 mt-11 pt-5">
        <div className="mt-19 pt-20">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
            NFTTickets
          </h1>
          <p className="mt-3 section-paragraph text-lg">
            Much more than pretty collectibles!
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <a href="" target="_blank">
              <button className="px-8 py-4 bg-red-bg-btn hover:bg-red-500 text-white font-bold mt-12 flex items-center space-x-3">
                <span>Why NFT Tickets ?</span>
              </button>
            </a>
          </div>
        </div>

        <img
          src={TicketImage}
          alt="ticket"
          className="w-1/2 mt-12 md:absolute md:mt-0 right-5 -z-1 border-10"
        />
      </div>
    </>
  );
};

export default Home;
