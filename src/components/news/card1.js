import React from "react";
import Heading from "../../widgets/typography/heading";
import "./card1.css";

const Card1 = (props) => {
  return (
    <div className="eventCard">
      <img src={props.image} width={300} height={180} />
      <Heading color="black" className="heading0">
        {props.title}
      </Heading>

      <p className="desc">{props.description}</p>
    </div>
  );
};
export default Card1;
