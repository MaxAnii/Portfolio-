import React from "react";
import ProgessBar from "../components/ProgessBar";
import Loading from "../components/Loading";

const LandingPage = () => {
  return (
    <div className="main-container">
      {/* <div className="progess">
        <h3 className="text-green-600 text-center text-9xl">Loading</h3>

        <div className="m-[5px]">
          <ProgessBar></ProgessBar>
        </div>
      </div> */}
      <Loading></Loading>
    </div>
  );
};

export default LandingPage;
