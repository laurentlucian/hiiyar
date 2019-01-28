import React from "react";
import { css } from "@emotion/core";
import Content from "../components/content";

import { SecondCurve as SecondCurveSvg } from "../vectors/curves";
import Button from "../components/button";
import ClientBoySvg from "../vectors/client-boy";
import { Heading2, Paragraph, SubHeading2 } from "../components/typography";
import ClientChatSvg from "../vectors/client-chat";
import ClientIdeaSvg from "../vectors/client-idea";
import ClientPizzaSvg from "../vectors/client-pizza";

export default () => (
  <section
    css={css`
      position: relative;
      background-image: linear-gradient(59deg, #a11846, #4d1226);
      width: 100%;
      object-fit: contain;
    `}
  >
    <SecondCurveSvg
      css={css`
        position: absolute;
        pointer-events: none;
        top: 0;
        fill: white;
        width: 100%;
      `}
    />
    <Content
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 48px;
        padding: 140px 0 250px;
        flex-direction: column;
      `}
    >
      <Heading2>Clients</Heading2>
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
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <ClientChatSvg
              css={css`
                width: 100px;
                height: 109px;
                margin-right: 23.9px;
                flex-shrink: 0;
              `}
            />
            <div>
              <SubHeading2>Influencer Marketing</SubHeading2>
              <Paragraph white>
                Partner with Hiiyar’s team to create and distribute compelling sponsored
                content that speaks your brand story.
              </Paragraph>
            </div>
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <ClientIdeaSvg
              css={css`
                width: 160px;
                height: 160px;
                margin-right: 35.4px;
              `}
            />
            <div>
              <SubHeading2>Custom Content</SubHeading2>
              <Paragraph white>
                Access our design and production team to produce anything that you may
                need to better elevate your messaging. We create assets, videos,
                infographics, landers and other marketing initiatives to better suit your
                needs.
              </Paragraph>
            </div>
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <ClientPizzaSvg
              css={css`
                width: 94px;
                height: 152px;
                margin-right: 29.2px;
              `}
            />
            <div>
              <SubHeading2>Performance</SubHeading2>
              <Paragraph white as="div">
                <ul
                  css={css`
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    position: relative;
                    & li:before {
                      content: "✓";
                      font-size: 14px;
                      position: absolute;
                      left: -15px;
                      margin-top: 2px;
                      color: rgba(0, 0, 0, 0.3);
                    }
                  `}
                >
                  <li>Audience Insights</li>
                  <li>Growth Measurement</li>
                  <li>Content Analysis </li>
                </ul>
              </Paragraph>
            </div>
          </div>
        </div>
        <ClientBoySvg
          css={css`
            height: 624.7px;
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
        <Button raised style={{ color: "#4d1226", width: "160px" }}>
          Let's Talk
        </Button>
      </div>
    </Content>
  </section>
);
