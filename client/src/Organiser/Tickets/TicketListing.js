import React from "react";
import Ticket from "./Ticket";

function TicketListing() {
  return (
    <div className="container grid grid-cols-4  justify-center items-center">
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
}

export default TicketListing;
