import React from "react";
import "./Footer1.css";
import ScrollService from "../../utilities/ScrollService";
export default function Footer() {
  return (
    <div className="scroll-container">
      <button
        className="btn-scroll"
        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}