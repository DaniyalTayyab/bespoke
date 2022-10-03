import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 80%;
  width: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 45rem;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 6rem;

  h2 {
    width: 80%;
    font-size: 2.6rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  p {
    width: 80%;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;
