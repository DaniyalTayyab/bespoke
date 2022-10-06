import styled from "styled-components";
import people from "../../../../assets/imgs/people.jpg";

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 55rem;
  width: 100%;

  position: relative;

  @media (max-width: 770px) {
    height: 40rem;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${people});
  background-position: center;
  background-size: cover;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextSection = styled.div`
  flex-wrap: wrap;
  position: absolute;
  background-color: white;

  width: 50rem;
  height: 65%;

  margin-top: 2rem;

  left: 18%;
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

    span {
      letter-spacing: 1px;
      font-weight: 100;
    }
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 100;
  }

  p {
    font-size: 1.5rem;
    /* width: 80%; */
    opacity: 0.6;
  }

  @media (max-width: 770px) {
    left: 5%;
    top: 10%;

    h1 {
      font-size: 2.5rem;

      span {
        letter-spacing: 1px;
        font-weight: 100;
      }
    }
  }

  @media (max-width: 550px) {
    top: 8%;
    width: 90%;
    height: 80%;
  }
`;
