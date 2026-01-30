import React from "react";
import "./Pre.css"

function Pre({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <div className="loading-container">
        <div className="loading-text">
          {/* FONT PROTEST STYLE */}
          <span className="font-merriweather italic">S</span>
          <span className="font-merriweather italic">I</span>
          <span className="font-merriweather italic">R</span>
          <span className="font-merriweather italic">I</span>
          <span className="font-merriweather italic">U</span>
          <span className="font-merriweather italic">S</span>

          {/* NORMAL FONT STYLE */}
          {/* <span>S</span>
          <span>I</span>
          <span>R</span>
          <span>I</span>
          <span>U</span>
          <span>S</span> */}
        </div>
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default Pre;
