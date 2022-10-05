import styled from "styled-components";

export const Section = styled.section`
  height: 55rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.primary};
  overflow: hidden;

  @media (max-width: 990px) {
    height: 95rem;
  }

  @media (max-width: 790px) {
    height: 120rem;
  }
`;

export const Container = styled.div`
  height: 80%;
  width: 80%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 990px) {
    width: 100%;
    flex-direction: column;
  }
  /* 
  @media (max-width: 891px) {
    width: 100%;
    flex-direction: column;
  } */
`;

export const CardSection = styled.div`
  flex: 1;
  height: 100%;

  flex-wrap: wrap;

  display: flex;
  align-items: center;

  position: relative;

  @media (max-width: 990px) {
    margin-top: -12rem;
    width: 100%;
    margin-left: 2rem;
  }

  @media (max-width: 790px) {
    margin-top: 0.5rem;
    margin-left: 1rem;
  }
`;

export const CardOne = styled.div`
  position: absolute;
  left: 0;
  top: 1rem;

  @media (max-width: 790px) {
    position: static;
  }
`;

export const CardTwo = styled.div`
  position: absolute;
  left: 0;
  top: 18rem;

  @media (max-width: 1440px) {
    left: 0;
    top: 19rem;
  }

  @media (max-width: 790px) {
    position: static;
  }
`;

export const CardThree = styled.div`
  position: absolute;
  left: 17rem;
  top: 5rem;

  @media (max-width: 1440px) {
    left: 15rem;
  }

  @media (max-width: 990px) {
    left: 29rem;
  }

  @media (max-width: 880px) {
    left: 26rem;
  }

  @media (max-width: 790px) {
    position: static;
  }
`;

export const CardFour = styled.div`
  position: absolute;
  left: 17rem;
  top: 22rem;

  @media (max-width: 1440px) {
    left: 15rem;
    top: 23rem;
  }

  @media (max-width: 990px) {
    left: 29rem;
  }

  @media (max-width: 880px) {
    left: 26rem;
  }

  @media (max-width: 790px) {
    position: static;
  }
`;

export const CardFive = styled.div`
  position: absolute;
  left: 34rem;
  top: 13rem;

  @media (max-width: 1440px) {
    left: 30rem;
  }

  @media (max-width: 990px) {
    left: 58rem;
  }

  @media (max-width: 880px) {
    left: 52rem;
  }

  @media (max-width: 790px) {
    position: static;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.body};

  h2 {
    width: 80%;
    font-size: 2.9rem;
    font-weight: 100;
    line-height: 1.3;
  }

  span {
    font-size: 5rem;
    font-weight: 900;
  }

  p {
    width: 80%;

    font-size: 1.8rem;
    font-weight: 100;
    line-height: 1.6;
    margin-top: 2.5rem;
  }

  @media (max-width: 1360px) {
    h2 {
      width: 90%;
    }

    span {
      font-size: 4.5rem;
    }

    p {
      width: 90%;
    }
  }

  @media (max-width: 1200px) {
    span {
      font-size: 4rem;
    }
  }

  @media (max-width: 1100px) {
    span {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 1000px) {
    span {
      font-size: 3rem;
    }
  }

  @media (max-width: 990px) {
    width: 100%;

    h2 {
      width: 98%;
    }

    span {
      font-size: 4rem;
    }

    p {
      width: 98%;
      font-size: 2rem;
      margin-bottom: 5rem;
    }
  }

  @media (max-width: 766px) {
    span {
      font-size: 3rem;
    }

    p {
      width: 98%;
      font-size: 1.8rem;
      margin-bottom: 5rem;
    }
  }

  @media (max-width: 460px) {
    h2 {
      margin-top: 5rem;
    }
  }
`;

// export const CardContainerOne = styled.div`
//   min-width: 0;
//   min-height: 0;
//   overflow: hidden;
//   position: absolute;
//   left: 0;
//   top: 3rem;
// `;

// export const CardContainerTwo = styled.div`
//   min-width: 0;
//   min-height: 0;
//   overflow: hidden;

//   position: absolute;
//   left: 17rem;
//   top: 6rem;

//   @media (max-width: 1440px) {
//     left: 15rem;
//   }

//   @media (max-width: 891px) {
//     left: 29rem;
//   }

//   @media (max-width: 880px) {
//     left: 26rem;
//   }
// `;

// export const CardContainerThree = styled.div`
//   min-width: 0;
//   min-height: 0;
//   overflow: hidden;

//   position: absolute;
//   left: 34rem;
//   top: 15rem;

//   @media (max-width: 1440px) {
//     left: 30rem;
//   }

//   @media (max-width: 891px) {
//     left: 58rem;
//   }

//   @media (max-width: 880px) {
//     left: 52rem;
//   }
// `;
