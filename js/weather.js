const API_KEY = "22f99c1d8b5ded225f3dcc1e8094ac40";

function onGeoSuccess(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        cityContainer.innerText = data.name;
    });
}

function onGeoError() {
    alert("Can't find you.No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);