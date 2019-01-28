import React from "react";
import CountUp from "react-countup";
import { css } from "@emotion/core";
import Content from "../components/content";
import { Heading2, SubHeading, SubHeading2 } from "../components/typography";
import InfoYoutubeSvg from "../vectors/info-youtube";
import InfoTwitchSvg from "../vectors/info-twitch";
import InfoStarSvg from "../vectors/info-star";
import { FifthCurve as ForthCurveSvg } from "../vectors/curves";

import WorldMapSvg from "../vectors/worldMap";

import Button from "../components/button";

import VisibilitySensor from "react-visibility-sensor";
import Numbers from "../components/numbers";

import worldMap from "../images/worldMap.svg";
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
      background-image: url('${worldMap}'), linear-gradient(68deg, #a11846, #4d1226);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 600px, 100%;
      width: 100%;
      object-fit: contain;
      padding: 150px 0;

      /* padding: 100px 0 200px; */
    `}
  >
    <ForthCurveSvg
      css={css`
        position: absolute;
        top: 0;
        transform: rotate(180deg);
        fill: white;
      `}
    />
    <Content
      css={css`
        position: relative;
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
            opacity: 0.6;
            margin: 0 30px;
          }
        `}
      >
        <img src={tencentLogo} width="160" />
        <img src={eaLogo} width="70" />
        <img src={netEaseLogo} width="163" />
        <img src={espLogo} width="70" />
        <img src={sunlockLogo} width="140" />
      </div>

      {/* <WorldMapSvg
        css={css`
          position: absolute;
          pointer-events: none;
          top: 50%;
          transform: translateY(-50%);

          fill: hsl(340, 74%, 36%);
          fill: hsl(340, 65%, 77%);
          fill: hsl(335, 36%, 47%);
          width: 450px;
          z-index: 1;
        `}
      /> */}
    </Content>
  </section>
);
