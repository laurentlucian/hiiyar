import React, { useState, useMemo } from "react";
import Content from "./content";
import HiiyarSvg from "../vectors/hiiyar";
import { css } from "@emotion/core";
import useWindowPosition from "./hooks/useWindowPosition";

import Nav from "./nav";
import { goTo } from "../routerUtils";

const stickHeader = css`
  position: fixed;
  background: white;
  margin: 0;
  padding: 0;

  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.22);
  & a:not([data-button="yes"]) {
    color: #4d4d4d;
  }
`;

const Header = () => {
  const [isFixed, setFixed] = useState(false);
  // /@todo
  const position = useWindowPosition({ throttle: 50 });

  useMemo(
    () => {
      setFixed(position.y > 32 + 15);
    },
    [position.y > 32 + 15]
  );

  return (
    <header
      css={[
        css`
          position: absolute;
          z-index: 1;
          width: 100%;
          margin-top: 49px;
          background: transparent;
          /* animation: fadeInDown both 1s; */
        `,
        isFixed && stickHeader,
      ]}
    >
      <Content
        css={css`
          display: flex;
          width: 100%;
          height: 70px;
          align-items: center;
          /* background-color: red; */
        `}
      >
        {/* <LogoSvg
          onClick={goTo("hero")}
          css={css`
            width: 100.8px;
            cursor: pointer;
          `}
        /> */}
        <HiiyarSvg
          onClick={goTo("hero")}
          css={css`
            width: 134px;
            fill: ${isFixed ? "#83163B" : "white"};
            cursor: pointer;
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
