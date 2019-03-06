import React from "react";
import { css } from "@emotion/core";
import { Heading2, Heading3, SubHeading2 } from "../components/typography";
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
        <Heading2 red style={{}}>
          Ready when you are.
        </Heading2>
        <SubHeading2 red style={{ fontSize: "30px", color: "#4d4d4d" }}>
          We're based in LA with a global network of influencers spanning in NA, SA and SEA
        </SubHeading2>
        <div
          css={css`
            margin: 100px 0;
            display: flex;
            width: 100%;
            justify-content: space-around;
            & a {
              text-decoration: none;
              font-size: 45px;
              color: #3f3f3f;
              font-weight: bold;
              line-height: 1.33;
            }
          `}
        >
          {/* fixing it soon */}
          <a href="mailto:contact@hiiyar.com" data-rel="external">
            contact@hiiyar.com
          </a>
          <a href="tel:8188572905" data-rel="external">
            forwardphonenumber
          </a>
        </div>
      </Content>
    </RouterAnchor>
  </section>
);
