import React from "react";
// import EmojiIcon from '@atlaskit/icon/glyph/emoji';
import Select, { components } from "react-select";
const colourOptions = [
  { value: 1, label: "Red" },
  { value: 2, label: "Green" },
  { value: 3, label: "white" },
];

const DropdownIndicator = () => {
  return <components.DropdownIndicator>+</components.DropdownIndicator>;
};

const DateSelect = () => (
  <Select
    closeMenuOnSelect={false}
    components={{ DropdownIndicator }}
    defaultValue={[colourOptions[0]]}
    options={colourOptions}
  />
);
export default DateSelect;
