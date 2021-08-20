import React from "react";
import DotIcon from "../../images/search/dot.svg";
import RightTopBg from "../../images/search/rightCorner.svg";

const BookingIntro = () => {
  return (
    <div className="bg-white shadow-lg mt-5 mb-5 bg-body rounded">
      <div
        className="d-flex p-3"
        style={{
          backgroundImage: `url(${RightTopBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <img src={DotIcon} alt="" srcset="" />
        <p className="ms-3">
          {" "}
          <b>Covid 19</b> - Most visitors from Turkey need to provide a negative
          COVID-19 test result, proof of vaccination, and/or quarantine to enter
          the United States. Learn more
        </p>
      </div>
    </div>
  );
};

export default BookingIntro;
