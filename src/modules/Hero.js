import React from "react";
import { css } from "@emotion/core";

import CurveSvg from "../vectors/curve";

const Hero = () => {
  return (
    <section
      css={css`
        width: 100%;
        height: 700px;
        object-fit: contain;
        background-image: linear-gradient(354deg, #8f1840, #741838 52%, #4d1226);
        position: relative;
      `}
    >
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
