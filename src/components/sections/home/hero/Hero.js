import React from "react";

import { Section, Left, Right, TextSection } from "./Hero.styles";

const Hero = () => {
  return (
    <Section>
      <Left />
      <Right />
      <TextSection>
        <h1>Techilab Software</h1>
        <span>Development</span>
        <p>
          Craft, integrate and maintain applications and software that fit your
          vision.
        </p>
      </TextSection>
    </Section>
  );
};

export default Hero;
