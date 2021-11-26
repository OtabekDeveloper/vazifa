import React from "react";
import "./Mini.css";
function Mini() {
  return (
    <>
      <div className="conatiner">
        <div className="card cardBIr">
        <img className="imgIS" src={Samandar} alt="" />
          <h2 className="titleIS">
            <b>Samandar Sharipov</b>
          </h2>
          <p className="malumotIs">
            Samandar Sharipov 2002-ylil 3-fevralda Andijon viloyatida tug'ilgan.
            Hozirda Farg'ona viloyatida 3-kurs talabasiman.
            Bu vazifa vasheee daxshat.
          </p>
          <button className="buttonIS">NiMA bu</button>
        </div>

        <div className="card">
          <img className="imgIS" src={Samandar} alt="" />
          <h2 className="titleIS">
            <b>Samandar Sharipov</b>
          </h2>
          <p className="malumotIs">
            Samandar Sharipov 2002-ylil 3-fevralda Andijon viloyatida tug'ilgan.
            Hozirda Farg'ona viloyatida 3-kurs talabasiman.
            Bu vazifa vasheee daxshat.
          </p>
          <button className="buttonIS">Nima Bu</button>
        </div>

        <div className="card">
          <img className="imgIS" src={Samandar} alt="" />
          <h2 className="titleIS">
            <b>Samandar Sharipov</b>
          </h2>
          <p className="malumotIs">
            Samandar Sharipov 2002-ylil 3-fevralda Andijon viloyatida tug'ilgan.
            Hozirda Farg'ona viloyatida 3-kurs talabasiman.
            Bu vazifa vasheee daxshat.
          </p>
          <button className="buttonIS">Nima BU</button>
        </div>
      </div>
    </>
  );
}

export default Mini;
