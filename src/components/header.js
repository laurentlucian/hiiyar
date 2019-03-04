import React, { useState, useMemo } from "react";
import Content from "./content";
import LogoSvg from "../vectors/logo";
import HiiyarSvg from "../vectors/hiiyar";
import { css } from "@emotion/core";
import useWindowPosition from "./hooks/useWindowPosition";

import Nav from "./nav";
import { goTo } from "../routerUtils";

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

const Header = () => {
  const [isFixed, setFixed] = useState(false);
  // /@todo
  const position = useWindowPosition({ throttle: 50 });

  useMemo(
    () => {
      setFixed(position.y > 53 + 15);
    },
    [position.y > 53 + 15]
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
        <Nav isFixed={isFixed} />
      </Content>
    </header>
  );
};

Header.defaultProps = {
  siteTitle: `Hiiyar`,
};

export default Header;
