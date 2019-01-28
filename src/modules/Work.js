import React from "react";
import { css } from "@emotion/core";
import { Heading2 } from "../components/typography";
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
      css={css`
        display: flex;
        justify-content: center;
        height: 300px;
      `}
    >
      <Heading2 red>Work</Heading2>
    </Content>
  </section>
);
