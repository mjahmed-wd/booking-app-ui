import React from "react";

const ISelect = ({ heading, options, className }) => {
  return (
    <select
      className={`form-select me-2 ${className ? className : " w-25"}`}
      style={{ border: "none", paddingLeft: "0" }}
      aria-label="Return"
    >
      <option selected>{heading}</option>
      {options?.map((item, i) => (
        <option value="1" key={i}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default ISelect;
