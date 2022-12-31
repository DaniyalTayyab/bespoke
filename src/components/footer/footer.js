import React from "react";
import { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Theme";

import {
  Section,
  ColumnOne,
  Column,
  FirstRow,
  SecondRow,
  Copyright,
  SocailContainer,
  ColumnOneWrapper,
  ColumnWrapper,
} from "./footer.styles";

import Button from "../button/Button";

import logo from "../../assets/icons/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  //
  const handleForm = (event) => {
    event.preventDefault();
    alert("Form submited");
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    // <ThemeProvider theme={dark}>
    <Section>
      <FirstRow>
        <ColumnOneWrapper>
          <ColumnOne>
            <img src={logo} alt="logo" />
            <p>
              We nurture ecosystems of success by harnessing intelligent
              technologies and capitalizing on human ingenuity.
            </p>
            <h4>Join our mailing list</h4>
            <form onSubmit={handleForm}>
              <div>
                <input type="text" placeholder="Full name" />
              </div>
              <input type="email" placeholder="Email" /> <br />
              <Button type="submit" style={{ color: "#ffffff" }}>
                Submit
              </Button>
            </form>
          </ColumnOne>
        </ColumnOneWrapper>
        <ColumnWrapper>
          <Column>
            <h3>Services</h3>
            <ul>
              <li onClick={() => openInNewTab("#")}>Blockchain</li>
              <li onClick={() => openInNewTab("#")}>Web App Development</li>
              <li onClick={() => openInNewTab("#")}>IT Consultancy</li>
              <li onClick={() => openInNewTab("#")}>DevOps</li>
              <li onClick={() => openInNewTab("#")}>Shopify</li>
              <li onClick={() => openInNewTab("#")}>AWS</li>
              <li onClick={() => openInNewTab("#")}>Data Science & AI</li>
              <li onClick={() => openInNewTab("#")}>Internet Of Things</li>
            </ul>
          </Column>
          <Column>
            <h3>Solutions</h3>
            <ul>
              <li onClick={() => openInNewTab("#")}>Banking</li>
              <li onClick={() => openInNewTab("#")}>Capital Markets</li>
              <li onClick={() => openInNewTab("#")}>Enterprise Technology</li>
              <li onClick={() => openInNewTab("#")}>Manufacturing</li>
              <li onClick={() => openInNewTab("#")}>Healthcare</li>
              <li onClick={() => openInNewTab("#")}>Higher Education</li>
            </ul>
          </Column>
          <Column>
            <h3>Company</h3>
            <ul>
              <li onClick={() => openInNewTab("#")}>About</li>
              <li onClick={() => openInNewTab("#")}>IT Blog</li>
              <li onClick={() => openInNewTab("#")}>Case Sttudies</li>
              <li onClick={() => openInNewTab("#")}>Locations</li>
              <li onClick={() => openInNewTab("#")}>Careers</li>
            </ul>
          </Column>
        </ColumnWrapper>
      </FirstRow>
      <SecondRow>
        <Copyright>
          Copyright &#169; {new Date().getFullYear()} TechiLab. All rights
          reserved
        </Copyright>
        <SocailContainer>
          <span onClick={() => openInNewTab("#")}>
            <FaLinkedin />
          </span>
          <span onClick={() => openInNewTab("#")}>
            <FaFacebookF />
          </span>
          <span onClick={() => openInNewTab("#")}>
            <FaTwitter />
          </span>
          <span onClick={() => openInNewTab("#")}>
            <FaYoutube />
          </span>
        </SocailContainer>
      </SecondRow>
    </Section>
    // </ThemeProvider>
  );
};

export default Footer;
