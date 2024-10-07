import React from "react";
export default function FormatDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let Hours = props.date.getHours();
  if (Hours < 10) {
    Hours = `0${Hours}`;
  }
  let Minutes = props.date.getMinutes();

  if (Minutes < 10) {
    Minutes = `0${Minutes}`;
  }
  return (
    <div>
      {day} {Hours}:{Minutes}
    </div>
  );
}
