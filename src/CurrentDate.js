import React from "react";

export default function CurrentDate(props) {
  let fullMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = fullMonths[props.date.getMonth()];

  let year = props.date.getFullYear();

  let day = props.date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }

  return (
    <span>
      {day} {month} {year}
    </span>
  );
}
