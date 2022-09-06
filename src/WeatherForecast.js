import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(forecast);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-sm-3 dailyWeather">
            <div className="WeatherForecastDay">{forecast[0].dt}</div>
            <img
              src="https://openweathermap.org/img/wn/01d@2x.png"
              alt="weather icon"
            />
            <div className="WeatherForecastTemp">
              <span className="WeatherForecastTempMax">
                {forecast[0].temp.max}°
              </span>
              |
              <span className="WeatherForecastTempMin">
                {" "}
                {forecast[0].temp.min}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0a38a4c0fc331c733185ab6f04395470";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
