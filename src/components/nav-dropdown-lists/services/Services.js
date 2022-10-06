import React from "react";

import { Container, Content, MenuItem } from "./Services.styles";
import { BsArrowRight } from "react-icons/bs";

const Services = ({ hidden }) => {
  return (
    <Container hidden={hidden}>
      <Content>
        <MenuItem>Cloud</MenuItem>
        <MenuItem>Data</MenuItem>
        <MenuItem>TechiLab</MenuItem>
        <MenuItem>Microsoft Power Platform</MenuItem>
        <MenuItem>Microsoft Dynamic 365</MenuItem>
        <MenuItem>
          &nbsp;
          <BsArrowRight /> &nbsp; Microsoft Dynamics ERP
        </MenuItem>
        <MenuItem>
          &nbsp;
          <BsArrowRight /> &nbsp; Microsoft Dynamics CRM
        </MenuItem>
      </Content>
    </Container>
  );
};

export default Services;
