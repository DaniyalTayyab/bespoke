import styled from "styled-components";

export const Section = styled.section`
  /* height: 100vh; */
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  padding: 3rem 0;
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

  p {
    font-size: 2rem;
  }
`;

export const ToolsContainer = styled.div`
  width: 100%;
  margin-top: 5rem;

  display: flex;
  row-gap: 3rem;
  column-gap: 2rem;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;
