import styled from "styled-components";
// import background from "../../../../assets/imgs/hero-image.jpg";

export const Section = styled.section`
  width: 100%;
  height: 50rem;

  display: flex;

  position: relative;
`;

export const Left = styled.div`
  flex: 1 2 auto;
  min-height: 100%;
  background-color: #f7f7f7;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Right = styled.div`
  flex: 2.2;
  min-height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextSection = styled.div`
  position: absolute;
  background-color: white;
  width: 55rem;
  min-height: 40.4rem;
  padding-top: 7.2rem;
  padding-bottom: 7.2rem;

  left: 20%;
  top: 12%;

  box-shadow: 2px 2px 20px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 3rem;

  overflow-wrap: break-word;

  h1 {
    font-size: 5rem;
    line-height: 1;
    margin-top: -5rem;
  }

  span {
    font-size: 5rem;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.7rem;
    width: 80%;
    margin-top: 4rem;
    opacity: 0.6;
  }

  @media (max-width: 1400px) {
    width: 42rem;

    h1 {
      font-size: 4rem;
    }

    span {
      font-size: 4rem;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 1000px) {
    left: 20px;
  }

  @media (max-width: 770px) {
    width: 80%;
    min-height: 1px;
  }

  @media (max-width: 410px) {
    span {
      font-size: 3rem;
    }
  }
`;
