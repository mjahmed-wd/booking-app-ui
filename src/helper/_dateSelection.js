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

const SelectInput = ({ name, options, value, placeholder, min, onChange }) => {
  return (
    <Select
      name={name}
      components={{ DropdownIndicator }}
      width="200px"
      minDate={min}
      menuColor="red"
      onChange={onChange}
      options={options || []}
      value={value}
    />
  );
};
export default SelectInput;
