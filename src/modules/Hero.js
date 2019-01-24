import React from "react";
import { css } from "@emotion/core";
import Content from "./../components/content";

import { Heading1, Paragraph } from "./../components/typography";
import Button from "./../components/button";

import CurveSvg from "../vectors/curve";
import WhiteLogoSvg from "../vectors/white-logo";
import JumpingGuySvg from "../vectors/jumping-guy";
import JumpingGirlSvg from "../vectors/jumping-girl";

const Hero = () => {
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
          `}
        />
        <Heading1>Go hiiyar Go higher !! </Heading1>
        <Paragraph white center>
          Create real and memorable content to compel the senses through a seamless
          encounter. There is no secret formula behind our successful metrics. Let Hiiyar
          show you higher experiences!
        </Paragraph>

        <div
          css={css`
            width: 350px;
            margin: 20px 0;
            display: flex;
            justify-content: space-between;
          `}
        >
          <Button>For Talents</Button>
          <Button ghosted>For Clients</Button>
        </div>
      </Content>

      <CurveSvg
        css={css`
          fill: white;
          position: absolute;
          bottom: 0;
          pointer-events: none;
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
          top: 250px;
          width: 350px;
        `}
      />
    </section>
  );
};

export default Hero;
