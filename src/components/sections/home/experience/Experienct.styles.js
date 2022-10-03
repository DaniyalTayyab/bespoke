import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  overflow: hidden;

  padding-bottom: 3rem;
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
    font-size: 2.9rem;

    span {
      font-weight: 100;
    }
  }
`;

export const ExperienceSection = styled.div`
  width: 100%;
  margin-top: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 0;
`;
