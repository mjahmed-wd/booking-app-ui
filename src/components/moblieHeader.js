import { IconButton, MenuItem, Select } from "@material-ui/core";
import React, { useState } from "react";
import UsFlag from "./../images/home/topbar icons/us.svg";
import "./header.module.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuIcon from "@material-ui/icons/Menu";
import DPImage from "../images/dwayne-the-rock-.jpg";
import { Divider } from "@material-ui/core";
import Deals from "../images/home/sidebar icons/Deals.svg";
import Direct from "../images/home/sidebar icons/Direct.svg";
import FlightHotel from "../images/home/sidebar icons/Flight + Hotel.svg";
import Flight from "../images/home/sidebar icons/flights.svg";
import Home from "../images/home/sidebar icons/home.svg";
import Shape from "../images/home/sidebar icons/Shape.svg";
import ToDo from "../images/home/sidebar icons/Things to do.svg";
import Travel from "../images/home/sidebar icons/Travel_7.svg";
import Trips from "../images/home/sidebar icons/Trips.svg";
import Vector from "../images/home/sidebar icons/Vector.svg";

const MobileHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
    <>
      <div className="w-100 mt-3 d-flex justify-content-between">
        <div className="d-flex ms-3">
          <h4
            style={{ color: "#5D6E82", fontSize: "25px", fontWeight: "1000" }}
          >
            Logo
          </h4>
        </div>
        <div>
          <IconButton onClick={() => setMenuOpen(!isMenuOpen)} className="mb-1">
            <MenuIcon />
          </IconButton>
        </div>
      </div>
      {isMenuOpen && (
        <div>
          <div className="">
            <div className="d-flex flex-column m-3 mt-1 mobile-menu">
              <p>
                Business <span>New</span>
              </p>
              <p>
                Trips <FavoriteIcon />{" "}
              </p>
              <p>
                <svg
                  width="19"
                  height="21"
                  viewBox="0 0 19 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9936 11.2814L13.6723 13.5461L13.6671 13.5513C13.527 13.6964 13.4423 13.8768 13.4423 14.0727C13.4423 14.2686 13.527 14.4491 13.6671 14.5941C13.7234 14.6523 13.7909 14.7046 13.8799 14.7297C13.9544 14.7506 14.0253 14.7451 14.0585 14.7425L14.0656 14.742C14.0883 14.7404 14.1056 14.7392 14.1255 14.7392C14.3222 14.7392 14.5252 14.6616 14.6763 14.5004L18.0126 11.0481C18.314 10.7363 18.3189 10.2358 18.0158 9.927L18.0148 9.92605L14.6787 6.47394C14.5558 6.34677 14.3978 6.23489 14.2118 6.20565C14.0094 6.17385 13.8191 6.24666 13.6671 6.40386C13.5376 6.53794 13.4423 6.70265 13.4423 6.89575C13.4423 7.08865 13.5378 7.25364 13.6671 7.38764L16.0229 9.85148H5.54382C5.35599 9.85148 5.16758 9.90159 5.02304 10.03C4.8741 10.1624 4.80322 10.35 4.80322 10.5588C4.80322 10.7669 4.87346 10.9557 5.01856 11.0911C5.16125 11.2242 5.35015 11.2814 5.54382 11.2814H15.9936ZM9.2627 18.7686H4.48169C3.90825 18.7686 3.30408 18.4942 2.84005 18.0535C2.37633 17.613 2.07857 17.0317 2.07857 16.4456V4.52225C2.07857 3.92839 2.36292 3.33402 2.8081 2.88439C3.25372 2.43431 3.83669 2.15311 4.40389 2.15311H9.2627C9.45294 2.15311 9.64413 2.0999 9.79225 1.97459C9.94557 1.84488 10.0301 1.65658 10.0301 1.4379C10.0301 1.21737 9.94373 1.03157 9.78362 0.907891C9.63289 0.791459 9.44297 0.75 9.2627 0.75H4.40389C2.3787 0.75 0.75 2.45223 0.75 4.52225V16.4456C0.75 18.52 2.38296 20.2178 4.40389 20.2178H9.1849C9.38239 20.2178 9.57362 20.1555 9.71823 20.023C9.8654 19.8881 9.94491 19.6978 9.94491 19.4831C9.94491 19.2963 9.90047 19.1095 9.7708 18.9684C9.63769 18.8236 9.4534 18.7686 9.2627 18.7686Z"
                    fill="#E7556A"
                  />
                </svg>
                Logout
              </p>
              <p>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={`hello`}
                  onChange={(e) => console.log(e?.target?.value)}
                >
                  <MenuItem value="english">
                    <img
                      src={UsFlag}
                      alt=""
                      style={{ height: "25px", width: "25px" }}
                    />
                  </MenuItem>
                </Select>
              </p>
              <div className="d-flex align-items-center mt-1 mb-1">
                <img
                  src={DPImage}
                  alt=""
                  style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                />
                {<p className="ms-3">Amanda Rock</p>}
              </div>

              <Divider />

              {firstMenu.map((text, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center sideBtn"
                >
                  <img src={text?.icon} alt="" />
                  {<p className="ms-3">{text?.name}</p>}
                </div>
              ))}

              <Divider />

              {secondMenu.map((text, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center sideBtn"
                >
                  <img src={text?.icon} alt="" />
                  {<p className="ms-3">{text?.name}</p>}
                </div>
              ))}

              <Divider />

              <div className="d-flex align-items-center">
                <img src={Trips} alt="" />
                {<p className="ms-3">Trips</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
