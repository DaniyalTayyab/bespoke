import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  width: 100%;

  position: relative;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextSection = styled.div`
  position: absolute;
  background-color: white;
  width: 45%;
  height: 65%;

  margin-top: 2rem;

  left: 10%;
  top: 10%;

  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 3rem;

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 100;
  }

  span {
    font-size: 3rem;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.5rem;
    width: 80%;
    opacity: 0.6;
  }
`;
