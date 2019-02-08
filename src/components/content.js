import React from "react";
import { css } from "@emotion/core";
import RouterAnchor from "./routerAnchor";

export default ({ name, children, className, ...props }) => {
  const content = (
    <article
      id={name}
      css={css`
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
      `}
    >
      {className ? <div className={className}>{children}</div> : children}
    </article>
  );

  return name ? <RouterAnchor name={name}>{content}</RouterAnchor> : content;
};
