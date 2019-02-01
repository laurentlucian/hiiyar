import React from "react";
import { css } from "@emotion/core";
import Content from "../components/content";

import { SecondCurve as SecondCurveSvg } from "../vectors/curves";
import Button from "../components/button";
import ClientBoySvg from "../vectors/client-boy";
import { Heading3, Paragraph, SubHeading2 } from "../components/typography";
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
        padding: 100px 0 250px;
        flex-direction: column;
      `}
    >
      <div style={{ margin: "50px 0" }}>
        <Heading3 white style={{ textAlign: "center" }}>
          Solutions for Clients
        </Heading3>
        <Paragraph white heading center>
          As a tecnology focused company, Hiiyar gives talents the tools and technology to
          build better and reach higher.
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
            <ClientChatSvg
              css={css`
                width: 50px;
                margin-right: 25px;
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
              align-items: flex-start;
            `}
          >
            <ClientIdeaSvg
              css={css`
                width: 50px;
                margin-right: 25px;
                flex-shrink: 0;
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
              align-items: flex-start;
            `}
          >
            <ClientPizzaSvg
              css={css`
                width: 50px;
                margin-right: 25px;
                flex-shrink: 0;
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
        <Button raised style={{ color: "#4d1226", width: "160px" }}>
          Let's Talk
        </Button>
      </div>
    </Content>
  </section>
);
