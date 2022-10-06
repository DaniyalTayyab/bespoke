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
              <li
                onClick={() =>
                  openInNewTab("http://techilab.com/it-services/blockchain/")
                }
              >
                Blockchain
              </li>
              <li
                onClick={() =>
                  openInNewTab(
                    "http://techilab.com/it-services/web-app-development/"
                  )
                }
              >
                Web App Development
              </li>
              <li
                onClick={() =>
                  openInNewTab(
                    "http://techilab.com/it-services/it-consultancy/"
                  )
                }
              >
                IT Consultancy
              </li>
              <li
                onClick={() =>
                  openInNewTab("http://techilab.com/it-services/devops/")
                }
              >
                DevOps
              </li>
              <li
                onClick={() =>
                  openInNewTab("http://techilab.com/it-services/shopify/")
                }
              >
                Shopify
              </li>
              <li
                onClick={() =>
                  openInNewTab("http://techilab.com/it-services/aws/")
                }
              >
                AWS
              </li>
              <li
                onClick={() =>
                  openInNewTab("http://techilab.com/it-services/data-science/")
                }
              >
                Data Science & AI
              </li>
              <li
                onClick={() =>
                  openInNewTab("http://techilab.com/it-services/iot/")
                }
              >
                Internet Of Things
              </li>
            </ul>
          </Column>
          <Column>
            <h3>Solutions</h3>
            <ul>
              <li
                onClick={() =>
                  openInNewTab("http://techilab.com/industries/banking/")
                }
              >
                Banking
              </li>
              <li
                onClick={() =>
                  openInNewTab(
                    "http://techilab.com/industries/capital-markets/"
                  )
                }
              >
                Capital Markets
              </li>
              <li
                onClick={() =>
                  openInNewTab(
                    "http://techilab.com/industries/enterprise-technology/"
                  )
                }
              >
                Enterprise Technology
              </li>
              <li
                onClick={() =>
                  openInNewTab("http://techilab.com/industries/manufacturing/")
                }
              >
                Manufacturing
              </li>
              <li
                onClick={() =>
                  openInNewTab("http://techilab.com/industries/healthcare/")
                }
              >
                Healthcare
              </li>
              <li
                onClick={() =>
                  openInNewTab(
                    "http://techilab.com/industries/higher-education/"
                  )
                }
              >
                Higher Education
              </li>
            </ul>
          </Column>
          <Column>
            <h3>Company</h3>
            <ul>
              <li onClick={() => openInNewTab("http://techilab.com/about/")}>
                About
              </li>
              <li onClick={() => openInNewTab("http://techilab.com/it-blog/")}>
                IT Blog
              </li>
              <li
                onClick={() =>
                  openInNewTab("http://techilab.com/case-studies/")
                }
              >
                Case Sttudies
              </li>
              <li
                onClick={() => openInNewTab("http://techilab.com/locations/")}
              >
                Locations
              </li>
              <li onClick={() => openInNewTab("http://techilab.com/careers/")}>
                Careers
              </li>
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
          <span
            onClick={() =>
              openInNewTab(
                "https://www.linkedin.com/company/techilab/mycompany/"
              )
            }
          >
            <FaLinkedin />
          </span>
          <span onClick={() => openInNewTab("http://techilab.com/about/")}>
            <FaFacebookF />
          </span>
          <span onClick={() => openInNewTab("http://techilab.com/about/")}>
            <FaTwitter />
          </span>
          <span onClick={() => openInNewTab("http://techilab.com/about/")}>
            <FaYoutube />
          </span>
        </SocailContainer>
      </SecondRow>
    </Section>
    // </ThemeProvider>
  );
};

export default Footer;
