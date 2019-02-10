import React from "react";
import { css } from "@emotion/core";
import Content from "./../components/content";

import { Heading1, Paragraph } from "./../components/typography";
import Button from "./../components/button";

import { FirstCurve as FirstCurveSvg } from "../vectors/curves";
import WhiteLogoSvg from "../vectors/white-logo";
import JumpingGuySvg from "../vectors/jumping-guy";
import JumpingGirlSvg from "../vectors/jumping-girl";

import WordSlider from "../components/wordslider";

export default () => {
  return (
    <section
      css={css`
        width: 100%;
        height: 750px;
        background-size: 100%;
        object-fit: contain;
        background-image: linear-gradient(354deg, #8f1840, #8f1840 52%, #4d1226);
        position: relative;
      `}
    >
      <Content
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 150px;
        `}
      >
        <WhiteLogoSvg
          css={css`
            width: 128px;
            animation: fadeInUp both 1s;
            animation-delay: 300ms;
          `}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <WordSlider>
            <Heading1>We're Hiiyar!</Heading1>
            <Heading1>We're Test!</Heading1>
            <Heading1>We're Hiiyar!</Heading1>
            <Heading1>We're Hiiyar!</Heading1>
            <Heading1>We're Hiiyar!</Heading1>
          </WordSlider>
        </div>
        <Paragraph white center fadeIn={"800ms"}>
          Great storytelling runs in our DNA. We come from a background of game
          developers, game marketers and industry influencers. Our expertise combines
          powerful creative with metric-driven leads to create compelling content with
          measurable results.
        </Paragraph>

        <div
          css={css`
            width: 350px;
            margin: 20px 0;
            display: flex;
            justify-content: space-between;
            animation: fadeInUp both 1s;
            animation-delay: 1000ms;
          `}
        >
          <Button>For Talents</Button>
          <Button ghosted>For Clients</Button>
        </div>
      </Content>

      <FirstCurveSvg
        css={css`
          fill: white;
          position: absolute;
          pointer-events: none;
          bottom: 0;
          transform: translateY(50%);
        `}
      />
      <JumpingGuySvg
        css={css`
          position: absolute;
          left: 10%;
          top: 250px;
          width: 350px;
        `}
      />
      <JumpingGirlSvg
        css={css`
          position: absolute;
          right: 10%;
          top: 130px;
          width: 380px;
        `}
      />
    </section>
  );
};
