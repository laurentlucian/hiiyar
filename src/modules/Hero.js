import React from "react";
import { css } from "@emotion/core";
import Content from "./../components/content";

import { Heading1, Paragraph } from "./../components/typography";

import CurveSvg from "../vectors/curve";
import WhiteLogoSvg from "../vectors/white-logo";

const Hero = () => {
  return (

    <section
      css={css`
        width: 100%;
        height: 700px;
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
      </Content>

      <CurveSvg
        css={css`
          fill: white;
          position: absolute;
          bottom: 0;
        `}
      />
    </section>
  );
};

export default Hero;
