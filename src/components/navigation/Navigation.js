import React, { useState } from "react";

import {
  Nav,
  LogoContainer,
  Menu,
  MenuItem,
  ButtonSection,
  MenuIcon,
  Drawer,
  DrawerMenu,
  DrawerMenuItem,
  SearchBarContainer,
  SearchBarWrapper,
} from "./Navigation.styles";

import Logo from "../../assets/icons/logo.png";

import { AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";

import Button from "../button/Button";
import { ImCross } from "react-icons/im";

const Navigation = () => {
  const [hidden, setHidden] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const toggleDrawer = () => {
    setHidden((prevState) => !prevState);
  };

  const toggleSearchBar = () => {
    setSearchBar(!searchBar);
    console.log(searchBar);
  };

  return (
    <Nav>
      <Drawer hidden={hidden}>
        <DrawerMenu>
          <DrawerMenuItem>
            Company <AiFillCaretDown />
          </DrawerMenuItem>
          <DrawerMenuItem>
            Services <AiFillCaretDown />
          </DrawerMenuItem>
          <DrawerMenuItem>
            Solution <AiFillCaretDown />
          </DrawerMenuItem>
          <DrawerMenuItem>
            Resources <AiFillCaretDown />
          </DrawerMenuItem>
        </DrawerMenu>
      </Drawer>
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
          <IoMenuOutline
            onClick={toggleDrawer}
            style={{ fontSize: "2.5rem" }}
          />
        </MenuIcon>
        <BsSearch onClick={toggleSearchBar} style={{ fontSize: "1.7rem" }} />
        <SearchBarContainer hidden={searchBar}>
          <SearchBarWrapper>
            <input placeholder="Search insights, services and case studies" />
            <ImCross
              onClick={toggleSearchBar}
              style={{ color: "red", fontSize: "2rem", cursor: "pointer" }}
            />
          </SearchBarWrapper>
        </SearchBarContainer>
      </ButtonSection>
    </Nav>
  );
};

export default Navigation;
