import styled from "styled-components";
// import background from "../../../../assets/imgs/hero-image.jpg";

export const Section = styled.section`
  width: 100%;
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};

  display: flex;

  position: relative;
`;

export const Left = styled.div`
  flex: 1;
  min-height: 100%;
  background-color: #f7f7f7;
`;

export const Right = styled.div`
  flex: 3;
  min-height: 100%;
`;

export const TextSection = styled.div`
  position: absolute;
  background-color: white;
  width: 40%;
  height: 85%;

  left: 10%;
  top: 10%;

  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 3rem;

  h1 {
    font-size: 4rem;
  }

  span {
    font-size: 4rem;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.7rem;
    width: 80%;
    margin-top: 4rem;
    opacity: 0.6;
  }
`;
