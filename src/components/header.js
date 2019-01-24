// import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Content from "./content";
import Logo from "../vectors/logo";
import Hiiyar from "../vectors/hiiyar";
import { css } from "@emotion/core";
import Button from "./../components/button";

const Header = ({ siteTitle }) => (
  <header
    css={css`
      position: fixed;
      z-index: 1;
      width: 100%;
    `}
  >
    <Content
      css={css`
        display: flex;
        width: 100%;
        background: lightblue;
        /* padding: 52px 0px 0px 0px; */
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
          background: lightpink;
        `}
      >
        <a>WHAT WE DO</a>
        <a>TALENTS</a>
        <a>CLIENTS</a>
        <a>WORK</a>
        <Button raised>Let's Talk</Button>
      </div>
    </Content>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
