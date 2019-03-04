import React from "react";
import { css } from "@emotion/core";
import { Heading3 } from "../components/typography";
import Content from "../components/content";
import { FifthCurve as FifthCurveSvg } from "../vectors/curves";
import RouterAnchor from "../components/routerAnchor";

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
      <RouterAnchor name="contact">
        <Heading3 red>Ready to talk?</Heading3>
      </RouterAnchor>
    </Content>
  </section>
);
