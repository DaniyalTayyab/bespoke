import React from "react";

import Button from "../../../button/Button";

import { Background, Section, TextSection } from "./PeopleDriven.styles";

import img from "../../../../assets/imgs/people.jpg";

const PeopleDriven = () => {
  return (
    <Section>
      <Background>
        <img src={img} alt="not found" />
      </Background>
      <TextSection>
        <div style={{ lineHeight: "1.5" }}>
          <h2>Success story</h2>
          <h1>
            People-driven retail <span>Development</span>
          </h1>
        </div>
        <p>
          A textbook case of design thinking applied to re-architect Macy's
          in-store technology ecosystem.
        </p>
        <Button>Read more</Button>
      </TextSection>
    </Section>
  );
};

export default PeopleDriven;
