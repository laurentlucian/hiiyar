import React from "react";
import CountUp from "react-countup";
import { css } from "@emotion/core";
import Content from "../components/content";
import { Heading2, SubHeading2 } from "../components/typography";
import InfoYoutubeSvg from "../vectors/info-youtube";
import InfoTwitchSvg from "../vectors/info-twitch";
import InfoStarSvg from "../vectors/info-star";
import { ForthCurve as ForthCurveSvg } from "../vectors/curves";

import Button from "../components/button";

import VisibilitySensor from "react-visibility-sensor";
import Numbers from "../components/numbers";

export default () => (
  <section
    css={css`
      position: relative;
      background-image: linear-gradient(68deg, #a11846, #4d1226);
      width: 100%;
      object-fit: contain;
      padding: 100px 0;
    `}
  >
    <ForthCurveSvg
      css={css`
        position: absolute;
        top: 0;
        transform: translateY(0%);
        fill: white;
      `}
    />
    <Content
      css={css`
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        /* & * {
          border: 1px solid black;
        } */
      `}
    >
      <Heading2 white style={{ fontWeight: "bold" }}>
        {`Our ${22} Influencers have Accumulated`}
      </Heading2>
      <div
        css={css`
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-around;
          max-width: 1300px;
          width: 100%;
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
              margin-bottom: 24px;
            `}
          />
          <SubHeading2 style={{ fontSize: "25px", lineHeight: 1.35 }}>
            Views on Twitch
          </SubHeading2>
          <Numbers value={4301201} duration={2.75} />
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
              height: 63px;
              width: 84px;
              margin-bottom: 30.8px;
            `}
          />
          <SubHeading2 style={{ fontSize: "26px", lineHeight: 1.36 }}>
            Views on Youtube
          </SubHeading2>
          <Numbers value={22290634} duration={3.85} />
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
              margin-bottom: 20.5px;
            `}
          />
          <SubHeading2 style={{ fontSize: "27px", lineHeight: 1.37 }}>
            Total Reach
          </SubHeading2>
          <Numbers value={31303565} duration={4.75} />
        </div>
      </div>
    </Content>
  </section>
);
