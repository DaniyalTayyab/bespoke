import React from "react";

import {
  Nav,
  LogoContainer,
  Menu,
  MenuItem,
  ButtonSection,
} from "./Navigation.styles";

import Logo from "../../assets/icons/logo.png";

import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import Button from "../button/Button";

const Navigation = () => {
  return (
    <Nav>
      <LogoContainer>
        <img src={Logo} alt="techilab" />
      </LogoContainer>
      <Menu>
        <MenuItem>
          <span>Company</span> <AiFillCaretDown />
        </MenuItem>
        <MenuItem>
          <span>Services</span> <AiFillCaretDown />
        </MenuItem>
        <MenuItem>
          <span>Solution</span> <AiFillCaretDown />
        </MenuItem>
        <MenuItem>
          <span>Resources</span> <AiFillCaretDown />
        </MenuItem>
      </Menu>
      <ButtonSection>
        <Button>Contact</Button> <BsSearch style={{ fontSize: "1.7rem" }} />
      </ButtonSection>
    </Nav>
  );
};

export default Navigation;
