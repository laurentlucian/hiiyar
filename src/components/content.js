import React from "react";
import { css } from "@emotion/core";

export default ({ children, className, ...props }) => {
  return (
    <article
      css={css`
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
      `}
    >
      {className ? <div className={className}>{children}</div> : children}
    </article>
  );
};
