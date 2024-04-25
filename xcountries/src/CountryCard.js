import React from "react";
import "./Country.css";
const CountryCard = ({ val }) => {
  return (
    <>
      <div className="card-style">
        <div className="card">
          <img className="flag" src={val?.flags?.png} alt={val?.flags?.alt} />
          <p className="name">{val?.altSpellings[1]}</p>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
