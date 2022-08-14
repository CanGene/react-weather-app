import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-4">
          <h2 className="temperature">{props.data.temperature}</h2>
        </div>
        <div className="col-sm-4">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            className="now-icon"
          />
        </div>
        <div className="col-sm-4 location">
          <h1 className="cityName text-capitalize">{props.data.city},</h1>
          <h3 className="country">{props.data.country}</h3>
        </div>
        <div className="col-sm-4">
          <h4>°C/F</h4>
        </div>{" "}
        <div className="col-sm-4">
          <h5 className="description text-capitalize">
            {props.data.description}
          </h5>
        </div>
        <div className="col-sm-4">
          <div className="date">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
      </div>
      <div className="row today-info">
        <div className="col-sm-4">Feels Like: {props.data.feelsLike}°C</div>
        <div className="col-sm-4">Humidity: {props.data.humidity}%</div>
        <div className="col-sm-4">Wind: {props.data.wind} m/s</div>
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
}
