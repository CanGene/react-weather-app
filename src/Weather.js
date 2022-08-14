import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      uv: response.data.main.uvi,
      feelsLike: Math.round(response.data.main.feels_like),
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      country: response.data.sys.country,
    });
  }

  function search() {
    const apiKey = "0a38a4c0fc331c733185ab6f04395470";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-10">
              <input
                type="search"
                placeholder="Enter your city!"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-sm-2">
              <input type="submit" value="Search" className="btn btn-light" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
