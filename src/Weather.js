import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      uv: response.data.main.uvi,
      feelsLike: response.data.main.feels_like,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-sm-10">
              <input
                type="search"
                placeholder="Enter your city!"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-sm-2">
              <input type="submit" value="Search" className="btn btn-light" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-sm-4">
            <h2>{weatherData.temperature}</h2>
          </div>
          <div className="col-sm-4">
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="now-icon"
            />
          </div>
          <div className="col-sm-4 location">
            <h1 className="text-capitalize">Coimbatore</h1>
            <h3>India</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <h4>°C/F</h4>
          </div>

          <div className="col-sm-4">
            <h5 className="text-capitalize">{weatherData.description}</h5>
          </div>
          <div className="col-sm-4">
            <div>
              <FormattedDate date={weatherData.date} />
            </div>
          </div>
        </div>
        <div className="row today-info">
          <div className="col-sm-6">Feels Like: {weatherData.feelsLike} °C</div>
          <div className="col-sm-6">Humidity: {weatherData.humidity}%</div>
          <div className="col-sm-6">Wind: {weatherData.wind} m/s</div>
          <div className="col-sm-6">UVI: {weatherData.uv}</div>
        </div>
        <div className="row daily">
          <div className="col-sm-2">
            <div>12:00 PM</div>
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="future-icon"
            />
            <div>24</div>
          </div>
          <div className="col-sm-2">
            {" "}
            <div>12:00 PM</div>
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="future-icon"
            />
            <div>24</div>
          </div>
          <div className="col-sm-2">
            {" "}
            <div>12:00 PM</div>
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="future-icon"
            />
            <div>24</div>
          </div>
          <div className="col-sm-2">
            {" "}
            <div>12:00 PM</div>
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="future-icon"
            />
            <div>24</div>
          </div>
          <div className="col-sm-2">
            {" "}
            <div>12:00 PM</div>
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="future-icon"
            />
            <div>24</div>
          </div>
          <div className="col-sm-2">
            {" "}
            <div>12:00 PM</div>
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="future-icon"
            />
            <div>24</div>
          </div>
        </div>
        <div className="row weekly">
          <div className="col-sm-2">
            <div>Mon</div>
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="future-icon"
            />
            <div>
              24 <span>|</span>
              <span> 26</span>
            </div>
          </div>
          <div className="col-sm-2">
            <div>Mon</div>
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="future-icon"
            />
            <div>
              24 <span>|</span>
              <span> 26</span>
            </div>
          </div>
          <div className="col-sm-2">
            <div>Mon</div>
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="future-icon"
            />
            <div>
              24 <span>|</span>
              <span> 26</span>
            </div>
          </div>
          <div className="col-sm-2">
            <div>Mon</div>
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="future-icon"
            />
            <div>
              24 <span>|</span>
              <span> 26</span>
            </div>
          </div>
          <div className="col-sm-2">
            <div>Mon</div>
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="future-icon"
            />
            <div>
              24 <span>|</span>
              <span> 26</span>
            </div>
          </div>
          <div className="col-sm-2">
            <div>Mon</div>
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="weather icon"
              className="future-icon"
            />
            <div>
              24 <span>|</span>
              <span> 26</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0a38a4c0fc331c733185ab6f04395470";
    let city = "Chennai";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
