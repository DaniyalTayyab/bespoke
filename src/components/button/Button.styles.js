import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.primary};

  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.body};

  cursor: pointer;

  font-weight: 600;
  letter-spacing: 1px;

  &:hover {
    opacity: 0.9;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  }
`;
