import React from "react";
import lol from "../../images/nft-ticket.jpg";

function Ticket(props) {
  return (
    <div className="container flex-col mx-100  text-center items-center justify-center border w-1/4 relative h-fit ml-1/8 border-solid">
      <img src={lol} className="h-300"></img>
      <p className="font-bold">Event name</p>
      <p>Price</p>
      <button className="bg-red-bg-btn w-full p-3 text-white font-bold hover:bg-red-500">
        View Event
      </button>
    </div>
  );
}

export default Ticket;
