import React from "react";
// import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// const provider = new ethers.providers.Web3Provider(window.ethereum);
// async function getAccounts() {
//   try {
//     await provider.send("eth_requestAccounts", []);
//     const signer = provider.getSigner();
//   } catch (e) {
//     alert("Sign in to metamask!");
//   }
// }

function Navbar() {
  const [account, setAccount] = useState("");

  return (
    <div className="py-6">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="text-lg font-bold">NFTTickets</div>
        <div className="hidden md:flex space-x-12 items-center">
          <Link to="/" className=" hover:text-red-bg-btn font-bold">
            Home
          </Link>
          <Link to="/instructions" className=" hover:text-red-bg-btn font-bold">
            Instructions
          </Link>
          <div className="dropdown">
            <Link
              to="/ticketlisting"
              className="hover:text-red-bg-btn font-bold dropbtn"
            >
              View Events
            </Link>
            <div className="dropdown-content">
              <Link to="/user">Link1</Link>
              <a href="#">Link2</a>
              <a href="#">Link3</a>
              <a href="#">Link4</a>
              <a href="#">Link5</a>
            </div>
          </div>
          <Link to="/createevent" className="hover:text-red-bg-btn font-bold">
            Organize
          </Link>
          <Link to="/viewusertickets" className="">
            <button className="px-6 py-2 bg-red-bg-btn hover:bg-red-500 font-bold text-white">
              My gallery
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
