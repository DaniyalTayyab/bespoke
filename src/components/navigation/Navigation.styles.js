import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: ${(props) => props.theme.navHeight};

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1.2rem;

  box-shadow: 1px 0 5px 1px rgba(0, 0, 0, 0.2);

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
  @media (max-width: 990px) {
    display: inline-block;
  }
`;
