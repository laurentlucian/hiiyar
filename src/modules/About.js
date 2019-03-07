import React from "react";
import { css } from "@emotion/core";
import Content from "../components/content";

import { Paragraph, SubHeading } from "../components/typography";
import AboutGirlSvg from "../vectors/about-girl";
import AboutBoySvg from "../vectors/about-boy";
import RouterAnchor from "../components/routerAnchor";
import Button from "../components/button";
import { goTo } from "../routerUtils";

export default () => (
  <section
    css={css`
      position: relative;
      padding: 100px 0 10px;
    `}
  >
    <RouterAnchor name="about">
      <Content>
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 150px;
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              width: 100%;
              max-width: 450px;
              align-items: flex-start;
              margin-right: 60px;
            `}
          >
            <SubHeading red>For Talents</SubHeading>
            <Paragraph>
              We understand content.{" "}
              <a href="#talents" onClick={goTo("talents")}>
                Our team supports you
              </a>{" "}
              by combining hands-on strategic experience using industry leading tools to
              maximize your content monetization potential and building lasting brand
              relationships.
            </Paragraph>
          </div>
          <AboutGirlSvg />
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
            margin-top: 150px;
          `}
        >
          <AboutBoySvg />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              width: 100%;
              max-width: 450px;
              align-items: flex-start;
              margin-left: 60px;
            `}
          >
            <SubHeading red>For Clients</SubHeading>
            <Paragraph>
              Hiiyar makes it easy by providing end-to-end influencer services for your
              brand. From planning and casting to executing and reporting,{" "}
              <a href="#clients" onClick={goTo("clients")}>
                our end-to-end service
              </a>{" "}
              delivers your brand’s unique campaign objectives across all channels.
              <br /> <br />
              Our mission to tap into first-to-market territories have cemented us as the
              go-to for clients
            </Paragraph>
          </div>
        </div>
      </Content>
    </RouterAnchor>
  </section>
);
