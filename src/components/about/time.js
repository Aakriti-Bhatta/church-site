import React from "react";
import Title from "../../widgets/typography/title";
import "./time.css";

const Time = (props) => {
  return (
    <div>
      <Title className="nums">{props.num}</Title>
      <p className="date">{props.data}</p>
    </div>
  );
};
export default Time;
