import React from "react";

import {
  Container,
  Content,
  LeftMenu,
  WallOfFame,
  MenuItem,
  LeftWall,
  RightWall,
  Title,
  Fame,
  Certificate,
} from "./Company.styles";

import LeftFame from "../../../assets/imgs/left-fame.png";
import RightFame from "../../../assets/imgs/right-fame.png";
import Certificates from "../../../assets/imgs/certificates.png";

const Company = ({ hidden }) => {
  return (
    <Container hidden={hidden}>
      <Content>
        <LeftMenu>
          <MenuItem>About</MenuItem>
          <MenuItem>Life at TechiLab</MenuItem>
          <MenuItem>Careers</MenuItem>
          <MenuItem>Sustainability</MenuItem>
        </LeftMenu>
        <WallOfFame>
          <Title>Wall of fame</Title>
          <Fame>
            <LeftWall>
              <img src={LeftFame} alt="Left fame" />
            </LeftWall>
            <RightWall>
              <img src={RightFame} alt="right fame" />
            </RightWall>
          </Fame>
          <Certificate>
            <img src={Certificates} alt="certificates" />
          </Certificate>
        </WallOfFame>
      </Content>
    </Container>
  );
};

export default Company;
