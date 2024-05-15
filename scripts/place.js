
function calculateWindChill(temperature, windSpeed) {

    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
}

function initializeWindChill() {

    const temperatureData = 32;
    const windSpeedData = 10;

    document.getElementById('weather-temperature').textContent = temperatureData;
    document.getElementById('weather-wind-speed').textContent = windSpeedData;

    const windChillData = calculateWindChill(temperatureData, windSpeedData);

    document.getElementById('weather-wind-chill').textContent = windChillData.toFixed(2) + "°C";

    const temperatureWeather = 32;
    const windSpeedWeather = 10;

    document.getElementById('weather-temperature').textContent = temperatureWeather;
    document.getElementById('weather-wind-speed').textContent = windSpeedWeather;

    const windChillWeather = calculateWindChill(temperatureWeather, windSpeedWeather);

    document.getElementById('weather-wind-chill').textContent = windChillWeather.toFixed(2) + "°C";
}

window.onload = initializeWindChill;

let currentYear = new Date().getFullYear();
let lastModifiedDate = document.lastModified;

document.querySelector('footer p').innerHTML = `&copy; ${currentYear} | Alberto Becerril | Mexico City <br><br> Last modified: ${lastModifiedDate}`;
