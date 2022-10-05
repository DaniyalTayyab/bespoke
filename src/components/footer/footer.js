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

  return (
    <ThemeProvider theme={dark}>
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
              <h3>Company</h3>
              <ul>
                <li>About</li>
                <li>Life at TechiLab</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </Column>
            <Column>
              <h3>Services</h3>
              <ul>
                <li>Cloud</li>
                <li>Data</li>
                <li>Careers</li>
                <li>Bespoke</li>
              </ul>
            </Column>
            <Column>
              <h3>Solutions</h3>
              <ul>
                <li>Shopper value</li>
                <li>C-Analytics</li>
              </ul>

              <h3 style={{ marginTop: "4rem" }}>Resources</h3>
              <ul>
                <li>Blog</li>
                <li>Case Studies</li>
                <li>News</li>
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
            <span>
              <FaLinkedin />
            </span>
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaYoutube />
            </span>
          </SocailContainer>
        </SecondRow>
      </Section>
    </ThemeProvider>
  );
};

export default Footer;
