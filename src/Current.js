import React from "react";

export default function Current() {
  return (
    <div className="Current">
      <h2>KYIV</h2>
      <p className="status">Showers in places</p>
      <div className="row">
        <div className="col-4">
          <div className="row">
            <div className="col-6 pr-0">
              <img src="./rains.png" alt="" />
            </div>
            <div className="col-6 pl-0">
              <p className="big-text">21°C</p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <p>Sunday</p>
          <p>17 July 2022</p>
          <p>17:07:58</p>
        </div>
        <div className="col-5">
          <p>Precipitation : 37%</p>
          <p>
            Wind: <i className="fa-solid fa-arrow-down-long"></i> 6 km/h
          </p>
          <p>Pressure: 750 mm</p>
        </div>
      </div>
      <br />
    </div>
  );
}
