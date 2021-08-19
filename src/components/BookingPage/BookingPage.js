import React from "react";
import BookingSelection from "../BookingSelection/BookingSelection";
import usAirLogo from "../../images/search/icn_Logo_American-Airlines.svg";

const BookingPage = () => {
  return (
    <div className="m-3">
      <BookingSelection />
      <div
        className="row"
        style={{ border: "1px solid black", borderRadius: "5px" }}
      >
        <div className="m-2">
          <span
            style={{
              color: "#2A7BE4",
              backgroundColor: "#A0C4F3",
              borderRadius: "5px",
              padding: "0 10px",
            }}
          >
            Best
          </span>
          <span
            className="ms-2"
            style={{
              color: "#A8DDC7",
              backgroundColor: "#E0FAEF",
              borderRadius: "5px",
              padding: "0 10px",
            }}
          >
            Cheapest
          </span>
        </div>
        <div
          className="col-9 m-2 d_grid_4"
          style={{ borderRight: "1px solid black" }}
        >
          <input type="checkbox" name="check1" id="" />
          <div>
            <img src={usAirLogo} alt="" className="mt-0" />
            <img src={usAirLogo} alt="" className="mt-4" />
          </div>
         <div>
             <h4>01:30 - 18:30</h4>
             <p>SAW Sabiha Gokcen - SAN San Fransisco</p>
         </div>
         <div>
             <b>2 Steps</b>
             <p>DOH, SFO</p>
         </div>
         <div>
             <b>27 hours</b>
         </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default BookingPage;
