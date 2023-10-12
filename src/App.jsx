import { React, useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      {/* <Route path="/home" element={}></Route> */}
    </Routes>
  );
}
export default App;
