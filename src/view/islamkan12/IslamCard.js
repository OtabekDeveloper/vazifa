import React from "react";
import "./IslamCard.css";
import Islamkhan12 from "./IslamImg/Islamkhan12.jpg";
function IslamCard() {
  return (
    <>
      <div className="container">

        <div className="card cardBIr">
          <img className="imgIS" src={Islamkhan12} alt="" />
          <h2 className="titleIS">
            <b>Islom Inomjonov</b>
          </h2>
          <p className="malumotIs">
            Islom Inomjonov 2001-yil 12-iyulda tug'ilgan xozir 20 yoshda. Web
            dasturlash yonalishda oqydi. Git hubda Otabek aka bergan vazifani
            qilib boldi. Cardla udar 
          </p>
          <button className="buttonIS">Korshamza</button>
        </div>

        <div className="card">
          <img className="imgIS" src={Islamkhan12} alt="" />
          <h2 className="titleIS">
            <b>Islom Inomjonov</b>
          </h2>
          <p className="malumotIs">
            Islom Inomjonov 2001-yil 12-iyulda tug'ilgan xozir 20 yoshda. Web
            dasturlash yonalishda oqydi. Git hubda Otabek aka bergan vazifani
            qilib boldi. Cardla udar 
          </p>
          <button className="buttonIS">Korshamza</button>
        </div>

        <div className="card">
          <img className="imgIS" src={Islamkhan12} alt="" />
          <h2 className="titleIS">
            <b>Islom Inomjonov</b>
          </h2>
          <p className="malumotIs">
            Islom Inomjonov 2001-yil 12-iyulda tug'ilgan xozir 20 yoshda. Web
            dasturlash yonalishda oqydi. Git hubda Otabek aka bergan vazifani
            qilib boldi. Cardla udar 
          </p>
          <button className="buttonIS">Korshamza</button>
        </div>

      </div>
    </>
  );
}

export default IslamCard;
