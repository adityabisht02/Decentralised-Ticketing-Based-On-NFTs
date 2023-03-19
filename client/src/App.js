import React, { useState, useRef, useCallback, useEffect } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import User from "./User/User";
import Organiser from "./Organiser/Organiser";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Organiser />}></Route>
      <Route path="/user" element={<User />}></Route>
    </Routes>
  );
};

export default App;
