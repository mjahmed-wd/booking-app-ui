import React from "react";
import ISelect from "../../helper/_select";
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Home = () => {
  return (
    <div style={{ marginLeft: "25px" }}>
      <h2>Welcome, Find a flexible flight for your next trip.</h2>
      <div className="d-flex mt-5 w-75">
        <ISelect heading="Return" options={["One Way", "Two Way"]} />
        <ISelect heading="Economy" options={["One Way", "Two Way"]} />
        <ISelect heading="Adult" options={["One Way", "Two Way"]} />
      </div>
      <Select options={options} />
    </div>
  );
};

export default Home;
