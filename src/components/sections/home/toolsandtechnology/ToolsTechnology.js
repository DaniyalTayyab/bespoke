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
          <div style={{ flex: "1" }}>
            <ToolAndTech
              title="Devices"
              iconsArray={[1, 2, 3, 4, 5]}
              style={{ gridRow: "1 / 2" }}
            />

            <ToolAndTech
              title="Presentation"
              iconsArray={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
              style={{ gridRow: "2 / 4" }}
            />
            <ToolAndTech
              title="Business logic"
              iconsArray={[1, 2, 3, 4, 5, 6]}
            />
          </div>
          <div style={{ flex: "1" }}>
            <ToolAndTech title="Frameworks" iconsArray={[1, 2, 3]} />
            <ToolAndTech title="Persistence" iconsArray={[1, 2, 3, 4, 5]} />
            <ToolAndTech title="Methodology" iconsArray={[1, 2, 3, 4, 5]} />
          </div>
        </ToolsContainer>
      </Container>
    </Section>
  );
};

export default ToolsTechnology;
