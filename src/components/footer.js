import React from "react";
import Content from "./content";
import Logo from "../vectors/logo";
import Hiiyar from "../vectors/hiiyar";
import { css } from "@emotion/core";
import { NavLink } from "./typography";
import { FooterCurve as CurveSvg } from "../vectors/curves";
import { goTo, useRouter } from "../routerUtils";

const Footer = () => {
  const [routerActions] = useRouter();
  const activeRouter = routerActions.value;

  return (
    <footer
      css={css`
        width: 100%;
        height: 350px;
        padding-top: 150px;
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
          top: 0;
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
            <NavLink
              onClick={goTo("about")}
              href="#about"
            >
              WHAT WE DO
            </NavLink>
          </div>
          <div>
            <NavLink
              onClick={goTo("clients")}
              href="#clients"
            >
              CLIENTS
            </NavLink>
            <NavLink
              onClick={goTo("talents")}
              href="#talents"
            >
              TALENTS
            </NavLink>
          </div>
          <div>
            <NavLink>SOCIAL:</NavLink>
          </div>
        </div>
      </Content>
    </footer>
  );
};

export default Footer;
