import styled from "styled-components";

export const Section = styled.footer`
  height: 65rem;
  width: 100%;
  background-color: ${(props) => props.theme.grey};
  color: ${(props) => props.theme.text};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 8rem;

  @media (max-width: 760px) {
    height: 90rem;
  }

  @media (max-width: 350px) {
    height: 130rem;
  }
`;

export const FirstRow = styled.div`
  height: 85%;
  width: 70%;

  display: flex;

  @media (max-width: 1100px) {
    width: 95%;
  }

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const ColumnOneWrapper = styled.div`
  height: 100%;
  flex: 1.3;
`;

export const ColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  img {
    width: 9rem;
  }

  p {
    width: 70%;
    margin: 2rem 0;
    font-size: 1.2rem;
    line-height: 1.6;
    word-break: break-word;
  }

  h4 {
    font-size: 1.4rem;
  }

  form {
    margin: 0.3rem 0;

    /* display: flex; */

    input {
      padding: 0.5rem;
      margin: 1rem 0;
      width: 25rem;
      height: 3rem;
      background-color: ${(props) => props.theme.body};
      border: none;
      border: 1px solid #282c33;
    }
  }

  @media (max-width: 760px) {
    p {
      width: 100%;
    }

    form {
      margin: 0.3rem 0;
      width: 100%;

      input {
        width: 100%;
      }
    }

    button {
      margin-top: 1rem;
      margin-bottom: 5rem;
    }
  }
`;

export const ColumnWrapper = styled.div`
  flex: 2;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 350px) {
    flex-direction: column;
    margin-bottom: 3rem;
  }
`;

export const Column = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  /* padding: 0 2rem; */

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    font-size: 1.2rem;
    line-height: 2.5;

    li {
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

export const SecondRow = styled.div`
  height: 15%;
  width: 70%;

  border-top: 1px solid ${(props) => props.theme.text};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1100px) {
    width: 95%;
  }
`;

export const Copyright = styled.div`
  word-wrap: break-word;
`;

export const SocailContainer = styled.div`
  width: 12rem;
  color: #808080;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`;
