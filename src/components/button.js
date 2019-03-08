import React from "react";
import { css } from "@emotion/core";

const reset = css`
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  font-size: 16px;
`;

const base = css`
  ${reset};
  border-radius: 35px;
  padding: 12px 25px;

  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
`;

const primary = css`
  background-color: #a11846;
  color: white;
  box-shadow: 0;
  line-height: 1.38;
  transition: all 50ms;
  &:hover {
    box-shadow: 0 10px 15px 0 rgba(77, 18, 38, 0.56);
  }
`;

const secondary = css`
  background-color: #ec5d81;
  color: white;
`;

const ghosted = css`
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.6);
  color: white;
  font-weight: 900;
  transition: all 100ms;
  &:hover {
    background-color: white;
    color: #a11846;
    box-shadow: 0 10px 15px 0 rgba(77, 18, 38, 0.56);
  }
`;

const raised = css`
  background-color: #ffffff;
  line-height: 1.38;
  color: #a11846;
  &:hover {
    box-shadow: 0 10px 15px 0 rgba(77, 18, 38, 0.56);
  }
`;

const CTA = css`
  background: none;
  border: 2px solid grey;
  font-size: 14px;
  &:hover {
    box-shadow: 0 6px 15px 0 rgba(77, 18, 38, 0.56);
  }
`;

export default ({ href, children, style, shadow, onClick, ...props }) => {
  const Component = href ? "a" : "button";

  let modifier = primary;
  if (props.secondary) modifier = secondary;
  if (props.ghosted) modifier = ghosted;
  if (props.raised) modifier = raised;
  if (props.CTA) modifier = CTA;

  return (
    <Component
      href={href}
      onClick={onClick}
      css={[base, modifier, shadow, style]}
      /* style={style} */
      data-button="yes"
    >
      {children}
    </Component>
  );
};
