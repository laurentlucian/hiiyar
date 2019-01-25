import React from "react";
import AboutGirlSvg from "../vectors/about-girl";
import { css } from "@emotion/core";

export default () => (
  <section
    css={css`
      position: relative;
      z-index: 2;
    `}
  >
    <AboutGirlSvg />
  </section>
);
