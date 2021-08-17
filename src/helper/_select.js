import React from "react";

const ISelect = ({ heading, options }) => {
  return (
    <select class="form-select w-25 me-2" style={{ border: "none", paddingLeft: "0" }} aria-label="Return">
      <option selected>{heading}</option>
      {options?.map((item, i) => 
        <option value="1" key={i}>{item}</option>
      )}
    </select>
  );
};

export default ISelect;
