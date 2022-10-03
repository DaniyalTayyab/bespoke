import React from "react";

import { Section, Container, ImageSection, TextSection } from "./About.styles";

import AboutImage from "../../../../assets/imgs/about-img.png";

const About = () => {
  return (
    <Section>
      <Container>
        <ImageSection>
          <img src={AboutImage} alt="about" />
        </ImageSection>
        <TextSection>
          <h2>
            Whether you are an <strong>enterprise, startup</strong> or an
            <strong> accelerator</strong>, business landscape today requires
            agility and quick time-to-market for success
          </h2>
          <p>
            At Techilab, we translate your business needs and ideas into
            workable solutions and do it with agility while staying
            price-competitive.
          </p>
          <p>
            With a vast experience in building simple to highly complex techilab
            software applications, we support your entire journey from strategy
            to implementation to quality assurance to post-production.
          </p>
        </TextSection>
      </Container>
    </Section>
  );
};

export default About;
