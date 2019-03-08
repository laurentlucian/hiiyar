import React from "react";
import { css } from "@emotion/core";

export default ({ children, className, ...props }) => {
  return (
    <article
      className={className}
      css={css`
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
      `}
    >
      {children}
    </article>
  );
};
