import React from "react";
import { css } from "@emotion/core";
import Content from "../components/content";

import TalentBoySvg from "../vectors/talent-boy";
import { Heading3, Paragraph, SubHeading2 } from "../components/typography";
import TalentRocketSvg from "../vectors/talent-rocket";
import TalentSpeakerSvg from "../vectors/talent-speaker";
import TalentGraphSvg from "../vectors/talent-graph";
import { ThirdCurve as ThirdCurveSvg } from "../vectors/curves";
import RouterAnchor from "../components/routerAnchor";

export default () => (
  <section
    css={css`
      position: relative;
      width: 100%;
      object-fit: contain;
      padding-bottom: 100px;
    `}
  >
    <ThirdCurveSvg
      css={css`
        position: absolute;
        top: 1px;
        transform: translateY(-100%);
      `}
    />

    <RouterAnchor name="talents">
      <Content
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <div style={{ margin: "50px auto" }}>
          <Heading3 red style={{ margin: 0, textAlign: "center" }}>
            Solutions for Talents
          </Heading3>
          <Paragraph heading center>
            As a tecnology focused company, Hiiyar gives talents the tools and technology
            to build better and reach higher.
          </Paragraph>
        </div>
        <div
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
              margin-right: 50px;
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: flex-start;
              `}
            >
              <TalentRocketSvg
                css={css`
                  width: 50px;
                  margin-right: 25px;
                  flex-shrink: 0;
                `}
              />
              <div>
                <SubHeading2 red>Management</SubHeading2>
                <Paragraph>
                  Land sponsorships without the headache, create content under your own
                  terms and build relationships and experiences with the companies you
                  support.
                  {/* Our goal is to support creators leaving them to do what they do
                  best, Hiiyar’s internal staff is on-hand when needed to further explore
                  where content can go. */}
                </Paragraph>
              </div>
            </div>
            <div
              css={css`
                display: flex;
                align-items: flex-start;
              `}
            >
              <TalentSpeakerSvg
                css={css`
                  width: 50px;
                  margin-right: 25px;
                  flex-shrink: 0;
                `}
              />
              <div>
                <SubHeading2 red>Content</SubHeading2>
                <Paragraph red>
                  Access our design and production team to produce anything that you may
                  need to better elevate your messaging. We create assets, videos,
                  infographics, landers and other marketing initiatives to better suit
                  your needs.
                </Paragraph>
              </div>
            </div>
            <div
              css={css`
                display: flex;
                align-items: flex-start;
              `}
            >
              <TalentGraphSvg
                css={css`
                  width: 50px;
                  margin-right: 25px;
                  flex-shrink: 0;
                `}
              />
              <div>
                <SubHeading2 red>Performance</SubHeading2>
                <Paragraph as="div">
                  Work with our team to drive maximum potential to your brand growth.
                  Within any aspect of your business we’re able to support strategies for
                  growth, monetization, and audience insights.
                  {/* Check out our featured
                  Influencers below to see how our work has helped our talent grow! */}
                </Paragraph>
              </div>
            </div>
          </div>
          <TalentBoySvg
            css={css`
              height: 500px;
            `}
          />
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            padding-top: 50px;
          `}
        >
          {/* <Button CTA style={{ width: "160px" }}>
            Let's Talk
          </Button> */}
        </div>
      </Content>
    </RouterAnchor>
  </section>
);
