import React, { useEffect, useState } from "react";
import ISelect from "../../helper/_select";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import SelectInput from "../../helper/_dateSelection";
import { Formik } from "formik";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

const options = [
  { value: "0", label: "Dhaka" },
  { value: "1", label: "San Fransisco" },
  { value: "2", label: "New York" },
];
const BookingSelection = () => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [fromDateAttr, setFromDateAttr] = useState("");
  const [toDateAttr, setToDateAttr] = useState("");
  const todayDateFormat = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
  const changeDateAttr = (date, setter) => {
    const weekDay = new Date(date).getDay();
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth();
    // console.log(date,weekdays[weekDay])
    setter(`${weekdays[weekDay]} ${day}/${month}`);
  };
  useEffect(() => {
    changeDateAttr(new Date(), setFromDateAttr);
    changeDateAttr(new Date(), setToDateAttr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();
  return (
    <div>
      <Formik
        initialValues={{
          fromDate: todayDateFormat,
          toDate: todayDateFormat,
          fromPlace: "",
          toPlace: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }) => (
          <>
            <div className="row">
              <div className="d-flex col-md-6 col-xs-12">
                <ISelect heading="Return" options={["One Way", "Two Way"]} />
                <ISelect heading="Economy" options={["One Way", "Two Way"]} />
                <ISelect heading="Adult" options={["One Way", "Two Way"]} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-2 col-5 col-sm-5 mt-2">
                <SelectInput
                  name="fromPlace"
                  options={options}
                  value={values?.fromPlace}
                  onChange={(valueOption) => {
                    setFieldValue("fromPlace", valueOption);
                  }}
                />
              </div>
              <div className="col-auto ms-2 input_txt mt-2">
                <SwapHorizIcon />
              </div>
              <div className="col-md-2 ms-2 col-sm-5 col-5 mt-2">
                <SelectInput
                  name="toPlace"
                  options={options}
                  value={values?.toPlace}
                  onChange={(valueOption) => {
                    setFieldValue("toPlace", valueOption);
                  }}
                />
              </div>
              <div className="col-md-2 ms-2 col-4 mt-2">
                <input
                  type="date"
                  name="fromDate"
                  value={values.fromDate}
                  data-date={fromDateAttr}
                  onChange={(valueOption) => {
                    setFieldValue("fromDate", valueOption?.target?.value);
                    changeDateAttr(valueOption?.target?.value, setFromDateAttr);
                  }}
                  placeholder="From"
                />
              </div>
              <div className="col-md-2 ms-2 col-4 mt-2">
                <input
                  type="date"
                  name="toDate"
                  value={values.toDate}
                  data-date={toDateAttr}
                  onChange={(valueOption) => {
                    setFieldValue("toDate", valueOption?.target?.value);
                    changeDateAttr(valueOption?.target?.value, setToDateAttr);
                  }}
                  placeholder="To"
                />
              </div>
              <div className="col-auto ms-2 mt-2">
                <button
                  type="button"
                  className="btn-primary ps-3 pe-3"
                  style={{ height: "42px", borderRadius: "5px" }}
                  onClick={() => {
                    history.push({
                      pathname: "/book",
                      state: values,
                    });
                  }}
                >
                  <SearchIcon />
                </button>
              </div>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};

export default BookingSelection;
