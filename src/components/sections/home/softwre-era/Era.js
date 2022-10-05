import React from "react";

import {
  Section,
  Container,
  CardSection,
  TextSection,
  CardOne,
  CardTwo,
  CardThree,
  CardFour,
  CardFive,
  // CardContainerOne,
  // CardContainerTwo,
  // CardContainerThree,
} from "./Era.styles";

import EraCard from "../../../era-card/EraCard";

import operational from "../../../../assets/imgs/operational.png";
import agility from "../../../../assets/imgs/agility.png";
import stakeholder from "../../../../assets/imgs/stakeholder.png";
import collboration from "../../../../assets/imgs/collection.png";
import startigic from "../../../../assets/imgs/startigic.png";

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
        <CardSection>
          <CardOne>
            <EraCard
              image={operational}
              text="Operational and process efficiency​"
            />
          </CardOne>
          <CardTwo>
            <EraCard image={agility} text="Agility and scalability" />
          </CardTwo>
          <CardThree>
            <EraCard
              image={stakeholder}
              text="Stakeholder insights and excellence​​"
            />
          </CardThree>
          <CardFour>
            <EraCard
              image={collboration}
              text="Collaboration and communication"
            />
          </CardFour>
          <CardFive>
            <EraCard image={startigic} text="Strategic enablement​" />
          </CardFive>
        </CardSection>
      </Container>
    </Section>
  );
};

export default Era;

{
  /* <CardContainerOne>
            <EraCard
              image={operational}
              text="Operational and process efficiency​"
            />
            <EraCard image={agility} text="Agility and scalability" />
          </CardContainerOne>
          <CardContainerTwo>
            <EraCard
              image={operational}
              text="Operational and process efficiency​"
            />
            <EraCard image={agility} text="Agility and scalability" />
          </CardContainerTwo>
          <CardContainerThree>
            <EraCard image={agility} text="Agility and scalability" />
          </CardContainerThree> */
}
