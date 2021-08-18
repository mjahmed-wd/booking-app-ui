import React from "react";
import ISelect from "../../helper/_select";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import Maldivs from "./../../images/home/Rectangle 262a.png";
import India from "./../../images/home/india.png";
import London from "./../../images/home/london.png";
import Arab from "./../../images/home/arab.png";
import CardImage from "../../helper/_cardImage";
import Carousel from "react-multi-carousel";
import DateSelect from "../../helper/_dateSelection";
import { Formik } from "formik";
import { useState } from "react";

const options = [
  { value: "0", label: "Dhaka" },
  { value: "1", label: "San Fransisco" },
  { value: "2", label: "New York" },
];

const Home = () => {
  const weekdays=[
    "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
  ]
  const [fromDateAttr, setFromDateAttr] = useState("");
  const [toDateAttr, setToDateAttr] = useState("");

  const changeDateAttr = (date,setter) => {
    const weekDay=new Date(date).getDay()
    const day=new Date(date).getDate()
    const month=new Date(date).getMonth()
    // console.log(date,weekdays[weekDay])
    setter(`${weekdays[weekDay]} ${day}/${month}`)
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="m-3 mt-5 mb-5">
        <p style={{ fontSize: "25px", fontWeight: "1000" }}>
          Welcome, Find a flexible flight for your next trip.
        </p>
        <div className="row">
          <div className="d-flex mt-5 col-md-6 col-xs-12">
            <ISelect heading="Return" options={["One Way", "Two Way"]} />
            <ISelect heading="Economy" options={["One Way", "Two Way"]} />
            <ISelect heading="Adult" options={["One Way", "Two Way"]} />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-2">
            <DateSelect options={options} />
          </div>
          <div className="col-auto ms-2 me-2 input_txt">
            <SwapHorizIcon />
          </div>
          <div className="col-md-2">
            <DateSelect options={options} />
          </div>
        </div>

        <Formik
          initialValues={{ email: "", date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate}` }}
          // validate={(values) => {
          //   const errors = {};
          //   if (!values.email) {
          //     errors.email = "Required";
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = "Invalid email address";
          //   }
          //   return errors;
          // }}
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
              <input
                type="date"
                name="date"
                data-date={fromDateAttr}
                onChange={(valueOption) => {
                  setFieldValue("date", valueOption?.target?.value);
                  changeDateAttr(valueOption?.target?.value,setFromDateAttr)
                  // this.setAttribute("data-date","Wed 17/9")
                }}
                onBlur={handleBlur}
                value={values.date}
              />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              {values?.date}
            </>
          )}
        </Formik>
        {/* <Select options={options} /> */}
      </div>
      <div
        style={{ backgroundColor: "#F7FBFF", borderTop: "1px solid #EBF0F6" }}
      >
        <div className="m-3 mt-5 mb-0 ">
          <div className="d-flex justify-content-between align-items-end">
            <div>
              <p style={{ fontSize: "25px", fontWeight: "1000" }}>
                Countries you can travel to right now
              </p>
              <p
                className="mt-3 mb-3"
                style={{
                  fontSize: "20px",
                  fontWeight: "1000",
                  color: "#708092",
                }}
              >
                Populer destinations open to visitors from your country
              </p>
            </div>
            <button
              className="btn btn-outline-primary"
              style={{
                padding: "5px 10px",
                marginBottom: "25px",
                marginRight: "50px",
              }}
            >
              See All
            </button>
          </div>

          <div className="pb-5">
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsive}
              infinite={true}
              autoPlaySpeed={500}
              keyBoardControl={true}
              customTransition="all 1"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <CardImage
                img={Maldivs}
                title={`Delhi Events 2022`}
                subTitle={`A small description goes here`}
                topText={`Open`}
                bottomText={`Important`}
              />
              <CardImage
                img={India}
                title={`Delhi Events 2022`}
                subTitle={`A small description goes here`}
                topText={`Open`}
                bottomText={`Important`}
              />
              <CardImage
                img={London}
                title={`Delhi Events 2022`}
                subTitle={`A small description goes here`}
                topText={`Open`}
                bottomText={`Important`}
              />
              <CardImage
                img={Arab}
                title={`Delhi Events 2022`}
                subTitle={`A small description goes here`}
                topText={`Open`}
                bottomText={`Important`}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
