import React from "react";
import Button from "../../widgets/button";
import Para from "../../widgets/typography/paragraph";
import Title from "../../widgets/typography/title";
import "./banner.css";
import { FaCalendarAlt, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <div id="banner">
      <div className="banner_container">
        <div className="banner">
          <div className="row">
            <Para>
              {" "}
              <FaCalendarAlt />
              Monday,10:00am ; Friday,10:00am
            </Para>
            <Title className="title1">Welcome to our church</Title>
          </div>
          <div className="row">
            <Para>
              {" "}
              <FaMapMarkerAlt />
              St.Perl Church
            </Para>
            <Para>
              <FaLocationArrow />
              510, 102th Avv, NE,Bellevue, WA 68005
            </Para>
          </div>
          <div className="row2">
            <Button className="btn1"> Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
