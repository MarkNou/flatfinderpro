import React from "react";
import heroLogo from "../assets/heroLogo.png";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-tr from-gray-500 to-blue-200 min-h-screen flex py-5 justify-center">
        <h1 className="mt-8 text-7xl flex justify-center  text-white italic font-sans ">
          {" "}
          <img
            src={heroLogo}
            className="mr-3 h-12 sm:h-16"
            alt="FlatFinderPro Logo"
          />{" "}
          Welcome to FlatFinderPro
        </h1>
      </div> 
    </>
  );
};

export default Home;
