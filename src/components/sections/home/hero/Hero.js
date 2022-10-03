import React from "react";

import { Section, Left, Right, TextSection } from "./Hero.styles";
import background from "../../../../assets/imgs/hero-image.jpg";

const Hero = () => {
  return (
    <Section>
      <Left />
      <Right>
        <img
          src={background}
          alt="hero"
          style={{ width: "100%", height: "100%" }}
        />
      </Right>
      <TextSection>
        <h1>
          Techilab <br />
          Software
        </h1>
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
