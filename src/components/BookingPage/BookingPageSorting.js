import React from 'react'
import info from "../../images/search/error.svg";

const BookingPageSorting = () => {
    return (
        <div
        className="row shadow-lg mb-5 bg-body rounded"
        style={{ borderRadius: "5px" }}
      >
        <div className="col-6 col-md-3 p-5 pt-1 pb-1">
          <b>Cheapest</b> <img src={info} alt="" />
          <div className="d-flex justif-content-between align-items-center">
            <h4>$249 </h4>
            <p className="ps-2">24 hour 16 minutes</p>
          </div>
        </div>
        <div
          className="col-6 col-md-3 p-5 pt-1 pb-1"
          style={{ backgroundColor: "#EAF3FF" }}
        >
          <b>Cheapest</b> <img src={info} alt="" />
          <div className="d-flex justif-content-between align-items-center">
            <h4>$249 </h4>
            <p className="ps-2">24 hour 16 minutes</p>
          </div>
        </div>
        <div className="col-6 col-md-3 p-5 pt-1 pb-1">
          <b>Cheapest</b> <img src={info} alt="" />
          <div className="d-flex justif-content-between align-items-center">
            <h4>$249 </h4>
            <p className="ps-2">24 hour 16 minutes</p>
          </div>
        </div>
        <div className="col-6 col-md-3 p-5 pt-1 pb-1">
          <b>Cheapest</b> <img src={info} alt="" />
          <div className="d-flex justif-content-between align-items-center">
            <h4>$249 </h4>
            <p className="ps-2">24 hour 16 minutes</p>
          </div>
        </div>
      </div>
    )
}

export default BookingPageSorting
