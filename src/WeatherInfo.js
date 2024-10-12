import React from "react";
import FormatDate from "./FormatDate";
import TempratureConversion from "./TemperatureConversion";
export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="Weather-Info">
        <h1 className="capitaliz-text mb-3 mt-5">
          <b>{props.info.city}</b>
        </h1>
        <ul>
          <li className="pb-1">
            <FormatDate date={props.info.time} />
          </li>
          <li>{props.info.description}</li>
        </ul>
        <div className="row">
          <div className="col-6 pt-2">
            <img
              src={props.info.icon}
              alt={props.info.alt}
              className="float-left weather-image "
            />
            <TempratureConversion
              celicious={Math.round(props.info.temperature)}
            />
          </div>
          <div className="col-6 pt-5 ml-5 ps-5 mb-5">
            <ul>
              <li className="pb-1"> Humidity: {props.info.humidity}%</li>
              <li>Wind: {props.info.wind}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
