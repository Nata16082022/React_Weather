import React from "react";

export default function CurrentTime(props) {
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let seconds = props.date.getSeconds();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return (
    <span>
      {hours} : {minutes} : {seconds}
    </span>
  );
}
