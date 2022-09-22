// DO NOT API KEY TO SHARE ANYONE AND SET/SHARE JS FILE
const API_KEY = `90de05e839170de3183745051904b89b`

const loadTempature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTempature(data));

}

const displayTempature = data => {
    // const tempareture = document.getElementById('tempature')
    // // tempareture.innerText = data.main.temp;


    setInnerTextById('tempature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main)
    // console.log(data.weather[0].main);

}

const setInnerTextById = (id, text) => {
    const tempareture = document.getElementById(id)
    tempareture.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    // set city
    document.getElementById('city').innerText = city;

    loadTempature(city);
})

loadTempature('dhaka');