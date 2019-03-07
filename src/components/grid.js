import React from "react";
import css from "@emotion/css";

const Text = ({ children, className }) => {
  return (
    <div
      className={className}
      css={css`
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        flex-shrink: 0;
        width: 100%;
        max-width: 450px;
        margin-right: 60px;
      `}
    >
      {children}
    </div>
  );
};

const Area = ({ children, className }) => {
  return (
    <div
      className={className}
      css={css`
        display: flex;
        justify-content: space-between;
        max-width: 1000px;
        width: 100%;
      `}
    >
      {children}
    </div>
  );
};

export default {
  Text,
  Area,
};
