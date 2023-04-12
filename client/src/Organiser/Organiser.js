import React from "react";
import Home from "./Home/Home";
import Navbar from "./Home/Navbar";
import Instructions from "./Home/Instructions";
import TicketListing from "./Tickets/TicketListing";

const Organiser = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default Organiser;
