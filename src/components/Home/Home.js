import React from "react";
import ISelect from "../../helper/_select";
import Select from "react-select";
import Maldivs from "./../../images/home/Rectangle 262.png"

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Home = () => {
  return (
    <>
      <div className="m-3 mt-5 mb-5">
        <p style={{ fontSize: "25px", fontWeight: "1000" }}>
          Welcome, Find a flexible flight for your next trip.
        </p>
        <div className="d-flex mt-5 w-50">
          <ISelect heading="Return" options={["One Way", "Two Way"]} />
          <ISelect heading="Economy" options={["One Way", "Two Way"]} />
          <ISelect heading="Adult" options={["One Way", "Two Way"]} />
        </div>
        <Select options={options} />
      </div>
      <div
        style={{ backgroundColor: "#F7FBFF", borderTop: "1px solid #EBF0F6" }}
      >
        <div className="m-3 mt-5 mb-5">
          <div>
            <p style={{ fontSize: "25px", fontWeight: "1000" }}>
              Countries you can travel to right now
            </p>
            <p
              className="mt-3 mb-3"
              style={{ fontSize: "20px", fontWeight: "1000", color: "#708092" }}
            >
              Populer destinations open to visitors from your country
            </p>
          </div>
          <div>
            <img src={Maldivs} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
