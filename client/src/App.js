import React, { useState, useRef, useCallback, useEffect } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Organize from "./components/Organize";
import TicketListing from "./components/TicketListing";
import Home from "./components/Home";
import Instructions from "./components/Instructions";
import UserGallery from "./components/UserGallery";
import Ticket from "./components/Ticket";
import BookTicket from "./components/BookTicket";
function App() {
  if (!window.ethereum) {
    alert("Please install metamask!!");
    return;
  }
  const ethers = require("ethers");
  //After adding your Hardhat network to your metamask, this code will get providers and signers
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // MetaMask requires requesting permission to connect users accounts
  provider
    .send("eth_requestAccounts", [])
    .then((accounts) => {
      if (accounts.length > 0) console.log(accounts[0]);
    })
    .catch((e) => console.log(e));

  const signer = provider.getSigner();
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/instructions" element={<Instructions />}></Route>
      <Route path="/ticketlisting" element={<TicketListing />}></Route>
      <Route path="/createevent" element={<Organize />}></Route>
      <Route path="/viewusertickets" element={<UserGallery />}></Route>
      <Route path="/ticket" element={<Ticket />}></Route>
      <Route path="/bookticket" element={<BookTicket />}></Route>
    </Routes>
  );
}

export default App;
