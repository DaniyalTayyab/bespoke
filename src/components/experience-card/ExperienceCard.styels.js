import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 32%;
  height: 25rem;

  padding: 0.5rem;
`;

export const ImgContainer = styled.div`
  width: 30%;

  img {
    width: 10rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
`;

export const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
`;
