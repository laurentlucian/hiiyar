import React from "react";
import Content from "./content";
import Logo from "../vectors/logo";
import Hiiyar from "../vectors/hiiyar";
import { css } from "@emotion/core";
import { NavLink } from "./typography";
import { FooterCurve as CurveSvg } from "../vectors/curves";
import { goTo } from "../routerUtils";

const Footer = () => {
  return (
    <footer
      css={css`
        width: 100%;
        padding: 150px 0 50px 0;
        background-image: linear-gradient(82deg, #a11846, #4d1226);
        position: relative;
      `}
    >
      <CurveSvg
        css={css`
          position: absolute;
          width: 100%;
          top: 0;
          fill: white;
        `}
      />
      <Content
        css={css`
          display: flex;
          justify-content: center;
          @media only screen and (max-width: 650px) {
            flex-direction: column;
            align-content: center;
          }
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
              fill: white;
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
            <NavLink onClick={goTo("about")} href="#about">
              WHAT WE DO
            </NavLink>
            <NavLink onClick={goTo("talents")} href="#talents">
              TALENTS
            </NavLink>
          </div>
          <div>
            <NavLink>SOCIAL:</NavLink>
            <NavLink onClick={goTo("clients")} href="#clients">
              CLIENTS
            </NavLink>
          </div>
        </div>
      </Content>
    </footer>
  );
};

export default Footer;
