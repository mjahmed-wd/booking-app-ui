import React from "react";

const ISelect = ({ heading, options }) => {
  return (
    <select class="form-select m-1" style={{ border: "none" }} aria-label="Return">
      <option selected>{heading}</option>
      {options?.map((item, i) => 
        <option value="1" key={i}>{item}</option>
      )}
    </select>
  );
};

export default ISelect;
