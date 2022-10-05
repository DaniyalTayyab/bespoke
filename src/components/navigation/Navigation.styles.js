import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: ${(props) => props.theme.navHeight};

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1.2rem;

  box-shadow: 1px 0 5px 1px rgba(0, 0, 0, 0.2);

  position: relative;

  @media (max-width: 990px) {
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 100%;

  img {
    width: 6rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 40rem;
  font-size: 1.4rem;

  @media (max-width: 990px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-weight: 500;

  span {
    margin-right: 0.5rem;
  }

  span:hover {
    color: ${(props) => props.theme.primary};
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13rem;

  @media (max-width: 990px) {
    margin-right: 1rem;
    width: 18rem;
  }
`;

export const MenuIcon = styled.span`
  display: none;

  cursor: pointer;

  @media (max-width: 990px) {
    display: inline-block;
  }
`;

export const Drawer = styled.div`
  display: ${(props) => (props.hidden ? "block" : "none")};
  width: 100%;
  height: 20rem;

  position: absolute;

  z-index: 100;

  top: 7rem;
  left: 0;
  right: 0;

  background-color: ${(props) => props.theme.body};
`;

export const DrawerMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.4rem;
`;

export const DrawerMenuItem = styled.div`
  width: 100%;
  height: 5rem;
  border: 1px solid #e7e7e7;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;

  font-size: 1.4rem;
  font-weight: 700;
`;

export const SearchBarContainer = styled.div`
  display: ${(props) => (props.hidden ? "block" : "none")};
  width: 80%;
  height: 6rem;
  position: absolute;

  right: 3rem;

  @media (max-width: 500px) {
    width: 70%;
  }
`;

export const SearchBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;

  right: 6rem;

  padding: 0 2rem;

  input {
    width: 92%;
    height: 4rem;
    padding: 0 1rem;
    border-radius: 5px;
    border: 1px solid #d2d2d2;
  }

  @media (max-width: 500px) {
    input {
      width: 70%;
    }
  }
`;
