import { useState } from "react";

import {
  Container,
  Title,
  Icon,
  Heading,
  SubHeading,
  ExpandableContainer,
} from "./ExpandableBar.styles";

const ExpandableBar = ({ title, heading, subHeading }) => {
  const [collapse, setCollapse] = useState(false);

  const handleClick = () => {
    setCollapse((prevState) => !prevState);
  };

  return (
    <div>
      <Container onClick={handleClick} heading={title}>
        <Title>{title}</Title>
        {/* <Icon>{collapse ? "-" : "+"}</Icon> */}
        <Icon>-</Icon>
      </Container>
      <ExpandableContainer clicked={collapse}>
        <Heading>{heading}</Heading>
        <SubHeading>{subHeading}</SubHeading>
      </ExpandableContainer>
    </div>
  );
};

export default ExpandableBar;
