import React from "react";

import { Container, Title, IconsContainer, Icon } from "./ToolAndTech.styles";
import img from "../../assets/icons/bulb.png";

const ToolAndTech = ({ title, iconsArray }) => {
  console.log(iconsArray);
  return (
    <Container>
      <Title>{title}</Title>
      <IconsContainer>
        {iconsArray?.map((item, index) => (
          <Icon key={index}>
            <img src={item} alt="not found" />
          </Icon>
        ))}
      </IconsContainer>
    </Container>
  );
};

export default ToolAndTech;
