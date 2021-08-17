import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DPImage from "../../images/dwayne-the-rock-.jpg";
import MenuIcon from "@material-ui/icons/Menu";
import { Divider} from "@material-ui/core";
import Deals from "../../images/home/sidebar icons/Deals.svg";
import Direct from "../../images/home/sidebar icons/Direct.svg";
import FlightHotel from "../../images/home/sidebar icons/Flight + Hotel.svg";
import Flight from "../../images/home/sidebar icons/flights.svg";
import Home from "../../images/home/sidebar icons/home.svg";
import Shape from "../../images/home/sidebar icons/Shape.svg";
import ToDo from "../../images/home/sidebar icons/Things to do.svg";
import Travel from "../../images/home/sidebar icons/Travel_7.svg";
import Trips from "../../images/home/sidebar icons/Trips.svg";
import Vector from "../../images/home/sidebar icons/Vector.svg";

const SidebarNavigation = ({ sidebarWidth, setChangeSidebarWidth }) => {
  const firstMenu = [
    { name: "Flights", icon: Flight },
    { name: "Stays", icon: Home },
    { name: "Car Rental", icon: Shape },
    { name: "Things to do", icon: ToDo },
    { name: "Flight + Hotel", icon: FlightHotel },
  ];
  const secondMenu = [
    { name: "Explore", icon: Travel },
    { name: "Deals", icon: Deals },
    { name: "Routes", icon: Vector },
    { name: "Direct", icon: Direct },
  ];
  return (
    <div className="m-2">
      <IconButton
        onClick={() => setChangeSidebarWidth(!sidebarWidth)}
        className="mb-1"
      >
        <MenuIcon />
      </IconButton>

      <Divider />

      <div className="m-3 d-flex align-items-center">
        <img
          src={DPImage}
          alt=""
          style={{ width: "30px", height: "30px", borderRadius: "50%" }}
        />
        {sidebarWidth && <p className="ms-3">Amanda Rock</p>}
      </div>

      <Divider />

      {firstMenu.map((text, index) => (
        <div key={index} className="m-3 d-flex align-items-center sideBtn">
          <img src={text?.icon} alt="" />
          {sidebarWidth && <p className="ms-3">{text?.name}</p>}
        </div>
      ))}

      <Divider />

      {secondMenu.map((text, index) => (
        <div key={index} className="m-3 d-flex align-items-center sideBtn">
          <img src={text?.icon} alt="" />
          {sidebarWidth && <p className="ms-3">{text?.name}</p>}
        </div>
      ))}

      <Divider />

      <div className="m-3 d-flex align-items-center">
        <img src={Trips} alt="" />
        {sidebarWidth && <p className="ms-3">Trips</p>}
      </div>
    </div>
  );
};

export default SidebarNavigation;
