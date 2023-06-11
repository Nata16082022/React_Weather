import React from "react";
import CurrentDate from "./CurrentDate";
import CurrentTime from "./CurrentTime";
import FullDays from "./FullDays";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <p className="status">{props.data.description}</p>
      <div className="row">
        <div className="col-5">
          <div className="row">
            <div className="col-6 pr-0">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="col-6 pl-0">
              <WeatherTemp celsius={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="col-3">
          <p>
            <FullDays date={props.data.date} />
          </p>
          <p>
            <CurrentDate date={props.data.date} />
          </p>
          <p>
            <CurrentTime date={props.data.date} />
          </p>
        </div>
        <div className="col-4">
          <p>Precipitation : {Math.round(props.data.humidity)}%</p>
          <p>Wind: {Math.round(props.data.wind)} km/h</p>
          <p>Pressure: {Math.round(props.data.pressure)} mm</p>
        </div>
      </div>
      <br />
    </div>
  );
}
