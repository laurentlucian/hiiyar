import React from "react";
import css from "@emotion/css";

export const Heading1 = ({ children }) => (
  <h1
    css={css`
      font-size: 51px;
      font-weight: 900;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.38;
      letter-spacing: 0.1px;
      color: white;
    `}
  >
    {children}
  </h1>
);
export const Heading2 = ({ children, style, ...props }) => (
  <h3
    css={css`
      font-size: 48px;
      font-weight: 900;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.38;
      letter-spacing: normal;
      color: ${props.red ? "#a11846" : "white"};
    `}
    style={style}
  >
    {children}
  </h3>
);

export const SubHeading = ({ children }) => (
  <h3
    css={css`
      font-size: 24px;
      font-weight: 900;
      line-height: 1.33;
      color: #4d1226;
      text-transform: uppercase;
      margin: 0;
    `}
  >
    {children}
  </h3>
);

export const SubHeading2 = ({ children, style, ...props }) => (
  <h4
    css={css`
      font-size: 24px;
      font-weight: bold;
      line-height: 1.33;
      color: #ffffff;
      margin: 0;
      letter-spacing: normal;
      color: ${props.red ? "#a11846" : "white"};
    `}
    style={style}
  >
    {children}
  </h4>
);

export const Paragraph = ({ children, ...props }) => {
  return (
    <p
      css={css`
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.38;
        letter-spacing: normal;
        max-width: 600px;
        text-align: ${props.center ? "center" : "left"};
        color: ${props.white ? "white" : "#4d4d4d"};
      `}
    >
      {children}
    </p>
  );
};
export const Paragraph2 = ({ children, ...props }) => {
  return (
    <p
      css={css`
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        max-width: 800px;
        text-align: left;
        color: ${props.white ? "white" : "#a11846"};
      `}
    >
      {children}
    </p>
  );
};

export const NavLink = ({ children, ...props }) => {
  return (
    <a
      css={css`
        font-weight: 900;
        margin: 0 15px;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.02px;
        color: ${props.red ? "#8f1840" : "#ffffff"};
      `}
      {...props}
    >
      {children}
    </a>
  );
};
