import React from "react";
import ExperienceCard from "../../../experience-card/ExperienceCard";

import {
  Section,
  Container,
  HeadingSection,
  ExperienceSection,
} from "./Experienct.styles";

import experience from "../../../../utils/experienceCard";

const Experience = () => {
  return (
    <Section>
      <Container>
        <HeadingSection>
          <h2>
            <span>The Techilab</span> experience
          </h2>
        </HeadingSection>
        <ExperienceSection>
          {experience.map((experience, index) => (
            <ExperienceCard key={index} item={experience} />
          ))}
        </ExperienceSection>
      </Container>
    </Section>
  );
};

export default Experience;
