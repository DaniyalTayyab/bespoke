import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 32%;
  height: 25rem;

  padding: 0.5rem;

  @media (max-width: 770px) {
    width: 100%;
    /* justify-content: center; */
    align-items: center;
    text-align: center;
  }
`;

export const ImgContainer = styled.div`
  width: 30%;

  img {
    width: 9rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  line-height: 1.8;
`;
