import React from "react";
import "./Pre.css"

function Pre({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <div className="loading-container">
        <div className="loading-text">
          <span className="font-protest">S</span>
          <span className="font-protest">I</span>
          <span className="font-protest">R</span>
          <span className="font-protest">I</span>
          <span className="font-protest">U</span>
          <span className="font-protest">S</span>
        </div>
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default Pre;
