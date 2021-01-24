import React from "react";
import { FaCalendarAlt, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import Heading from "../../widgets/typography/heading";
import Para from "../../widgets/typography/paragraph";
import "./about.css";
import Time from "./time";

const About = () => {
  return (
    <div className="hero1">
      <div className="about_container">
        <div className="column_66">
          <Heading color="black" className="heading1">
            Welcome to our Church
          </Heading>
          <Para color=" #495057">
            {" "}
            <FaCalendarAlt />
            Monday,10:00am ; Friday,10:00am
          </Para>
          <Para color="#495057">
            {" "}
            <FaMapMarkerAlt />
            St.Perl Church
          </Para>
          <Para color="#495057">
            {" "}
            <FaLocationArrow />
            510, 102th Avv, NE,Bellevue, WA 68005
          </Para>
        </div>
        <div className="column_33">
          <div className="gaps">
            {" "}
            <Time num="200" data="Days" />
          </div>
          <div className="gaps">
            {" "}
            <Time num="16" data="Hours" />
          </div>
          <div className="gaps">
            {" "}
            <Time num="42" data="Minutes" />
          </div>
          <div className="gaps">
            {" "}
            <Time num="40" data="Seconds" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
