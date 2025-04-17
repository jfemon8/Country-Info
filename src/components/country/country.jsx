import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    visited || handleVisitedCountries(country);
  }

  return (
    <>
      <div className={`card-container ${visited && 'country-visited'}`}>
        <div className={"img-container"}>
          <img src={country.flags.png} alt="Flag" />
        </div>
        <div>
          <h3>Name: {country.name.common}</h3>
          <p>Independent: {country.independent ? "Yes" : "No"}</p>
          <p>Member of UN: {country.unMember ? "Yes" : "No"}</p>
          <p>Capital: {country.capital}</p>
          <p>Region: {country.region}</p>
          <p>Area: {country.area} Square Kilometer</p>
          <p>Population: {country.population}</p>
          <p>Car Side: {country.car.side}</p>
          <p>Timezones: {country.timezones.join(", ")}</p>
          <p>Continents: {country.continents.join(", ")}</p>
          <p>Start of Week: {country.startOfWeek}</p>
        </div>
        <div className="button-container">
          <a href={country.maps.googleMaps} target="_blank">
            <button>View on Google Map</button>
          </a>
          <button onClick={handleVisited}>{visited ? 'Completed' : 'To Learn'}</button>
        </div>
      </div>
    </>
  );
};

export default Country;
