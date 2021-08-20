import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
const AirbnbSlider = withStyles({
  root: {
    color: "#2A7BE4",
    height: 3,
    padding: "13px 0",
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -6,
    marginLeft: -7,
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: "#2A7BE4",
    opacity: 1,
    height: 3,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

export default function ISlider() {
  return (
    <div>
      <AirbnbSlider
        ThumbComponent={AirbnbThumbComponent}
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        defaultValue={[20, 40]}
      />
    </div>
  );
}
