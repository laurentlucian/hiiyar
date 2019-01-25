import React from "react";
import Content from "./content";
import Logo from "../vectors/logo";
import Hiiyar from "../vectors/hiiyar";
import { css } from "@emotion/core";
import { NavLink } from "./typography";
import { FooterCurve as CurveSvg } from "../vectors/curve";

const Footer = () => (
  <footer
    css={css`
      width: 100%;
      height: 300px;
      padding-top: 70px;
      margin-top: 100px;
      background-image: linear-gradient(82deg, #a11846, #4d1226);
      display: flex;
      position: relative;
      align-items: center;
    `}
  >
    <CurveSvg
      css={css`
        position: absolute;
        width: 100%;
        top: -130px;
        fill: white;
      `}
    />
    <Content
      css={css`
        display: flex;
        height: 100px;
        justify-content: center;
      `}
    >
      <div
        css={css`
          padding-right: 50px;
          border-right: 1px solid hsl(340, 74%, 36%);
          display: flex;
          align-items: center;
        `}
      >
        <Logo
          css={css`
            width: 51px;
            height: 42px;
            margin-right: 10px;
          `}
        />
        <Hiiyar
          css={css`
            width: 133.6px;
            height: 49.2px;
          `}
        />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          margin-left: 50px;
          & > div {
            height: auto;
            display: flex;
            flex-direction: column;
            margin: 0px 30px;
            & > a {
              margin: 5px 0;
            }
          }
        `}
      >
        <div>
          <NavLink>WHAT WE DO</NavLink>
          <NavLink>WORK</NavLink>
        </div>
        <div>
          <NavLink>CLIENTS</NavLink>
          <NavLink>TALENTS</NavLink>
        </div>
        <div>
          <NavLink>CONTACT</NavLink>
          <NavLink>SOCIAL:</NavLink>
        </div>
      </div>
    </Content>
  </footer>
);

export default Footer;
