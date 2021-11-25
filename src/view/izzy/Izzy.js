import React from "react";
import "./Izzy.css";
import izzy from "./1.jpg";
function Izzy() {
  return (
    <div>
      <div className="izzyCard">
        <img className="izzyImg" src={izzy} alt="izzy" />
        <h1 className="izzyName">
          Dilmurodov Izzatbek Muzaffar o'gli 2002-yil 21-iyunda tug'ilgan.
          Xozirda Web Dasturlash bo'yicha Technobeck Programming Centerda middle
          darajasida ishlayman
        </h1>
      </div>
    </div>
  );
}

export default Izzy;
