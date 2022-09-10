import React from "react";

export default function WeatherUnits(props) {
  return (
    <span className="WeatherUnits">
      <span className="temperature">{props.celsius}</span>
      <span className="units">°C </span>
    </span>
  );
}
