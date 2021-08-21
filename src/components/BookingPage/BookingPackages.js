import React from "react";
import TravelCard from "../../helper/_travelCard";
import PlusArrow from "../../images/search/plus arrow.svg";
import BookingPageFooter from "./BookingPageFooter";
import BookingPageSorting from "./BookingPageSorting";
import BookingIntro from "./BookingIntro";
const BookingPackages = () => {
  const travelPackages = [
    {
      header: {
        amount: 249,
        airlines: "Qatar Airlines",
      },
      row: [
        {
          time: "01:30 - 18:30",
          route: "SAW Sabiha Gokcen - SAN San Fransisco",
          steps: "2 Steps",
          routeCode: "DOH, SFO",
          timeCount: "27 hours",
        },
        {
          time: "01:30 - 18:30",
          route: "SAW Sabiha Gokcen - SAN San Fransisco",
          steps: "2 Steps",
          routeCode: "DOH, SFO",
          timeCount: "27 hours",
        },
      ],
    },
    {
      header: {
        amount: 249,
        airlines: "Qatar Airlines",
      },
      row: [
        {
          time: "01:30 - 18:30",
          route: "SAW Sabiha Gokcen - SAN San Fransisco",
          steps: "2 Steps",
          routeCode: "DOH, SFO",
          timeCount: "27 hours",
        },
        {
          time: "01:30 - 18:30",
          route: "SAW Sabiha Gokcen - SAN San Fransisco",
          steps: "2 Steps",
          routeCode: "DOH, SFO",
          timeCount: "27 hours",
        },
      ],
    },
    {
      header: {
        amount: 249,
        airlines: "Qatar Airlines",
      },
      row: [
        {
          time: "01:30 - 18:30",
          route: "SAW Sabiha Gokcen - SAN San Fransisco",
          steps: "2 Steps",
          routeCode: "DOH, SFO",
          timeCount: "27 hours",
        },
        {
          time: "01:30 - 18:30",
          route: "SAW Sabiha Gokcen - SAN San Fransisco",
          steps: "2 Steps",
          routeCode: "DOH, SFO",
          timeCount: "27 hours",
        },
      ],
    },
    {
      header: {
        amount: 249,
        airlines: "Qatar Airlines",
      },
      row: [
        {
          time: "01:30 - 18:30",
          route: "SAW Sabiha Gokcen - SAN San Fransisco",
          steps: "2 Steps",
          routeCode: "DOH, SFO",
          timeCount: "27 hours",
        },
        {
          time: "01:30 - 18:30",
          route: "SAW Sabiha Gokcen - SAN San Fransisco",
          steps: "2 Steps",
          routeCode: "DOH, SFO",
          timeCount: "27 hours",
        },
      ],
    },
  ];
  return (
    <>
      <div className="m-3">
        <BookingIntro />
        <BookingPageSorting />
        <div>
          {travelPackages?.map((item, index) => (
            <TravelCard data={item} />
          ))}
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            border: "2px dashed #2A7BE4",
            backgroundColor: "#F9FAFD",
            cursor: "pointer",
          }}
        >
          <img src={PlusArrow} alt="" srcset="" />
          <button className="btn bg-transparent text-primary">
            Show more results
          </button>
        </div>
        <BookingPageFooter />
      </div>
    </>
  );
};

export default BookingPackages;
