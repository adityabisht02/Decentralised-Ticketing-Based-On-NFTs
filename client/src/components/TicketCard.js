import React from "react";
import lol from "./images/nft-ticket.jpg";
import { Link } from "react-router-dom";
function TicketCard(props) {
  return (
    <div className="container flex-col mx-20  my-10 text-center items-center justify-center border w-3/4 relative h-fit ml-1/4 border-solid">
      <img src={lol} alt="ticket" className=""></img>
      <p className="font-bold">Event name</p>
      <p>Price</p>
      <Link to="/bookticket">
        <button className="bg-red-bg-btn w-full p-3 text-white font-bold hover:bg-red-500">
          Book Tickets
        </button>
      </Link>
    </div>
  );
}

export default TicketCard;
