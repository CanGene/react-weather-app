import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-sm-3 dailyWeather">
          <div className="WeatherForecastDay">Sunday</div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weather icon"
          />
          <div className="WeatherForecastTemp">
            <span className="WeatherForecastTempMax">28°C </span>|
            <span className="WeatherForecastTempMin"> 17°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
