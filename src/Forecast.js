import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <p className="centr-text">Mon</p>
          <p className="centr-text-small">July 18</p>
          <img src="./sun_cloud.png" alt="" />

          <div className="row">
            <div className="col-6 pr-2">
              <p className="right-text">22°</p>
            </div>
            <div className="col-6 pl-2">
              <p className="text-left">18°</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <p className="centr-text">Tue</p>
          <p className="centr-text-small">July 19</p>
          <img src="./sun.png" alt="" />
          <div className="row">
            <div className="col-6 pr-2">
              <p className="right-text">25°</p>
            </div>
            <div className="col-6 pl-2">
              <p className="text-left">20°</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <p className="centr-text">Wed</p>
          <p className="centr-text-small">July 20</p>
          <img src="./sun_rains.png" alt="" />
          <div className="row">
            <div className="col-6 pr-2">
              <p className="right-text">23°</p>
            </div>
            <div className="col-6 pl-2">
              <p className="text-left">18°</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <p className="centr-text">Thu</p>
          <p className="centr-text-small">July 21</p>
          <img src="./rains.png" alt="" />
          <div className="row">
            <div className="col-6 pr-2">
              <p className="right-text">20°</p>
            </div>
            <div className="col-6 pl-2">
              <p className="text-left">17°</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <p className="centr-text">Fri</p>
          <p className="centr-text-small">July 22</p>
          <img src="./storm.png" alt="" />
          <div className="row">
            <div className="col-6 pr-2">
              <p className="right-text">19°</p>
            </div>
            <div className="col-6 pl-2">
              <p className="text-left">16°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
