import React from "react";
import { css } from "@emotion/core";
import Content from "../components/content";

import Button from "../components/button";
import { Paragraph, SubHeading } from "../components/typography";
import AboutGirlSvg from "../vectors/about-girl";
import AboutBoySvg from "../vectors/about-boy";
import { SecondCurve as SecondCurveSvg } from "../vectors/curve";

export default () => (
  <section
    css={css`
      position: relative;
      z-index: 2;
      margin: 250px 0 0 0;
    `}
  >
    <Content
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 450px;
          align-items: flex-start;
          margin-right: 60px;
        `}
      >
        <SubHeading>For Talents</SubHeading>
        <Paragraph style={{ marginBottom: "17px" }}>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley
        </Paragraph>
        <Button CTA>Let's Talk</Button>
      </div>
      <AboutGirlSvg />
    </Content>
    <Content
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
      `}
    >
      <AboutBoySvg
        css={css`
          margin-top: 98px;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 450px;
          align-items: flex-start;
          margin-left: 60px;
        `}
      >
        <SubHeading>For Clients</SubHeading>
        <Paragraph style={{ marginBottom: "17px" }}>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley
        </Paragraph>
        <Button
          CTA
          style={{ backgroundImage: "linear-gradient(287deg, #4d1226, #4d1226" }}
        >
          Let's Talk
        </Button>
      </div>
    </Content>
    <SecondCurveSvg
      css={css`
        position: absolute;
        pointer-events: none;
        bottom: -500px;
        z-index: -1;
      `} //pls fix this
    />
  </section>
);
