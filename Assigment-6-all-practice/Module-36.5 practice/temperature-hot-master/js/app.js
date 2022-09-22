const API_KEY = `90de05e839170de3183745051904b89b`;

const loadWeather = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
}

const displayWeather = data => {
    setInnerTextById('tempareture', data.main.temp)
    setInnerTextById('condition', data.weather[0].main)
    // console.log(data.weather[0].main);
}

const setInnerTextById = (id, text) => {
    const tempareture = document.getElementById(id)
    tempareture.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field')
    const city = searchField.value;
    // set city
    document.getElementById('city').innerText = city;

    loadWeather(city);
})

// loadWeather('dhaka');