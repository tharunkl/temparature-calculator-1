function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}
function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}
function convertTemperature() {
    let tempValue = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let resultText = "";

    if (isNaN(tempValue)) {
        resultText = "Please enter a valid number!";
    } else {
        switch (unit) {
            case "Celsius":
                resultText = `${tempValue}°C = ${celsiusToFahrenheit(tempValue).toFixed(2)}°F = ${celsiusToKelvin(tempValue).toFixed(2)} K`;
                break;
            case "Fahrenheit":
                resultText = `${tempValue}°F = ${fahrenheitToCelsius(tempValue).toFixed(2)}°C = ${fahrenheitToKelvin(tempValue).toFixed(2)} K`;
                break;
            case "Kelvin":
                resultText = `${tempValue} K = ${kelvinToCelsius(tempValue).toFixed(2)}°C = ${kelvinToFahrenheit(tempValue).toFixed(2)}°F`;
                break;
            default:
                resultText = "Please select a valid unit!";
        }
    }
    document.getElementById("result").innerHTML = resultText;
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('convert-btn').addEventListener('click', convertTemperature);
});
