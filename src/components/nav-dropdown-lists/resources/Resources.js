import React from "react";

import {
  Container,
  LeftMenu,
  WallOfFame,
  Content,
  MenuItem,
  Title,
  GlowTitle,
} from "./Resources.styles";

import resource from "../../../assets/imgs/resource.png";

const Resources = ({ hidden }) => {
  return (
    <Container hidden={hidden}>
      <Content>
        <LeftMenu>
          <MenuItem>Blogs</MenuItem>
          <MenuItem>Case studies</MenuItem>
          <MenuItem>News</MenuItem>
          <MenuItem>Events and Webinars</MenuItem>
        </LeftMenu>
        <WallOfFame>
          <Title>What's new</Title>
          <img src={resource} alt="reosurce" />
          <GlowTitle>Macy’s people-driven retail experience</GlowTitle>
          <p>
            An employee experience framework for Macy's to provide integrated
            capabilities at its stores.
          </p>
        </WallOfFame>
      </Content>
    </Container>
  );
};

export default Resources;
