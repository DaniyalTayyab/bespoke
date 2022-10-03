import styled from "styled-components";

export const Section = styled.section`
  height: auto;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.grey};
  overflow: hidden;

  padding-bottom: 3rem;
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

  h3 {
    font-size: 2rem;
    font-weight: 100;
    margin-top: 1.5rem;
  }
`;

export const Expandable = styled.div`
  width: 90%;
  margin-top: 5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);

  row-gap: 2rem;
  column-gap: 3rem;

  padding: 1rem 0;
`;
