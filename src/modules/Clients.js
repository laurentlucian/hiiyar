import React from "react";
import { css } from "@emotion/core";
import Content from "../components/content";

import Button from "../components/button";

export default () => (
  <section
    css={css`
      background-image: linear-gradient(59deg, #a11846, #4d1226);
      width: 100%;
      height: 1030.3px;
      object-fit: contain;
    `}
  >
    <Content />
  </section>
);
