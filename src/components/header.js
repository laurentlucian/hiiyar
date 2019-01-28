import React, { useState, useMemo } from "react";
import Content from "./content";
import LogoSvg from "../vectors/logo";
import HiiyarSvg from "../vectors/hiiyar";
import { css } from "@emotion/core";
import Button from "./../components/button";
import { NavLink } from "./typography";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

const stickHeader = css`
  position: fixed;
  margin-top: 0;
  background: white;
  padding: 0;

  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.22);
  & a {
    font-size: 13px;
    color: #4d4d4d;
  }
`;

const Header = () => {
  const [isFixed, setFixed] = useState(false);
  const position = useWindowScrollPosition({ throttle: 50 });

  useMemo(
    () => {
      setFixed(position.y > 52 + 15);
    },
    [position.y > 52 + 15]
  );

  return (
    <header
      css={[
        css`
          position: absolute;
          z-index: 1;
          width: 100%;
          margin-top: 52px;
          padding: 15px;
          background: transparent;
          transition: background-color 50ms;
          animation: fadeInDown both 1s;
        `,
        isFixed && stickHeader,
      ]}
    >
      <Content
        css={css`
          display: flex;
          width: 100%;
          align-items: center;
        `}
      >
        <LogoSvg
          css={css`
            width: 100.8px;
          `}
        />
        <HiiyarSvg
          css={css`
            width: 134px;
            fill: white;
          `}
        />
        <div
          css={css`
            margin-left: auto;
          `}
        >
          <NavLink>WHAT WE DO</NavLink>
          <NavLink>CLIENTS</NavLink>
          <NavLink>TALENTS</NavLink>
          <NavLink>WORK</NavLink>
          <Button
            raised={!isFixed}
            primary={isFixed}
            style={{ marginLeft: 64 }}
            shadow={
              isFixed &&
              css`
                &:hover {
                  box-shadow: 0 2px 15px 0 rgba(77, 18, 38, 0.56);
                }
              `
            }
          >
            Let's Talk
          </Button>
        </div>
      </Content>
    </header>
  );
};

Header.defaultProps = {
  siteTitle: `Hiiyar`,
};

export default Header;
