import React from "react";
import Ticket from "./Ticket";

function TicketListing() {
  return (
    <div className="container grid grid-cols-3 items-center justify-center">
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
