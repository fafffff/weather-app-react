import React from "react";
import "./DailyForecast.css";

export default function DailyForecast({ forecast }) {
  if (!forecast || !forecast.daily) {
    return "Loading...";
  }

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="Daily-Forecast">
      <div className="container">
        <div className="row">
          {forecast.daily.map(function (dayData, index) {
            const day = days[new Date(dayData.time * 1000).getDay()];
            return (
              <div className="col" key={index}>
                <div className="Day">{day}</div>
                <img
                  src={dayData.condition.icon_url}
                  alt={dayData.condition.description}
                />
                <div>
                  <span className="max">
                    {Math.round(dayData.temperature.maximum)}°
                  </span>
                  <span className="min">
                    {Math.round(dayData.temperature.minimum)}°
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
