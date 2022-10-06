import React from "react";
import ToolAndTech from "../../../toolandtech/ToolAndTech";

import {
  Section,
  Container,
  HeadingSection,
  ToolsContainer,
} from "./ToolsTechnology.styles";

import mobile from "../../../../assets/icons/first/mobile.png";
import gear from "../../../../assets/icons/first/watch.png";
import lcd from "../../../../assets/icons/first/lcd.png";
import iot from "../../../../assets/icons/first/iot.png";
import arcade from "../../../../assets/icons/first/arcade.png";

import spring from "../../../../assets/icons/second/spring.png";
import threed from "../../../../assets/icons/second/threeD.png";
import empress from "../../../../assets/icons/second/empress.png";

import mongo from "../../../../assets/icons/third/mongo.png";
import mysql from "../../../../assets/icons/third/mysql.png";
import sql from "../../../../assets/icons/third/sql.png";
import oracle from "../../../../assets/icons/third/oracle.png";
import ibm from "../../../../assets/icons/third/ibm.png";

import agile from "../../../../assets/icons/forth/agile.png";
import gol from "../../../../assets/icons/forth/gol.png";
import kanban from "../../../../assets/icons/forth/kanban.png";
import safe from "../../../../assets/icons/forth/safe.png";
import xp from "../../../../assets/icons/forth/xp.png";

import dotnet from "../../../../assets/icons/fifth/dotnet.png";
import java from "../../../../assets/icons/fifth/java.png";
import node from "../../../../assets/icons/fifth/node.png";
import python from "../../../../assets/icons/fifth/python.png";
import roll from "../../../../assets/icons/fifth/roll.png";
import ruby from "../../../../assets/icons/fifth/ruby.png";

import apple from "../../../../assets/icons/sixth/apple.jpg";
import kotlin from "../../../../assets/icons/sixth/kotlin.png";
import x from "../../../../assets/icons/sixth/x.png";
import react from "../../../../assets/icons/sixth/react.png";
import swift from "../../../../assets/icons/sixth/swift.png";
import angular from "../../../../assets/icons/sixth/angular.png";
import fire from "../../../../assets/icons/sixth/fire.png";
import jquery from "../../../../assets/icons/sixth/jquery.png";
import desktop from "../../../../assets/icons/sixth/desktop.png";
import uwp from "../../../../assets/icons/sixth/uwp.png";
import net from "../../../../assets/icons/sixth/net.png";

const ToolsTechnology = () => {
  return (
    <Section>
      <Container>
        <HeadingSection>
          <h2>
            Tools <span>and</span> technologies
          </h2>
          <p>to maximize value for your business</p>
        </HeadingSection>
        <ToolsContainer>
          <div style={{ flex: "1" }}>
            <ToolAndTech
              title="Methodology"
              iconsArray={[agile, gol, kanban, safe, xp]}
            />
            <ToolAndTech
              title="Persistence"
              iconsArray={[mongo, mysql, sql, oracle, ibm]}
            />
            <ToolAndTech
              title="Business logic"
              iconsArray={[dotnet, java, node, python, roll, ruby]}
            />
          </div>
          <div style={{ flex: "1" }}>
            <ToolAndTech
              title="Presentation"
              iconsArray={[
                apple,
                kotlin,
                x,
                react,
                swift,
                angular,
                fire,
                jquery,
                desktop,
                net,
                uwp,
              ]}
              style={{ gridRow: "2 / 4" }}
            />
            <ToolAndTech
              title="Frameworks"
              iconsArray={[spring, threed, empress]}
            />
            <ToolAndTech
              title="Devices"
              iconsArray={[mobile, gear, lcd, iot, arcade]}
              style={{ gridRow: "1 / 2" }}
            />
          </div>
        </ToolsContainer>
      </Container>
    </Section>
  );
};

export default ToolsTechnology;
