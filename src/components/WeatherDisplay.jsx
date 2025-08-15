import React from "react";
import "../App.css"
function WeatherDisplay({ data }) {
  if (!data) return null;

  const {
    name,
    main: { temp, humidity },
    weather,
    wind: { speed },
    sys: { country },
  } = data;

  return (
    <div className="weather-display">
      <h3>{name}, {country}</h3>
      <p>{weather[0].main} — {weather[0].description}</p>
      <p>🌡️ Temp: {temp} °C</p>
      <p>💧 Humidity: {humidity}%</p>
      <p>💨 Wind: {speed} m/s</p>
    </div>
  );
}

export default WeatherDisplay;

