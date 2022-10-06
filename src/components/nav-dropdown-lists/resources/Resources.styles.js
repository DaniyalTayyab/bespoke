import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.hidden ? "block" : "none")};
  position: absolute;
  top: 7rem;
  left: 70%;

  transform: translate(-70%);

  width: 60rem;
  height: 40rem;

  background-color: ${(props) => props.theme.body};

  z-index: 10;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
`;

export const LeftMenu = styled.div`
  flex: 1.4;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  flex-wrap: wrap;

  background-color: ${(props) => props.theme.grey};
`;

export const WallOfFame = styled.div`
  height: 100%;
  flex: 2;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;

  justify-content: space-evenly;

  p {
    margin-top: -3rem;
    padding: 0 3rem;
  }

  img {
    width: 30rem;
    padding-left: 3rem;
  }
`;

export const MenuItem = styled.div`
  height: 5rem;
  width: 100%;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};

  border-bottom: 1px solid #dfdfdf;

  padding: 1.5rem;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  color: ${(props) => props.theme.text};

  padding: 0 3rem;
  flex-wrap: wrap;
`;

export const GlowTitle = styled.h2`
  font-size: 1.6rem;
  color: ${(props) => props.theme.text};

  padding: 0 3rem;
  flex-wrap: wrap;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;
