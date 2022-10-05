import React from "react";

import { Container } from "./EraCard.styles";

const EraCard = ({ image, text }) => {
  return (
    <Container>
      <img src={image} />
      <p>{text}</p>
    </Container>
  );
};

export default EraCard;
