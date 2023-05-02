import React from "react";
import TicketCard from "./TicketCard";
import Navbar from "./Navbar";
function TicketListing() {
  return (
    <>
      <Navbar />
      <div className="container grid grid-cols-3 justify-center items-center">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </>
  );
}

export default TicketListing;
