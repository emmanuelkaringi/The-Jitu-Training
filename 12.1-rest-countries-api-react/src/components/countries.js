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
                <Link to={`/${name.common}`} key={`${name.common}`}>
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
      ) : (
        <section className="countries">
          {Array.isArray(countries) ? (
            countries.map((country, index) => {
              const { ccn3, name, flags, population, region, capital } = country;

              return (
                <Link to={`/${name}`} key={`${name.common}`}>
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
