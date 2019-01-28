import React from "react";
import CountUp from "react-countup";
import { css } from "@emotion/core";
import Content from "../components/content";
import { Heading2, SubHeading, SubHeading2 } from "../components/typography";
import InfoYoutubeSvg from "../vectors/info-youtube";
import InfoTwitchSvg from "../vectors/info-twitch";
import InfoStarSvg from "../vectors/info-star";
import { ForthCurve as ForthCurveSvg } from "../vectors/curves";

import Button from "../components/button";

import VisibilitySensor from "react-visibility-sensor";
import Numbers from "../components/numbers";

import eaLogo from "../images/clients/ea.svg";
import espLogo from "../images/clients/esp.svg";
import netEaseLogo from "../images/clients/netEase.svg";
import sunlockLogo from "../images/clients/sunlock.svg";
import tencentLogo from "../images/clients/tencent.svg";

const numberCss = {
  display: "flex",
  justifyContent: "center",
  fontSize: "31px",
  fontWeight: "bold",
  lineHeight: 1.38,
  color: "#ffffff",
  width: "283px",
};

const numberLabelCss = css`
  font-size: 16px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`;

export default () => (
  <section
    css={css`
      position: relative;
      background-image: linear-gradient(68deg, #a11846, #4d1226);
      width: 100%;
      object-fit: contain;
      padding: 50px;
      /* padding: 100px 0 200px; */
    `}
  >
    {/* <ForthCurveSvg
      css={css`
        position: absolute;
        top: 0;
        transform: translateY(0%);
        fill: white;
      `}
    /> */}
    <Content
      css={css`
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-around;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
          `}
        >
          <InfoTwitchSvg
            css={css`
              width: 45px;
              height: 45px;
              fill: black;
              opacity: 0.3;
              margin-bottom: 15px;
            `}
          />
          <div style={numberCss}>600 Million</div>
          <div css={numberLabelCss}>Views on Twitch</div>
        </div>
        <div
          css={css`
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
          `}
        >
          <InfoYoutubeSvg
            css={css`
              width: 45px;
              height: 45px;
              fill: black;
              opacity: 0.3;
              margin-bottom: 15px;
            `}
          />
          <div style={numberCss}>25 Million</div>
          <div css={numberLabelCss}>Views on Youtube</div>
        </div>
        <div
          css={css`
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
          `}
        >
          <InfoStarSvg
            css={css`
              width: 45px;
              height: 45px;
              fill: black;
              opacity: 0.3;
              margin-bottom: 15px;
            `}
          />
          <div style={numberCss}>2.3 Billion</div>
          <div css={numberLabelCss}>Total Reach</div>
        </div>
      </div>

      <SubHeading2 style={{ marginTop: 50, marginBottom: 15 }}>Trusted by...</SubHeading2>
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          img {
            opacity: 0.4;
            margin: 0 15px;
          }
        `}
      >
        <img src={eaLogo} />
        <img src={espLogo} />
        <img src={netEaseLogo} />
        <img src={sunlockLogo} />
        <img src={tencentLogo} />
      </div>
    </Content>
  </section>
);
