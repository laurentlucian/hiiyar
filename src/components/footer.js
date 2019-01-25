import PropTypes from "prop-types";
import React from "react";
import Content from "./content";
import Logo from "../vectors/logo";
import Hiiyar from "../vectors/hiiyar";
import { css } from "@emotion/core";
import { NavLink } from "./typography";

const Footer = () => (
  <footer
    css={css`
      position: absolute;
      bottom: 52px;
      width: 100%;
      z-index: 2;
      background-color: #a11846; /* test background */
    `}
  >
    <Content
      css={css`
        display: flex;
        width: 1000px; /* test size to keep it in the middle */
        margin: 0 auto;
        /* background-color: lightpink; */
      `}
    >
      <Logo
        css={css`
          width: 51.8px;
          height: 42.1px;
          margin: 34.7px 0px 0px 0px;
        `}
      />
      <Hiiyar
        css={css`
          width: 133.6px;
          height: 49.2px;
          margin: 34.7px 31.7px 0px 10px;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          width: 490px;
          height: 102px;
          padding-left: 55px;
          padding-top: 10.5px;
          padding-bottom: 24.5px;
          border-left: 1px solid white;
          /* background-color: lightseagreen; */
        `}
      >
        {/* im struggling to  align all this and idk how to individually css children*/}
        <NavLink margin>WHAT WE DO</NavLink>
        <NavLink>
          CLIENTS
        </NavLink>
        <NavLink test>CONTACT</NavLink>
        <NavLink>WORK</NavLink>
        <NavLink>TALENTS</NavLink>
        <NavLink noLink test>
          SOCIAL:
        </NavLink>{" "}
        {/* i was trying to take margin-right off contact and social for the social symbols*/}
      </div>
    </Content>
  </footer>
);

export default Footer;
