import React from "react";

export default function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-6">
          <h1>Weather forecast</h1>
        </div>
        <div className="col-6">
          <form className="form">
            <input type="text" placeholder="Search for contry, city" />
            <input type="submit" value="🔍" />
          </form>
        </div>
      </div>
    </div>
  );
}
