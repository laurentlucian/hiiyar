import React from "react";
import { css } from "@emotion/core";
import { Heading3 } from "../components/typography";
import Content from "../components/content";
import { FifthCurve as FifthCurveSvg } from "../vectors/curves";

export default () => (
  <section
    css={css`
      position: relative;
    `}
  >
    <FifthCurveSvg
      css={css`
        position: absolute;
        top: 0;
        transform: translateY(-100%);
        fill: white;
      `}
    />
    <Content
      name="contact"
      css={css`
        display: flex;
        justify-content: center;
        height: 300px;
      `}
    >
      <Heading3 red>Ready to talk?</Heading3>
    </Content>
  </section>
);
