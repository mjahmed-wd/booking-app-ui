import React from "react";
import Select, { components } from "react-select";
import AddIcon from "@material-ui/icons/Add";
// const colourOptions = [
//   { value: 1, label: "Red" },
//   { value: 2, label: "Green" },
//   { value: 3, label: "white" },
// ];

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <AddIcon />
      </components.DropdownIndicator>
    )
  );
};

const DateSelect = ({options}) => {
  return (
    <Select
      components={{ DropdownIndicator }}
      width="200px"
      menuColor="red"
      options={options}
    />
  );
};
export default DateSelect;
