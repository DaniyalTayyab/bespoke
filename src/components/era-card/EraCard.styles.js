import styled from "styled-components";

export const Container = styled.div`
  min-width: 0;
  width: 15rem;
  height: 15rem;

  /* flex: 0 1 auto; */
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  border-radius: 5px;

  margin: 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10rem;
  }

  p {
    max-width: 90%;
    text-align: center;
    font-size: 1.3rem;
  }

  @media (max-width: 1440px) {
    width: 13rem;
    height: 16rem;
  }

  @media (max-width: 990px) {
    width: 27rem;
    height: 15rem;
  }

  @media (max-width: 880px) {
    width: 24rem;
    height: 15rem;
  }

  @media (max-width: 790px) {
    width: 96.5vw;
    margin: 1rem 0;
  }
`;
