import React from "react";
import landingPage from  "../assets/landingPage.svg"

const Home = () => {
  return (
    <>
   <div
      className="bg-cover bg-center  h-screen w-screen"
      style={{ backgroundImage: `url(${landingPage})` }}
    >
      
    </div> 
    </>
  );
};

export default Home;
