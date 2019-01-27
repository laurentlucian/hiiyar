import React from "react";
import { css } from "@emotion/core";
import Content from "../components/content";

import Button from "../components/button";
import TalentBoySvg from "../vectors/talent-boy";
import { Heading2, Paragraph2, SubHeading2 } from "../components/typography";
import TalentRocketSvg from "../vectors/talent-rocket";
import TalentSpeakerSvg from "../vectors/talent-speaker";
import TalentGraphSvg from "../vectors/talent-graph";
import { ForthCurve as ForthCurveSvg } from "../vectors/curves";

export default () => (
  <section
    css={css`
      position: relative;
      width: 100%;
      height: 1080px;
      object-fit: contain;
      padding-top: 10px;
      /* & * {
        border: 1px solid #4d1226;
      } */
    `}
  >
    <Content
      css={css`
        display: flex;
        justify-content: center;
        font-size: 48px;
      `}
    >
      <Heading2 red>Talents</Heading2>
    </Content>
    <Content
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-around;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <TalentRocketSvg
            css={css`
              width: 100px;
              height: 109px;
              margin-right: 23.9px;
            `}
          />
          <div
            css={css`
              width: 400px;
            `}
          >
            <SubHeading2 red>Influencer Marketing</SubHeading2>
            <Paragraph2 red>
              Partner with Hiiyar’s team to create and distribute compelling sponsored
              content that speaks your brand story.
            </Paragraph2>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <TalentSpeakerSvg
            css={css`
              width: 160px;
              height: 160px;
              margin-right: 35.4px;
            `}
          />
          <div>
            <SubHeading2 red>Custom Content</SubHeading2>
            <Paragraph2 red>
              Access our design and production team to produce anything that you may need
              to better elevate your messaging. We create assets, videos, infographics,
              landers and other marketing initiatives to better suit your needs.
            </Paragraph2>
          </div>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <TalentGraphSvg
            css={css`
              width: 94px;
              height: 152px;
              margin-right: 29.2px;
            `}
          />
          <div>
            <SubHeading2 red>Performance</SubHeading2>
            <Paragraph2 red>
              <ul
                css={css`
                  margin: 0;
                  padding: 0 0 0 18px;
                `}
              >
                <li>Audience Insights</li>
                <li>Growth Measurement</li>
                <li>Content Analysis </li>
              </ul>
            </Paragraph2>
          </div>
        </div>
      </div>
      <TalentBoySvg
        css={css`
          height: 624.7px;
        `}
      />
    </Content>
    <Content
      css={css`
        display: flex;
        justify-content: center;
        padding-top: 50px;
      `}
    >
      <Button CTA style={{ width: "160px" }}>
        Let's Talk
      </Button>
    </Content>
    <ForthCurveSvg
      css={css`
        position: absolute;
        bottom: -180px;
        pointer-events: none;
        /* background-color: blue; */
      `}
    />
  </section>
);
