import React from "react";
import Ticket from "./Ticket";
import Navbar from "./Navbar";
function TicketListing() {
  return (
    <>
      <Navbar />
      <div className="container grid grid-cols-3 justify-center items-center">
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </>
  );
}

export default TicketListing;
