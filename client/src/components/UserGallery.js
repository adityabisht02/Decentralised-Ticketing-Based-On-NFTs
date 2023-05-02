import React from "react";
import UserTicketCard from "./UserTicketCard";
import Navbar from "./Navbar";
function UserGallery() {
  return (
    <>
      <Navbar />
      <div className="container grid grid-cols-3 justify-center items-center">
        <UserTicketCard />
        <UserTicketCard />
        <UserTicketCard />
        <UserTicketCard />
      </div>
    </>
  );
}

export default UserGallery;
