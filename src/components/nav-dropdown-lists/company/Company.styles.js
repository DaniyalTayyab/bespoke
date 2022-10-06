import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.hidden ? "block" : "none")};
  width: 90rem;
  height: 34rem;

  position: absolute;
  top: 7rem;
  left: 50%;
  transform: translate(-50%);

  background-color: ${(props) => props.theme.body};
  color: white;
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
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  flex-wrap: wrap;

  background-color: ${(props) => props.theme.grey};
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

export const WallOfFame = styled.div`
  height: 100%;
  flex: 2;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  justify-content: space-around;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  color: ${(props) => props.theme.text};

  padding: 2rem;
  flex-wrap: wrap;
`;

export const Fame = styled.div`
  display: flex;
  height: 13rem;

  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  flex-wrap: wrap;
`;

export const LeftWall = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const RightWall = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Certificate = styled.div`
  height: 15rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  flex-wrap: wrap;
`;
