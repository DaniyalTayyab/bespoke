import React from "react";

import {
  Card,
  ImgContainer,
  Title,
  Description,
} from "./ExperienceCard.styels";

const ExperienceCard = ({ item }) => {
  const { img, title, description } = item;
  console.log(img);
  return (
    <Card>
      <ImgContainer>
        <img src={img} alt="not found" />
      </ImgContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default ExperienceCard;
