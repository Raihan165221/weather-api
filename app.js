const loadApi = () => {
    const api_Key = '42cdaa65d368e2294dab689fe857ef98';
    const searchField = document.getElementById('search');
    const searchText = searchField.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${api_Key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data));
    searchField.value = '';
}

const displayWeather = (data) => {
    const container = document.getElementById('container');
    container.classList.add('container');
    container.innerHTML = `
        <h1>Name: ${data.name}</h1>
        <p>Lat: ${data.coord.lat}</p>
        <p>Lat: ${data.coord.lon}</p>
        <i>Temp: ${data.main.temp}</i>
        <h3>Weather: ${data.weather[0].main}</h3>
    `;
}

