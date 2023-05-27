const countriesElem = document.querySelector(".countries")
const dropdown = document.querySelector(".dropdown")
const listElem = document.querySelector(".list")
const region = document.querySelectorAll(".region")
const regionName = document.getElementsByClassName("regionName")
const countryName = document.getElementsByClassName("countryName")
const search = document.querySelector(".search")
const toggle = document.querySelector(".toggle")
const moon = document.querySelector(".moon")
const countryModal = document.querySelector(".countryModal")


async function getCountry() {
    const url = await fetch("https://restcountries.com/v3.1/all");
    const res = await url.json();
    res.forEach(element => {
        showCountry(element)
    });
}

getCountry()

function showCountry(data) {
    const country = document.createElement("div")
    country.classList.add("country")
    country.innerHTML = `<div class="country-img">
        <img src="${data.flags.svg}" alt="">
    </div>
    <div class="country-info">
        <h5 class = "countryName">${data.name.official}</h5>
        <p><strong>Population:</strong ${data.population}</p>
        <p class = "regionName"><strong>Region:</strong> ${data.region}</p>
        <p><strong>Capital:</strong> ${data.capital}</p>
    </div>`

    countriesElem.appendChild(country)
    country.addEventListener("click", () => {
        showCountryDetails(data)
    })
}

dropdown.addEventListener("click", ()=>{
    listElem.classList.toggle("showDropDown")
})

region.forEach(element => {
    element.addEventListener("click", ()=> {
        Array.from(regionName).forEach(elem => {
            if(elem.innerText.includes(element.innerText)|| element.innerText== "All") {
                elem.parentElement.parentElement.style.display="grid"
            }else {
                elem.parentElement.parentElement.style.display="none"   
            }
        });
    })
})

search.addEventListener("input", () => {
    Array.from(countryName).forEach(elem => {
        if(elem.innerText.toLowerCase().includes(search.value)) {
            elem.parentElement.parentElement.style.display="grid"
        }else {
            elem.parentElement.parentElement.style.display="none"   
        }
    });
})

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    moon.classList.toggle("fas")
})

function showCountryDetails(data) {
    countryModal.classList.toggle("show")
    countryModal.innerHTML = `<button class="back">Back</button>
    <div class="modal">
        <div class="leftModal">
            <img src="${data.flags.svg}" alt="">
        </div>
        <div class="rightModal">
            <h1>${data.name.official}</h1>
            <div class="modalInfo">
                <div class="innerLeft inner">
                    <p><strong>Native Name:</strong> ${data.name.common}</p>
                    <p><strong>Population:</strong ${data.population}</p>
                    <p class="regionName"><strong>Region:</strong> ${data.region}</p>
                    <p><strong>Sub Region:</strong> ${data.subregion}</p>
                    <p><strong>Capital:</strong> ${data.capital}</p>
                </div>
                <div class="innerRight inner">
                <p><strong>Currencies:</strong> ${Object.values(data.currencies).map(currency => currency.name).join(', ')}</p>
                <p><strong>Currencies Symbol:</strong> ${Object.values(data.currencies).map(currency => currency.symbol).join(', ')}</p>
                    <p><strong>Languages:</strong> ${Object.keys(data.languages).map(key => data.languages[key]).join(', ')}</p>
                </div>
            </div>
        </div>
    </div>`

    const back = document.querySelector(".back")

    back.addEventListener("click", ()=> {
        countryModal.classList.toggle("show")
    })
}
