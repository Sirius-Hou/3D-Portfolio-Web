import React from "react";
import "./Pre.css"

function Pre({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <div className="loading-container">
        <div className="loading-text">
          {/* FONT PROTEST STYLE */}
          {/* <span className="font-protest">S</span>
          <span className="font-protest">I</span>
          <span className="font-protest">R</span>
          <span className="font-protest">I</span>
          <span className="font-protest">U</span>
          <span className="font-protest">S</span> */}

          {/* NORMAL FONT STYLE */}
          <span>S</span>
          <span>I</span>
          <span>R</span>
          <span>I</span>
          <span>U</span>
          <span>S</span>
        </div>
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default Pre;
