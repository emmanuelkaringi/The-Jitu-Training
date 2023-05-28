import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import "../country.css"

const Country = () => {
  const [country, setCountry] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountryData();
  }, [name]);

  useEffect(() => {
    document.title = `Countries | ${name}`;
  }, [name]);

  return (
    <>
      <section className="country">
        <Link to="/" className="btn btn-light">
          <i className="fas fa-arrow-left"></i> Back Home
        </Link>
        {country.map((item) => {

          return (
            <article key={item.population}>
              <div className="country-inner">
                <div className="flag">
                  <img src={item.flags.svg} alt={item.name.common} />
                </div>

                <div className="country-details">
                  <div>
                    <h2>{item.name.official}</h2>
                    <h5>
                      Native Name: <span>{item.name.nativeName}</span>
                    </h5>
                    <h5>
                      Population: <span>{item.population.toLocaleString()}</span>
                    </h5>
                    <h5>
                      Region: <span>{item.region}</span>
                    </h5>
                    <h5>
                      Sub Region: <span>{item.subregion}</span>
                    </h5>
                    <h5>
                      Capital: <span>{item.capital[0]}</span>{" "}
                    </h5>
                  </div>

                  <div>
                    <h5>
                      Currencies: <span>{item.currencies[0].name}</span>
                    </h5>
                    <h5>
                      Languages: <span>{item.languages[0].name}</span>
                    </h5>
                  </div>
                </div>
              </div>

              <div>
                <h3>Border Countries: </h3>
                <div className="borders">
                  {item.borders.map((border) => {
                    return (
                      <ul key={border}>
                        <li>{border}</li>
                      </ul>
                    )
                  })}
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Country