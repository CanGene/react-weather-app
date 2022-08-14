import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-now">
        <span className="temperature">{props.data.temperature}</span>
        <span className="units">°C/F</span>
        <img
          src={props.data.icon}
          alt={props.data.description}
          className="now-icon"
        />{" "}
      </div>
      <div className="description text-capitalize">
        {props.data.description}
      </div>

      <div className="row">
        <div className="col-sm">
          <div className="location">
            <span className="cityName text-capitalize">{props.data.city},</span>
            <span className="countryName"> {props.data.country}</span>
          </div>

          <div className="today-info">
            <div className="col-sm">Feels Like: {props.data.feelsLike}°C</div>
            <div className="col-sm">Humidity: {props.data.humidity}%</div>
            <div className="col-sm">Wind: {props.data.wind} m/s</div>
          </div>
          <div className="date">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
      </div>
    </div>
  );
}
