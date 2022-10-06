import React from "react";

import { Container } from "./Solutions.styles";
import { Content, MenuItem } from "../services/Services.styles";

const Solutions = ({ hidden }) => {
  return (
    <Container hidden={hidden}>
      <Content>
        <MenuItem>C-Analytics</MenuItem>
        <MenuItem>Shopper Value</MenuItem>
      </Content>
    </Container>
  );
};

export default Solutions;
