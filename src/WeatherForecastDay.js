import React from "react";

export default function WeatherForecastDay(props) {
  function weatherIcon() {
    let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return icon;
  }
  function maxTemperature() {
    let temperature = `${Math.round(props.data.temp.max)}°`;
    return temperature;
  }
  function minTemperature() {
    let temperature = `${Math.round(props.data.temp.min)}°`;
    return temperature;
  }
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = days[date.getDay()];
    return day;
  }
  return (
    <div className="WeatherForecastDay">
      <div className="ForecastDay">{day()}</div>
      <img src={weatherIcon()} alt="weather icon" />
      <div className="WeatherForecastTemp">
        <span className="WeatherForecastTempMax">{maxTemperature()} </span>|
        <span className="WeatherForecastTempMin"> {minTemperature()} </span>
      </div>{" "}
    </div>
  );
}
