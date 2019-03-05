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
    <RouterAnchor name="contact">
      <Content
        css={css`
          display: flex;
          height: 300px;
          flex-direction: column;
          align-items: center;
        `}
      >
        <Heading3 red>Ready to talk?</Heading3>
        <div
          css={css`
            margin: 100px 0;
            display: flex;
            width: 100%;
            justify-content: space-around;
          `}
        >
          <a css={anchorStyle} href="mailto:jean@hiiyar.com" data-rel="external">
            jean@hiiyar.com
          </a>
          <a css={anchorStyle} href="tel:8188572905" data-rel="external">
            give us a call
          </a>
        </div>
      </Content>
    </RouterAnchor>
  </section>
);

const anchorStyle = css`
  text-decoration: none;
  font-size: 30px;
  color: #4d1226;
  font-weight: bold;
  line-height: 1.33;
`;
