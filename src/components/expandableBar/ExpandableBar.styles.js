import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  border: 1px solid #e5e5e5;

  color: ${(props) =>
    props.heading === "Managed Services" || props.heading === "Mobility"
      ? "-100px"
      : "0"};
`;

export const Title = styled.p`
  text-transform: capitalize;
  font-size: 1.5rem;
  margin-left: 2rem;
`;

export const Icon = styled.span`
  margin-right: 2rem;
  font-size: 2.5rem;
  color: ${(props) => props.theme.primary};
`;

export const ExpandableContainer = styled.div`
  /* display: ${(props) => (props.clicked ? "block" : "none")}; */
  width: 100%;
  height: 23.5;
  background-color: ${(props) => props.theme.body};

  padding: 2rem;
`;

export const Heading = styled.h2`
  width: 100%;
  font-size: 1.3rem;
`;

export const SubHeading = styled.h3`
  width: 100%;
  font-size: 1.3rem;
  font-weight: 200;
  margin-top: 1rem;
  line-height: 1.8;
  opacity: 0.8;
`;
