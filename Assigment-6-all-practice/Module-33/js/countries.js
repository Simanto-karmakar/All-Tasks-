const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => detailsCountries(data))
}

const detailsCountries = countries => {
    const countriesContainer = document.getElementById('countries-container')
    countries.forEach(country => {
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        // console.log(country)
        countryDiv.innerHTML = `
        <h3>Name:-${country.name.common}</h3>
        <p>Capital:- ${country.capital ? country.capital[0] : 'No Capital'}</p>
        <p>Population:- ${country.population}</p>
        <p>Region:- ${country.region}</p>
        <p>independent:- ${country.independent}</p>
        <button onclick="loadCountryDetail('${country.cca2}')"> Details </button>

        `;
        countriesContainer.appendChild(countryDiv)
    })
}

const loadCountryDetail = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country detail', code)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    console.log(country)
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h2>Name:-${country.name.common}</h2>
    <img src="${country.flags.png}"
    <p>Region:- ${country.region}</p>
    `;
}

loadCountries();