import React from "react";

import {
  Section,
  Container,
  HeadingSection,
  Expandable,
} from "../services/Services.styles";

import faqs from "../../../../utils/faq";
import ExpandableBar from "../../../expandableBar/ExpandableBar";

const Faq = () => {
  return (
    <Section>
      <Container>
        <HeadingSection>
          <h2>
            <span>Got more questions about</span> TechiLab Software Development?
          </h2>
          <h3>Here's everything you need to know​</h3>
        </HeadingSection>
        <Expandable>
          {faqs.map((faq, index) => (
            <ExpandableBar
              key={index}
              title={faq.title}
              subHeading={faq.description}
            />
          ))}
        </Expandable>
      </Container>
    </Section>
  );
};

export default Faq;
