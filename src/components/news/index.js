import React from "react";
import Title from "../../widgets/typography/title";
import I1 from "../images/i1.jpg";
import I2 from "../images/i2.jpg";
import I3 from "../images/i3.jpg";
import Card1 from "./card1";
import "./news.css";
const News = () => {
  return (
    <div section="hero_sec">
      <div className="news_container">
        <Title color="black" className="latest">
          LATEST NEWS
        </Title>
        <p className="serve">Serving & Sharing</p>
        <div className="news">
          <Card1
            image={I1}
            title="Nature"
            description="The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin."
          />
          <Card1
            image={I2}
            title="Rain"
            description="In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero's work, with the most notable passage excerpted "
          />
          <Card1
            image={I3}
            title="Environment"
            description="McClintock's eye for detail certainly helped narrow the whereabouts of lorem ipsum's origin, however, the “how and when” still remain something of a mystery, with competing theories "
          />
        </div>
      </div>
    </div>
  );
};
export default News;
