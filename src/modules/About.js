import React from "react";
import { css } from "@emotion/core";
import Content from "../components/content";

import Button from "../components/button";
import { Paragraph, SubHeading } from "../components/typography";
import AboutGirlSvg from "../vectors/about-girl";
import AboutBoySvg from "../vectors/about-boy";

export default () => (
  <section
    css={css`
      position: relative;
      padding: 150px 0 10px;
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
        <SubHeading red>For Talents</SubHeading>
        <Paragraph style={{ marginBottom: "17px" }}>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley
        </Paragraph>
        <Button CTA>Learn More</Button>
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
          margin-top: 8px;
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
        <SubHeading red>For Clients</SubHeading>
        <Paragraph style={{ marginBottom: "17px" }}>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley
        </Paragraph>
        <Button
          CTA
          style={{ backgroundImage: "linear-gradient(287deg, #4d1226, #4d1226" }}
        >
          Learn More
        </Button>
      </div>
    </Content>
  </section>
);
