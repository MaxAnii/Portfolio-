import { React, useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Loader from "./components/Loader";
function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    AOS.init();
    setTimeout(() => setLoader(false), 2000);
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={loader ? <Loader></Loader> : <Home></Home>}
      ></Route>
    </Routes>
  );
}
export default App;
