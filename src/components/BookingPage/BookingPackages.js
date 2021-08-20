import React from 'react'
import BookingSelection from "../BookingSelection/BookingSelection";
import usAirLogo from "../../images/search/icn_Logo_American-Airlines.svg";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Debit from "../../images/search/Direct Debit.svg";
import TravelCard from "../../helper/_travelCard";
import AddIcon from "@material-ui/icons/Add";
import PlusArrow from "../../images/search/plus arrow.svg";
import BookingPageFooter from "./BookingPageFooter";
import info from "../../images/search/error.svg";
import BookingPageSorting from "./BookingPageSorting";
import DotIcon from "../../images/search/dot.svg";
import BookingIntro from "./BookingIntro";
const BookingPackages = () => {
    return (
        <>
        <div className="m-3">
          <BookingIntro />
          <BookingPageSorting />
          <div>
            <TravelCard />
            <TravelCard />
            <TravelCard />
            <TravelCard />
            <TravelCard />
            <TravelCard />
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
   
    )
}

export default BookingPackages
