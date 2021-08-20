import { AccordionSummary, Divider } from "@material-ui/core";
import React from "react";
import BookingSelection from "../BookingSelection/BookingSelection";
import BookingPackages from "./BookingPackages";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { useState } from "react";
import IAccrodition from "../../helper/_accrodition";
import info from "../../images/search/error.svg";
import card from "../../images/search/card.svg";
import ISelect from "../../helper/_select";
import ISlider from "../../helper/_slider";
import facebook from "../../images/search/Facebook.svg";
import twitter from "../../images/search/Twitter.svg";
import medium from "../../images/search/Medium M.svg";
import linkedIn from "../../images/search/LinkedIn.svg";

const BookingPage = () => {
  const [onOffStatus, setOnOffStatus] = useState(false);
  return (
    <>
      <div className="m-3">
        <BookingSelection />
      </div>
      <div className="row pt-2" style={{ backgroundColor: "#F7FBFF" }}>
        <div className="col-12 col-md-3 mt-5 p-3 pt-0">
          <div className="bg-white shadow-lg mb-5 p-3 bg-body rounded">
            <b>Our advice</b>
            <p>We are still gathering data for this route</p>
            <Divider className="m-2" />
            <div className="d-flex justify-content-between align-items-center">
              <b>Track Prices</b>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Switch
                      color="primary"
                      onChange={() => {
                        setOnOffStatus(!onOffStatus);
                      }}
                    />
                  }
                  label={onOffStatus ? "Off" : "On"}
                />
              </FormGroup>
            </div>
          </div>{" "}
          <div className="p-1">
            <p>
              39 out of <span style={{ color: "blue" }}>543 flights</span>{" "}
            </p>
          </div>
          <Divider />
          <IAccrodition title={`Recommended Filters`}>
            <div className="w-100">
              <input type="checkbox" name="" id="" /> Hide 1 stop
            </div>
            <Divider />
            <div className="">
              <div className="w-100">
                <input type="checkbox" name="" id="" /> Hide 1 stop
              </div>
              <div className="w-100">
                <input type="checkbox" name="" id="" /> Hide 1 stop
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <input type="checkbox" name="" id="" /> 2+ stop
                </div>
                $899
              </div>
            </div>
            <Divider />
            <div>
              <div>
                <b>Free Assistant</b>
                <img src={info} alt="" srcset="" />
              </div>
              <div className="d-flex justify-content-between">
                <img src={card} alt="" srcset="" />
                <b>Payment Method</b>
              </div>
              <div className="w-100">
                <ISelect
                  className="w-100"
                  heading="Cash"
                  options={["Cash", "Card", "Bkash"]}
                />
              </div>
            </div>
          </IAccrodition>
          <Divider />
          <IAccrodition title={`Times`}>
            <div
              className="d-flex justify-content-between"
              style={{ border: "1px solid #2A7BE4", borderRadius: "5px" }}
            >
              <div
                className="p-2 w-100"
                style={{
                  backgroundColor: "#EAF3FF",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              >
                <p>Take Off</p>
              </div>
              <div
                className="p-2 w-100 text-light"
                style={{
                  backgroundColor: "#fff",
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
              >
                <p>Landing</p>
              </div>
            </div>
            <div>
              <div className="d-flex">
                <b>Take of from the SAW</b>
                <p className="ps-1">Fri 1:30-Sat 2:20</p>
              </div>
              <div className="p-1">
                <ISlider />
              </div>
              <div className="d-flex">
                <b>Take of from the SAW</b>
                <p className="ps-1">Fri 1:30-Sat 2:20</p>
              </div>
              <div className="p-1">
                <ISlider />
              </div>
            </div>
            <Divider />
          </IAccrodition>
          <Divider />
          <IAccrodition title={`Airlines`}>
            <div>
              <div>
                <span
                  className="me-2"
                  style={{ borderLeft: "1px solid #EAF3FF" }}
                >
                  Select All
                </span>{" "}
                <span style={{ color: "#2A7BE4" }}>Clear All</span>
              </div>
              <div>
                <div className="w-100">
                  <input type="checkbox" name="" id="" /> Qatar Airways
                </div>
                <div className="w-100">
                  <input type="checkbox" name="" id="" /> Multiple Airlines
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <b>Airports</b>
              <div>
                <span
                  className="me-2"
                  style={{ borderLeft: "1px solid #EAF3FF" }}
                >
                  Select All
                </span>{" "}
                <span style={{ color: "#2A7BE4" }}>Clear All</span>
              </div>
              <div>
                <div className="w-100">
                  <input type="checkbox" name="" id="" /> Qatar Airways
                </div>
                <div className="w-100">
                  <input type="checkbox" name="" id="" /> Multiple Airlines
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <b>Allience</b>

              <div>
                <div className="w-100">
                  <input type="checkbox" name="" id="" /> Qatar Airways
                </div>
                <div className="w-100">
                  <input type="checkbox" name="" id="" /> Multiple Airlines
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <b>Istambul</b>

              <div>
                <div className="w-100">
                  <input type="checkbox" name="" id="" /> Qatar Airways
                </div>
                <div className="w-100">
                  <input type="checkbox" name="" id="" /> Multiple Airlines
                </div>
              </div>
            </div>
          </IAccrodition>
          <Divider />
          <IAccrodition title={`Price`}></IAccrodition>
          <Divider />
          <IAccrodition title={`Cabin`}></IAccrodition>
          <Divider />
          <IAccrodition title={`Stopover Airports`}></IAccrodition>
          <Divider />
          <IAccrodition title={`Flight Quality`}></IAccrodition>
          <Divider />
          <IAccrodition title={`Aircraft`}></IAccrodition>
          <Divider />
          <IAccrodition title={`Booking Sites`}></IAccrodition>
          <Divider />
        </div>
        <div className="col-12 col-md-9">
          <BookingPackages />
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "#EDF2F8" }}>
        <div className="col-0 col-md-3"></div>
        <div className="col-12 col-md-9 p-3 row">
          <div className="col-6 col-md-3">
            <b>Company</b>
            <p>About</p>
            <p>Career</p>
            <p>Mobile</p>
            <p>Blog</p>
          </div>
          <div className="col-6 col-md-3">
            <b>Company</b>
            <p>Help</p>
            <p>FAQ</p>
            <p>Press</p>
            <p>Affiliates</p>
            <p>Hotel Owners</p>
          </div>
          <div className="col-6 col-md-3">
            <b>Company</b>
            <p>Airline Fees</p>
            <p>Airlines</p>
            <p>Low Fare Tips</p>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex">
              <img src={facebook} style={{width:"50px"}} alt="" srcset="" />
              <img src={twitter} style={{width:"50px"}} alt="" srcset="" />
              <img src={linkedIn} style={{width:"50px"}} alt="" srcset="" />
              <img src={medium} style={{width:"50px"}} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
