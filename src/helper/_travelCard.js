import Debit from "../images/search/Direct Debit.svg";
import ShareIcon from "@material-ui/icons/Share";
import usAirLogo from "../images/search/icn_Logo_American-Airlines.svg";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const TravelCard = ({data}) => {
  return (
    <div
      className="row shadow-lg mb-5 bg-body rounded"
      style={{ borderRadius: "5px" }}
    >
      <div className="m-2">
        <span
          style={{
            color: "#2A7BE4",
            backgroundColor: "#A0C4F3",
            borderRadius: "5px",
            padding: "0 10px",
          }}
        >
          Best
        </span>
        <span
          className="ms-2"
          style={{
            color: "#A8DDC7",
            backgroundColor: "#E0FAEF",
            borderRadius: "5px",
            padding: "0 10px",
          }}
        >
          Cheapest
        </span>
      </div>
      <div className="col-12 col-md-9">
        {data?.row?.map((item, index) => (
          <div key={index} className="m-2 d_grid_4">
            <div>
              <input type="checkbox" name="check1" id="" />
            </div>
            <div>
              <img src={usAirLogo} alt="" />
              <img src={usAirLogo} alt="" className="ms-4" />
            </div>
            <div className="ms-5">
              <b>{item?.time}</b>
              <p>{item?.route}</p>
            </div>
            <div>
              <b>{item?.steps}</b>
              <p>{item?.routeCode}</p>
            </div>
            <div>
              <b>{item?.timeCount}</b>
            </div>
          </div>
        ))}
      </div>
      <div className="col-12 col-md-3 p-2">
        <div type="">
          <img src={Debit} alt="" srcset="" />
          <h1>$ {data?.header?.amount}</h1>
          <p>{data?.header?.airlines}</p>
          <button
            className="btn-primary ps-5 pe-5"
            style={{ borderRadius: "5px" }}
          >
            View Deal
          </button>
        </div>
      </div>
      <div
        className="col-12 p-2"
        style={{
          backgroundColor: "#F9FAFD",
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      >
        <div className="d-flex justify-content-between">
          <p style={{ fontWeight: "500" }}>
            Qatar Airways, Alaska Airlines <span>• Codeshares available</span>{" "}
          </p>
          <div className="pe-3">
            <ShareIcon className="me-5" />
            <FavoriteBorderIcon className="me-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
