import React from "react";
import Title from "../../widgets/typography/title";
import Card from "./card";
import "./events.css";
import Image1 from "../images/img1.jpg";
import Image2 from "../images/img2.jpg";
import Image3 from "../images/img3.jpg";

const Events = () => {
  return (
    <div className="hero3">
      <div className="events_container">
        <Title color="black"> OUR EVENTS</Title>
        <div className="events">
          <Card
            image={Image1}
            title="MOrning Gathering"
            description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th "
          />
          <Card
            image={Image2}
            title="Spirit and Truth"
            description="The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. "
          />
          <Card
            image={Image3}
            title="Sunday School"
            description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th "
          />
        </div>
      </div>
    </div>
  );
};
export default Events;
