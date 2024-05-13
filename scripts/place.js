document.addEventListener("DOMContentLoaded", function () {
    // Get current year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Get last modified date of the document
    const lastModifiedDate = document.lastModified;
    document.querySelector('footer p').innerHTML = `&copy; ${currentYear} | Alberto Becerril | Mexico City <br><br> Last modified: ${lastModifiedDate}`;

    // Static inputs for temperature and wind speed
    const temperature = parseFloat(document.getElementById('temperature').textContent); // Celsius
    const windSpeed = parseFloat(document.getElementById('wind-speed').textContent); // km/h

    // Call function to calculate wind chill and display it
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = windChill !== 'N/A' ? windChill.toFixed(2) + '°C' : windChill;
});

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) { // Metric conditions
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    } else if ((temperature <= 50) && (windSpeed > 3)) { // Imperial conditions
        return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    } else {
        return 'N/A';
    }
}
