import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 50vh;
  background-color: ${(props) => props.theme.body};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h3 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1.3rem;
    text-align: center;
  }
`;
