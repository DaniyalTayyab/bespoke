import styled from "styled-components";

export const Section = styled.section`
  height: 60rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: aliceblue; */
`;

export const Container = styled.div`
  height: 80%;
  width: 80%;

  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: pink; */

  /* @media (max-width: 1440px) {
    width: 70%;
  } */

  @media (max-width: 930px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: oldlace; */

  img {
    width: 55rem;
  }

  @media (max-width: 1200px) {
    img {
      width: 45rem;
    }
  }

  @media (max-width: 930px) {
    img {
      width: 45rem;
    }
  }

  @media (max-width: 800px) {
    img {
      width: 40rem;
      margin-top: 10rem;
    }
  }

  @media (max-width: 800px) {
    img {
      margin-top: 20rem;
    }
  }
`;

export const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* background-color: aliceblue; */

  h2 {
    width: 80%;
    font-size: 2.6rem;
    font-weight: 300;
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  p {
    width: 80%;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    line-height: 2;
  }

  @media (max-width: 1460px) {
    flex: 2 1 auto;
    width: 100%;
  }

  @media (max-width: 1200px) {
    h2 {
      line-height: 1.2;
      margin-bottom: 1rem;
      width: 90%;
    }

    p {
      width: 90%;
      margin-bottom: 1.4rem;
      line-height: 1.4;
    }
  }

  @media (max-width: 930px) {
    align-items: center;
    h2 {
      width: 90%;
      margin-bottom: 3rem;
    }

    p {
      width: 90%;
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 800px) {
    h2 {
      width: 100%;
    }

    p {
      width: 100%;
      font-size: 1.4rem;
    }
  }

  @media (max-width: 507px) {
    h2 {
      width: 110%;
    }

    p {
      width: 110%;
    }
  }
`;
