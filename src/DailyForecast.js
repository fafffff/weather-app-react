import React from "react";
import "./DailyForecast.css";

export default function DailyForecast({ forecast }) {
  if (!forecast) {
    return "Loading...";
  }
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days[forecast.update.getDay()];
  return (
    <div className="Daily-Forecast">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="Day">{day}</div>
            <img src={forecast.icons} alt={forecast.alts} />
            <div>
              <span className="max">{Math.round(forecast.maxTemp)}° </span>
              <span className="min"> {Math.round(forecast.minTemp)}°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
