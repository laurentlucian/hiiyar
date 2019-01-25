import React from "react";
import AboutGirlSvg from "../vectors/about-girl";
import { css } from "@emotion/core";
import Content from "../components/content";
import { Paragraph } from "../components/typography";

export default () => (
  <section
    css={css`
      position: relative;
      z-index: 2;
    `}
  >
    <Content
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        <Paragraph>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley
        </Paragraph>
      </div>
      <AboutGirlSvg />
    </Content>
  </section>
);
