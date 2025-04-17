import React, { use, useState } from "react";
import Country from "../country/country";
import "./countries.css";

export default function Countries({ countriesPromise }) {
  const [knownCountry, setKnownCountry] = useState([]);

  const countriesData = use(countriesPromise);

  const handleVisitedCountries = (newCountry) => {
    setKnownCountry([...knownCountry, newCountry]);
  };

  return (
    <>
      <h1>Total Countries: {countriesData.length}</h1>
      <h2>Number of country you have learned about: {knownCountry.length}</h2>
      {knownCountry.map((know) => (
        <li>{know.name.common}</li>
      ))}
      <div className="country-container">
        {countriesData.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </>
  );
}


