import React from "react";
import { FaCalendarAlt, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import Heading from "../../widgets/typography/heading";
import "./card.css";

const Card = (props) => {
  return (
    <div className="eventCard">
      <img src={props.image} width={300} height={180} />
      <Heading color="black" className="heading0">
        {props.title}
      </Heading>
      <p className="fit">
        {" "}
        <FaCalendarAlt />
        Monday,10:00am ; Friday,10:00am
      </p>
      <p className="fit">
        {" "}
        <FaMapMarkerAlt />
        St.Perl Church
      </p>
      <p className="fit">
        {" "}
        <FaLocationArrow />
        510, 102th Avv, NE,Bellevue, WA 68005
      </p>
      <p className="desc">{props.description}</p>
    </div>
  );
};
export default Card;
