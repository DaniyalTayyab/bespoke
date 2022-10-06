import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.hidden ? "block" : "none")};
  position: absolute;
  top: 7rem;
  left: 50%;

  transform: translate(-50%);

  width: 25rem;
  height: 35rem;
  background-color: ${(props) => props.theme.body};
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);
  z-index: 10;
  padding: 1.5rem;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 5rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};

  padding: 1rem;
  cursor: pointer;

  display: flex;

  align-items: center;

  transition: all 0.2s ease;

  &:hover {
    background-color: #dfdfdf;
    border-left: 2px solid ${(props) => props.theme.primary};
  }
`;
