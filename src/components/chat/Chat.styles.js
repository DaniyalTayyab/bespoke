import styled from "styled-components";

export const Container = styled.div`
  width: 5rem;
  height: 5rem;

  position: fixed;
  bottom: 3rem;
  left: 3rem;

  border-radius: 50%;

  background-color: ${(props) => props.theme.primary};

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 2rem;

  cursor: pointer;
`;
