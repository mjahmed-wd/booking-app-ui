import React from "react";
import BookingSelection from "../BookingSelection/BookingSelection";
import usAirLogo from "../../images/search/icn_Logo_American-Airlines.svg";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Debit from "../../images/search/Direct Debit.svg";
import TravelCard from "../../helper/_travelCard";

const BookingPage = () => {
  const [hisStudet, setData] = [1, 2, 3, 4, 5, 6, 6];
  return (
    <div className="m-3">
      <BookingSelection />
      <TravelCard />
      <TravelCard />
      <TravelCard />
      <TravelCard />
      <TravelCard />
      <TravelCard />
    </div>
  );
};

export default BookingPage;
