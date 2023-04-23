import React, { useState, useRef, useCallback, useEffect } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Organize from "./components/Organize";
import TicketListing from "./components/TicketListing";
import Home from "./components/Home";
import Instructions from "./components/Instructions";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/instructions" element={<Instructions />}></Route>
      <Route path="/ticketlisting" element={<TicketListing />}></Route>
      <Route path="/createevent" element={<Organize />}></Route>
    </Routes>
  );
};

export default App;
