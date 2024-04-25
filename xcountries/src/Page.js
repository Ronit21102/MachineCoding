import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Page = () => {
  const [countryFlag, setCountryFlag] = useState([]);
  useEffect(() => {



    const countries = async () => {
        try {
            const data = await fetch("https://restcountries.com/v3.1/all");
            const json = await data.json();
            console.log(json);
      
          //   for (let i = countryFlag.length; i < Math.min(20, json.length); i++) {
          //     setCountryFlag((flags) => [...flags, countryFlag[i]]);
          //   }
      
          setCountryFlag(json)
        } catch (error) {
            console.error("Error fetching data: ",error)
        }
   
    };

    countries();
  }, []);
  return (


    <>
      {countryFlag.map((val) => (
        <CountryCard key={val?.altSpellings[1]} val={val}/>
      ))}
    </>
  );
};

export default Page;
