import React from "react";
import Select from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    // borderBottom: "1px dotted pink",
    // color: state.isSelected ? "red" : "blue",
    // padding: 20,
    width: 50,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

// const options = [
//   { value: 1, label: "US", img: UsFlag },
//   { value: 2, label: "BD", img: UsFlag },
// ];

const flagSelection = ({ value, label, img }) => (
  <div>
    <img src={img} alt="" />
  </div>
);

const countrySelection = ({ value, label, img }) => (
  <div className="d-flex">
    <img src={img} alt="" />
    <p className="ms-3">{label}</p>
  </div>
);

const currencySelection = ({ value, label, icon }) => (
  <div className="d-flex">
    {icon}
    <p className="ms-3">{label}</p>
  </div>
);

const formatOptionLabel = ({ value, label, img }) => (
  <div>
    <p>{label}</p>
  </div>
);

const IOptions = ({ options, variant }) => {
  return (
    <div className="mb-2">
      <Select
        styles={customStyles}
        defaultValue={options[0]}
        formatOptionLabel={
          variant === "flag"
            ? flagSelection
            : variant === "country"
            ? countrySelection
            : variant === "currency"
            ? currencySelection
            : formatOptionLabel
        }
        options={options}
      />
    </div>
  );
};

export default IOptions;
