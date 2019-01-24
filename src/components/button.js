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
`;

const primary = css`
  background-color: #a11846;
  color: white;
  box-shadow: 0;
  transition: all 300ms;
  &:hover {
    box-shadow: 0 10px 15px 0 rgba(74, 219, 194, 0.3);
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
  font-weight: 600;
`;

const raised = css`
  background-color: #ffffff;
  width: 157px;
  height: 48px;
  font-size: 16px;
  line-height: 1.38;
  color: #a11846;
  font-family: Nunito;
  &:hover {
    box-shadow: 0 10px 15px 0 rgba(77, 18, 38, 0.3);
  }
`;

export default props => {
  const Component = props.href ? "a" : "button";

  let style = primary;
  if (props.secondary) style = secondary;
  if (props.ghosted) style = ghosted;
  if (props.raised) style = raised;

  return <Component css={[base, style]}>{props.children}</Component>;
};
