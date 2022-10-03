import React from "react";
import ToolAndTech from "../../../toolandtech/ToolAndTech";

import {
  Section,
  Container,
  HeadingSection,
  ToolsContainer,
} from "./ToolsTechnology.styles";

const ToolsTechnology = () => {
  return (
    <Section>
      <Container>
        <HeadingSection>
          <h2>
            Tools <span>and</span> technologies
          </h2>
          <p>to maximize value for your business</p>
        </HeadingSection>
        <ToolsContainer>
          <ToolAndTech title="Devices" iconsArray={[1, 2, 3, 4, 5]} />
          <ToolAndTech title="Frameworks" iconsArray={[1, 2, 3]} />
          <ToolAndTech
            title="Presentation"
            iconsArray={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
          />
          <ToolAndTech title="Persistence" iconsArray={[1, 2, 3, 4, 5]} />
          <ToolAndTech title="Methodology" iconsArray={[1, 2, 3, 4, 5]} />
          <ToolAndTech title="Business logic" iconsArray={[1, 2, 3, 4, 5, 6]} />
        </ToolsContainer>
      </Container>
    </Section>
  );
};

export default ToolsTechnology;
