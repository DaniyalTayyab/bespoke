import React from "react";
import ExpandableBar from "../../../expandableBar/ExpandableBar";

import {
  Section,
  Container,
  HeadingSection,
  Expandable,
} from "./Services.styles";

import services from "../../../../utils/services";

const Services = () => {
  return (
    <Section>
      <Container>
        <HeadingSection>
          <h2>
            <span>Our</span> Techilab Software Development services
          </h2>
          <h3>are designed to enable customers across diverse initiatives​</h3>
        </HeadingSection>
        <Expandable>
          {services.map((service, index) => (
            <ExpandableBar
              key={index}
              title={service.title}
              heading={service.heading}
              subHeading={service.subHeading}
            />
          ))}
        </Expandable>
      </Container>
    </Section>
  );
};

export default Services;
