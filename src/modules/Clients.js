import React from "react";
import { css } from "@emotion/core";
import Content from "../components/content";

import Button from "../components/button";
import ClientBoySvg from "../vectors/client-boy";
import { Heading2, Paragraph2, SubHeading2 } from "../components/typography";
import ClientChatSvg from "../vectors/client-chat";
import ClientIdeaSvg from "../vectors/client-idea";
import ClientPizzaSvg from "../vectors/client-pizza";
import { ThirdCurve as ThirdCurveSvg } from "../vectors/curve";

export default () => (
  <section
    css={css`
      position: relative;
      background-image: linear-gradient(59deg, #a11846, #4d1226);
      width: 100%;
      height: 1300px;
      object-fit: contain;
      padding-top: 170px;
      /* & * {
        border: 1px solid white;
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
      <Heading2>Clients</Heading2>
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
          <ClientChatSvg
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
            <SubHeading2>Influencer Marketing</SubHeading2>
            <Paragraph2 white>
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
          <ClientIdeaSvg
            css={css`
              width: 160px;
              height: 160px;
              margin-right: 35.4px;
            `}
          />
          <div>
            <SubHeading2>Custom Content</SubHeading2>
            <Paragraph2 white>
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
          <ClientPizzaSvg
            css={css`
              width: 94px;
              height: 152px;
              margin-right: 29.2px;
            `}
          />
          <div>
            <SubHeading2>Performance</SubHeading2>
            <Paragraph2 white>
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
      <ClientBoySvg
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
      <Button raised style={{ color: "#4d1226", width: "160px" }}>
        Let's Talk
      </Button>
    </Content>
    <ThirdCurveSvg
      css={css`
        position: absolute;
        bottom: -150px;
        pointer-events: none;
      `}
    />
  </section>
);
