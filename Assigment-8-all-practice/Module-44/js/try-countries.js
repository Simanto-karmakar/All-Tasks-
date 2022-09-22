const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => getCountries(data));
}

const getCountries = countries => {
    console.log(countries[0]);
    const getCountriesHtml = countries.map(country => getCountryHtml(country))
    // console.log(getCountriesHtml[0]);
    const container = document.getElementById('countries')
    container.innerHTML = getCountriesHtml.join(' ');

}

const getCountryHtml = country => {
    return `
    <div class="countries">
    <h2> Name:${country.name.common}</h2>
    <p>Capital:${country.capital} </P>
    <p>population:${country.population} </P>
    </div>
    `
}

loadCountries()