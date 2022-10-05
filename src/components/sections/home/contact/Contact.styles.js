import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 35rem;
  background-color: ${(props) => props.theme.body};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h3 {
    font-size: 2.2rem;
  }

  p {
    width: 60%;
    font-size: 1.8rem;
    text-align: center;
    margin-top: -5rem;
    margin-bottom: -5rem;
    opacity: 0.6;
  }

  @media (max-width: 1440px) {
    margin-top: -10rem;
    h3 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.4rem;
      width: 90%;
    }
  }

  @media (max-width: 770px) {
    margin-top: -10rem;
    h3 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.4rem;
      width: 90%;
    }
  }

  @media (max-width: 550px) {
    margin-top: -10rem;
    h3 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.4rem;
      word-break: break-word;
      width: 90%;
    }
  }
`;
