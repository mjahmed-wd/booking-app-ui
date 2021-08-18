import React from "react";
import ISelect from "../../helper/_select";
import Select from "react-select";
import Maldivs from "./../../images/home/Rectangle 262a.png";
import India from "./../../images/home/india.png";
import London from "./../../images/home/london.png";
import Arab from "./../../images/home/arab.png";
import CardImage from "../../helper/_cardImage";
import Carousel from "react-multi-carousel";
// import DateSelect from "../../helper/_dateSelection";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
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
          {/* <DateSelect /> */}
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
