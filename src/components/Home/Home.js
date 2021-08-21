import React from "react";
import Maldivs from "./../../images/home/Rectangle 262a.png";
import India from "./../../images/home/india.png";
import London from "./../../images/home/london.png";
import Arab from "./../../images/home/arab.png";
import CardImage from "../../helper/_cardImage";
import Carousel from "react-multi-carousel";
import BookingSelection from "../BookingSelection/BookingSelection";

const Home = () => {
  const carousel = [
    {
      img: London,
      title: `Delhi Events 2022`,
      subTitle: `A small description goes here`,
      topText: `Open`,
      bottomText: `Important`,
    },
    {
      img: Maldivs,
      title: `Delhi Events 2022`,
      subTitle: `A small description goes here`,
      topText: `Open`,
      bottomText: `Important`,
    },
    {
      img: India,
      title: `Delhi Events 2022`,
      subTitle: `A small description goes here`,
      topText: `Open`,
      bottomText: `Important`,
    },
    {
      img: London,
      title: `Delhi Events 2022`,
      subTitle: `A small description goes here`,
      topText: `Open`,
      bottomText: `Important`,
    },
  ];
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
        <div className="mt-5">
          <BookingSelection />
        </div>
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
              {carousel?.map((item, index) => (
                <CardImage
                  img={item?.img}
                  title={item?.title}
                  subTitle={item?.subTitle}
                  topText={item?.topText}
                  bottomText={item?.bottomText}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
