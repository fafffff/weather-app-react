import React, { useState } from "react";

export default function TempratureConversion(props) {
  let [convert, setConvert] = useState("celicious");
  //let [faranahit, setFaranahit] = useState();

  function convertCelicious(event) {
    event.preventDefault();
    setConvert("celicious");
  }
  function convertFaranahit(event) {
    event.preventDefault();
    setConvert((props.celicious * 9) / 5 + 32);
  }
  if (convert === "celicious") {
    return (
      <div>
        <span className="mt-5 pt-5">
          <b className="temp">{props.celicious}</b>
          <span className="unit">
            <b>°</b> C |
            <a href="/" onClick={convertFaranahit}>
              F
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="mt-5 pt-5">
          <b className="temp">{Math.round((props.celicious * 9) / 5 + 32)}</b>
          <span className="unit">
            <b>°</b>{" "}
            <a href="/" onClick={convertCelicious}>
              C
            </a>
            | F
          </span>
        </span>
      </div>
    );
  }
}
