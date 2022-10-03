import React from "react";

import { Section, Container, ImageSection, TextSection } from "./Era.styles";

import eraImage from "../../../../assets/imgs/era.png";

const Era = () => {
  return (
    <Section>
      <Container>
        <TextSection>
          <h2>
            The era of <br />
            <span>Software is eating the world</span>
          </h2>
          <p>
            More than two-thirds of the global economy is going to be
            digitally-based by the end of 2021, according to IDC.
          </p>
        </TextSection>
        <ImageSection>
          <img src={eraImage} alt="era" />
        </ImageSection>
      </Container>
    </Section>
  );
};

export default Era;
