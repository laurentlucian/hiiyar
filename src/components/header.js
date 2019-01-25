import React from "react";
import Content from "./content";
import Logo from "../vectors/logo";
import Hiiyar from "../vectors/hiiyar";
import { css } from "@emotion/core";
import Button from "./../components/button";
import { NavLink } from "./typography";

const Header = ({ siteTitle }) => (
  <header
    css={css`
      position: fixed;
      z-index: 1;
      width: 100%;
      margin-top: 52px;
    `}
  >
    <Content
      css={css`
        display: flex;
        width: 100%;
      `}
    >
      <Logo
        css={css`
          width: 100.8px;
        `}
      />
      <Hiiyar
        css={css`
          width: 133.6px;
        `}
      />
      <div
        css={css`
          margin: 0 0 0 auto;
        `}
      >
        <NavLink>WHAT WE DO</NavLink>
        <NavLink>TALENTS</NavLink>
        <NavLink>CLIENTS</NavLink>
        <NavLink>WORK</NavLink>
        <Button raised>Let's Talk</Button>
      </div>
    </Content>
  </header>
);

Header.defaultProps = {
  siteTitle: `Hiiyar`,
};

export default Header;
