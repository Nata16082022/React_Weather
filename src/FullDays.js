import React from "react";

export default function FullDays(props) {
  let fullDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = fullDays[props.date.getDay()];

  return <div>{day}</div>;
}
