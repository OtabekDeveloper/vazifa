import React from "react";
import "./Abdulatif.css";
import abdulatif from "./IMG_20201222_115942_831.JPG";
function Abdulatif() {
  return (
    <div>
      <div className="abdulatifCard">
        <img className="abdulatifImg" src={abdulatif} alt="abdulatif" />
        <h1 className="abdulatifName">
          Ismoilov Abdulatif Hamdamjon o'gli 2005-yil 27-martda tug'ilgan.
          <p>Web Dasturchi</p>
          <p>Technobeck jamoasi a'zosi</p>
        </h1>
      </div>
    </div>
  );
}

export default Abdulatif;
