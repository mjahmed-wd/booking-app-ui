import React from "react";

const CardImage = ({ img, title, subTitle, topText, bottomText }) => {
  return (
    <div style={{ position: "relative" }} className="ml-2">
      <p
        style={{
          position: "absolute",
          top: "25px",
          left: "25px",
          color: "white",
          fontSize: "12px",
          backgroundColor: "rgba(0, 0, 0, 0.57)",
          // opacity: ".5",
          borderRadius: "10px",
          padding: "5px 10px",
        }}
      >
        {topText}
      </p>
      <div
        style={{
          position: "absolute",
          bottom: "25px",
          left: "25px",
          color: "white",
          fontSize: "15px",
        }}
      >
        <b style={{cursor:"pointer"}}>{title}</b>
        <p style={{cursor:"pointer"}}>{subTitle}</p>
        <p
          style={{
            fontSize: "10px",
            border: "1px solid white",
            display: "inline-block",
            borderRadius: "10px",
            padding: "2px 5px",
          }}
        >
          • {bottomText}
        </p>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default CardImage;
