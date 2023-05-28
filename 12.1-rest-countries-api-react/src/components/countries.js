import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./filter";

const url = 'https://restcountries.com/v3.1/all';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const countriesData = await response.json();
          setCountries(countriesData);
          console.log(countries)
          setIsLoading(false);
        } else {
          throw new Error("Failed to fetch countries");
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <Filter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setFiltered={setFiltered}
        setCountries={setCountries}
        countries={countries}
      />
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : searchInput.length > 1 ? (
        <section className="countries">
          {Array.isArray(filtered) ? (
            filtered.map((country, index) => {
              const { ccn3, name, flags, population, region, capital } = country;

              return (
                <Link to={`/countries/${name}`} key={`${ccn3}-${index}`}>
                  <article>
                    <div className="flag">
                      <img src={flags?.svg} alt={name?.common} />
                    </div>
                    <div className="details">
                      <h4 className="country-name">
                        Name: <span>{name?.common}</span>
                      </h4>
                      <h4>
                        Population: <span>{population?.toLocaleString()}</span>
                      </h4>
                      <h4>
                        Region: <span>{region}</span>
                      </h4>
                      <h4>
                        Capital: <span>{capital}</span>
                      </h4>
                    </div>
                  </article>
                </Link>
              );
            })
          ) : (
            <p>No countries found.</p>
          )}
        </section>
      ) : (
        <section className="countries">
          {Array.isArray(countries) ? (
            countries.map((country, index) => {
              const { ccn3, name, flags, population, region, capital } = country;

              return (
                <Link to={`/countries/${name}`} key={`${ccn3}-${index}`}>
                  <article>
                    <div className="flag">
                      <img src={flags?.svg} alt={name?.common} />
                    </div>
                    <div className="details">
                      <h3 className="country-name">
                        <span>{name?.common}</span>
                      </h3>
                      <p>
                        <span> Population: </span>{population?.toLocaleString()}
                      </p>
                      <p>
                        <span>Region: </span>{region}
                      </p>
                      <p>
                        <span>Capital: </span>{capital}
                      </p>
                    </div>
                  </article>
                </Link>
              );
            })
          ) : (
            <p>No countries found.</p>
          )}
        </section>
      )}
    </div>
  );
};

export default Countries;





// import React, {useState, useEffect} from 'react'

// const url = 'https://restcountries.com/v3.1/all'

// const Countries = () => {
//     const [countries, setCountries] = useState([])

//     const fetchCountryData = async() => {
//         const response = await fetch(url)
//         const countries = await response.json()
//         setCountries(countries)
//         console.log(countries)
//     }

//     useEffect(() => {
//         fetchCountryData()
//     }, [])

  
  
//     return (
//         <section className="countries">
//             {countries.map((country, index) => {
//                 const { ccn3, name, population, region, capital, flags } = country

//                 return (
//                 <article key={`${ccn3}-${index}`}>
//                     <div>
//                         <div className="flag">
//                         <img src={flags.svg} alt="" />
//                         </div>
//                         <div className="details">
//                             <div className="country-name">
//                             <h3><span>{name.common}</span></h3>
//                             </div>
//                         <h4>Population: <span>{population}</span></h4>
//                         <h4>Region: <span>{region}</span></h4>
//                         <h4>Capital: <span>{capital}</span></h4>
//                         </div>
//                     </div>
//                 </article>
//                 )
//             })}
//         </section>
//     )
// }

// export default Countries