import React, { useEffect } from "react";

const Filter = ({
  searchInput,
  setSearchInput,
  setFiltered,
  setCountries,
  countries,
}) => {
  const regions = [
    {
      name: "All",
      desc: "All",
    },
    {
      name: "Africa",
      desc: "Africa",
    },
    {
      name: "Americas",
      desc: "Americas",
    },
    {
      name: "Asia",
      desc: "Asia",
    },
    {
      name: "Europe",
      desc: "Europe",
    },
    {
      name: "Oceania",
      desc: "Oceania",
    },
  ];

  // Prevent page reload when submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Search countries
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);

    if (searchValue) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFiltered(filteredCountries);
    } else {
      setFiltered(countries);
    }
  };

  // Filter by region
  const filterRegions = async (region) => {
    if (region === "All") {
      setCountries(countries);
    } else {
      const url = `https://restcountries.com/v3.1/region/${region}`;
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
    }
  };

  useEffect(() => {
    filterRegions("All");
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <form className="form" id="form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search Country"
          value={searchInput}
          onChange={(e) => searchCountries(e.target.value)}
        />

        <div className="select">
          <select
            name="select"
            id="select"
            onChange={(e) => filterRegions(e.target.value)}
          >
            {regions.map((region, index) => (
              <option key={index} value={region.desc}>
                {region.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filter;
