import React from "react";
import Banner from "../Banner/Banner";
import Inventorys from "../Inventorys/Inventorys";
import RecordCounter from "../RecordCounter/RecordCounter";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventorys></Inventorys>
      <RecordCounter></RecordCounter>
    </div>
  );
};

export default Home;
