import React, { useState, useMemo } from "react";
import Content from "./content";
import LogoSvg from "../vectors/logo";
import HiiyarSvg from "../vectors/hiiyar";
import { css } from "@emotion/core";
import Button from "./../components/button";
import { NavLink } from "./typography";
import useWindowPosition from "./hooks/useWindowPosition";

const stickHeader = css`
  position: fixed;
  margin-top: 0;
  background: white;
  padding: 0;

  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.22);
  & a:not([data-button="yes"]) {
    font-size: 13px;
    color: #4d4d4d;
  }
`;

const goTo = name => e => {
  e.preventDefault();

  const section = document.getElementById(name);
  if (section) section.scrollIntoView({ behavior: "smooth" });
};

const Header = () => {
  const [isFixed, setFixed] = useState(false);

  const activeRouter = "";
  // /@todo
  const position = useWindowPosition({ throttle: 50 });

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
          onClick={goTo("hero")}
          css={css`
            width: 100.8px;
            cursor: pointer;
          `}
        />
        <HiiyarSvg
          css={css`
            width: 134px;
            fill: white;
          `}
        />
        <nav
          css={css`
            margin-left: auto;
          `}
        >
          <NavLink
            onClick={goTo("about")}
            href="#about"
            active={activeRouter === "about"}
          >
            WHAT WE DO
          </NavLink>
          <NavLink
            onClick={goTo("clients")}
            href="#clients"
            active={activeRouter === "clients"}
          >
            CLIENTS
          </NavLink>
          <NavLink
            onClick={goTo("talents")}
            href="#talents"
            active={activeRouter === "talents"}
          >
            TALENTS
          </NavLink>
          <Button
            onClick={goTo("contact")}
            href="#contact"
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
        </nav>
      </Content>
    </header>
  );
};

Header.defaultProps = {
  siteTitle: `Hiiyar`,
};

export default Header;
