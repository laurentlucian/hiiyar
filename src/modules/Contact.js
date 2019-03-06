import React from "react";
import { css } from "@emotion/core";
import { Heading3, Paragraph } from "../components/typography";
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
        <Heading3 red style={{ margin: 0 }}>
          Ready when you are.
        </Heading3>
        <Paragraph heading center style={{ fontSize: "30px", color: "#4d4d4d" }}>
          We're based in LA with a global network of influencers spanning in NA, SA and
          SEA
        </Paragraph>
        <div>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <p>your name</p>
              <input type="text" />
            </div>
            <div>
              <p>your email</p>
              <input type="email" />
            </div>
          </div>
          <div>
            <p>help you</p>
            <p>character count</p>
          </div>
          <textarea name="describe" id="" cols="30" rows="10" />
        </div>
      </Content>
    </RouterAnchor>
  </section>
);

// <div
//   css={css`
//     margin: 100px 0;
//     display: flex;
//     width: 100%;
//     justify-content: space-around;
//     & a {
//       text-decoration: none;
//       font-size: 45px;
//       color: #3f3f3f;
//       font-weight: bold;
//       line-height: 1.33;
//     }
//   `}
// >
//   <a href="mailto:contact@hiiyar.com" >
//     contact@hiiyar.com
//   </a>
//   <a href="tel:8188572905" >
//     forwardphonenumber
//   </a>
//   </div>
