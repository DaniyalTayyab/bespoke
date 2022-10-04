import styled from "styled-components";

export const Section = styled.footer`
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 5rem;
`;

export const FirstRow = styled.div`
  height: 85%;
  width: 100%;
  /* background-color: lightblue; */

  display: flex;
`;

export const ColumnOne = styled.div`
  flex: 1.3;
  height: 100%;
  /* border-right: 1px solid aliceblue; */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding-left: 3rem;

  img {
    width: 9rem;
  }

  p {
    margin: 2rem 0;
    font-size: 1.2rem;
    line-height: 1.6;
  }

  h4 {
    font-size: 1.4rem;
  }

  form {
    margin: 0.3rem 0;

    input {
      padding: 0.5rem;
      margin: 1rem 0;
    }
  }
`;

export const Column = styled.div`
  flex: 1;
  height: 100%;
  /* border-right: 1px solid aliceblue; */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 0 2rem;

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
    }
  }
`;

export const SecondRow = styled.div`
  height: 15%;
  width: 95%;

  border-top: 1px solid ${(props) => props.theme.text};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Copyright = styled.div``;

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
