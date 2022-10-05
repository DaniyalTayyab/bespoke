import React, { useState } from "react";

import {
  Nav,
  LogoContainer,
  Menu,
  MenuItem,
  ButtonSection,
  MenuIcon,
} from "./Navigation.styles";

import Logo from "../../assets/icons/logo.png";

import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";

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
        <Button>Contact</Button>
        <MenuIcon>
          <IoMenuOutline style={{ fontSize: "2.5rem" }} />
        </MenuIcon>
        <BsSearch style={{ fontSize: "1.7rem" }} />
      </ButtonSection>
    </Nav>
  );
};

export default Navigation;
