import styled from "styled-components";

export const Section = styled.section`
  height: 55rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  overflow: hidden;

  padding-bottom: 3rem;

  @media (max-width: 770px) {
    height: 103rem;
  }
`;

export const Container = styled.div`
  height: 90%;
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: 6rem;
`;

export const HeadingSection = styled.div`
  width: 80%;
  text-align: center;

  h2 {
    font-size: 3.3rem;

    span {
      font-weight: 100;
      opacity: 0.7;
    }
  }

  @media (max-width: 770px) {
    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 2.2rem;
    }
  }
`;

export const ExperienceSection = styled.div`
  width: 80%;
  margin-top: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 0;

  @media (max-width: 1440px) {
    width: 90%;
  }

  @media (max-width: 1240px) {
    width: 95%;
  }

  @media (max-width: 1150px) {
    width: 97%;
  }

  @media (max-width: 1120px) {
    width: 97%;
  }

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;
