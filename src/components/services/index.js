import React from "react";
import Title from "../../widgets/typography/title";
import ServiceCard from "./service_card";
import { FaHeart, FaPagelines, FaUsers } from "react-icons/fa";
import "./services.css";

const Services = () => {
  return (
    <div className="hero">
      <div className="services_container">
        <Title color="#222">Statement of Faith</Title>
        <div className="services">
          <ServiceCard
            title="What we Believe"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            logo={<FaPagelines className="icons" />}
          />
          <ServiceCard
            title="Who We Are"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            logo={<FaUsers className="icons" />}
          />
          <ServiceCard
            title="How We Live"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            logo={<FaHeart className="icons" />}
          />
        </div>
      </div>
    </div>
  );
};
export default Services;
