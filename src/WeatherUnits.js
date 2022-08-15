import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("celsius");
  function switchToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function switchToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <span className="WeatherUnits">
        <span className="temperature">{props.celsius}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={switchToFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherUnits">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={switchToCelsius}>
            °C |{" "}
          </a>
          °F
        </span>
      </span>
    );
  }
}
