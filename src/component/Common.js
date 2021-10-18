import { NavLink } from "react-router-dom";
import image from "../component/Images/image.svg";
import "./css/Common.css";

const Common = (props) => {
  return (
    <section>
      <div className="container  ">
        <div className="row d-flex align-items-center">
          <div className="col-sm-6">
            <h2>
              <strong>{props.Name}</strong> <br />
              <strong className="titleBrand">DigitalDeals</strong>
            </h2>
            <h6 className="mt-3">{props.para}</h6>
            <NavLink
              className="btn btn-outline-primary getStarted mt-3"
              to={props.link}
            >
              {props.btnData}
            </NavLink>
          </div>
          <div className="col-sm-6 mt-3">
            <img
              className="showcaseIMG pulse"
              src={image}
              alt="imageShow"
              srcset=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Common;
