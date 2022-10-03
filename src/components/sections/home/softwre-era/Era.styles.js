import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.primary};
  overflow: hidden;
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
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 350px;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.body};

  h2 {
    font-size: 3.2rem;
    font-weight: 100;
  }

  span {
    font-weight: 900;
  }

  p {
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.6;
    margin-top: 2.5rem;
  }
`;
