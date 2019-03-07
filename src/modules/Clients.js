import React from "react";
import { useTrail, animated } from "react-spring";
import { css } from "@emotion/core";
import Content from "../components/content";

import { SecondCurve as SecondCurveSvg } from "../vectors/curves";
import ClientBoySvg from "../vectors/client-boy";
import { Heading3, Paragraph, SubHeading2 } from "../components/typography";
import ClientChatSvg from "../vectors/client-chat";
import ClientIdeaSvg from "../vectors/client-idea";
import ClientPizzaSvg from "../vectors/client-pizza";
import RouterAnchor from "../components/routerAnchor";
import Grid from "../components/grid";

import TrailAnimate, { Recipes } from "../components/trailanimate";

export default () => (
  <section
    css={css`
      position: relative;
      background-image: linear-gradient(59deg, #a11846, #4d1226);
      width: 100%;
      object-fit: contain;
      padding: 100px 0 250px;
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
    <RouterAnchor name="clients">
      <Content
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        `}
      >
        <div style={{ margin: "50px auto" }}>
          <Heading3 white style={{ textAlign: "center" }}>
            Solutions for Clients
          </Heading3>
          <Paragraph white heading center>
            As a tecnology focused company, Hiiyar gives talents the tools and technology
            to build better and reach higher.
          </Paragraph>
        </div>
        <Grid.Area>
          <Grid.Text
            css={css`
              & > div {
                margin: 15px 0;
              }
            `}
          >
            <TrailAnimate recipe={Recipes.fadeInLeft}>
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
                  <SubHeading2>Influencers</SubHeading2>
                  <Paragraph white>
                    {/* We have found that turn key solutions deliver minimal impact with the
                  noise in today’s influencer market. */}
                    Work with talent that’s actually fit for your brand, not only do we
                    craft unique campaigns but we tailor it down for each Influencer to
                    best craft your message within their words.
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
                  <SubHeading2>Content</SubHeading2>
                  <Paragraph white>
                    {/* Our internal team consists of creative, design and production staff to
                  produce anything you may need.  */}
                    Ranging from a handful of different deliverables, our speciality is
                    tackling first-to-market strategies and ultimately creating memorable
                    lasting content.
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
                    Our experience working as both brand and developer have shown us that
                    metrics are a two way street. While many in the industry tap into
                    touch-point impressions, we design campaigns that result in actual
                    conversions.
                  </Paragraph>
                </div>
              </div>
            </TrailAnimate>
          </Grid.Text>
          <div style={{ width: "100%" }}>
            <TrailAnimate recipe={Recipes.fadeInRight}>
              <ClientBoySvg />
            </TrailAnimate>
          </div>
        </Grid.Area>
      </Content>
    </RouterAnchor>
  </section>
);
