import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.hidden ? "block" : "none")};
  position: absolute;
  top: 7rem;
  left: 60%;

  transform: translate(-60%);

  width: 25rem;
  height: 12rem;

  z-index: 10;

  background-color: ${(props) => props.theme.body};
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
`;
