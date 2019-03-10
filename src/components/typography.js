import React from "react";
import css from "@emotion/css";

export const Heading1 = ({ children }) => (
  <h1
    css={css`
      font-size: 51px;
      @media only screen and (max-width: 650px) {
        font-size: 40px;
      }
      font-weight: 900;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.38;
      letter-spacing: 0.1px;
      color: white;
      margin: 20px 0;
      text-align: center;
    `}
  >
    {children}
  </h1>
);
export const Heading2 = ({ children, style, ...props }) => (
  <h2
    css={css`
      font-size: 48px;
      font-weight: 900;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.38;
      letter-spacing: normal;
      color: ${props.red ? "#a11846" : "white"};
      margin: 0;
      @media screen and (max-width: 800px) {
        font-size: 38px;
      }
    `}
    style={style}
  >
    {children}
  </h2>
);

export const Heading3 = ({ children, style, ...props }) => (
  <h3
    css={css`
      font-size: 38px;
      font-weight: 700;
      line-height: 1.38;
      color: ${props.red ? "#841738" : "rgba(255, 255, 255, 1)"};
      margin-bottom: 10px;
      @media screen and (max-width: 800px) {
        font-size: 32px;
      }
    `}
    style={style}
  >
    {children}
  </h3>
);

export const SubHeading = ({ children, ...props }) => (
  <h3
    css={css`
      font-size: 24px;
      font-weight: 800;
      line-height: 1.33;
      color: ${props.red ? "#4d1226" : "white"};
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
      font-size: 18px;
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

export const Paragraph = ({ children, as, ...props }) => {
  const Component = as ? as : "p";
  return (
    <Component
      css={css`
        margin: 5px 0;
        font-size: ${props.heading ? "21px" : "17px"};
        font-weight: ${props.bold ? "bold" : "normal"};
        font-style: normal;
        font-stretch: normal;
        line-height: ${props.heading ? 1.3 : "28px"};
        letter-spacing: normal;
        max-width: 600px;
        text-align: ${props.center ? "center" : "left"};
        color: ${props.white ? "rgba(255, 255, 255, .8)" : "#484143"};
        animation: ${props.fadeIn ? "fadeInUp 0.5s both" : "none"};
        animation-delay: ${typeof props.fadeIn === "string" ? props.fadeIn : 0};
        & > a {
          font-weight: bold;
          text-decoration: none;
          color: #a11846;
          transition: color 0.1s ease;
          cursor: pointer;
          &:hover {
            color: #4d1226;
          }
        }
        @media screen and (max-width: 800px) {
          font-size: ${props.heading ? "19px" : "16px"};
        }
      `}
      {...props}
    >
      {children}
    </Component>
  );
};

export const NavLink = ({ children, active, ...props }) => {
  return (
    <a
      css={css`
        position: relative;
        font-weight: 900;
        margin: 0 15px;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.02px;
        text-decoration: none;
        color: ${props.red ? "#8f1840" : "#ffffff"};
        padding-bottom: 10px;
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          border-radius: 35px;
          width: 60%;
          height: 5px;
          background: ${active ? "#961741" : "transparent"};
        }
      `}
      {...props}
    >
      {children}
    </a>
  );
};
