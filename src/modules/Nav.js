import React from "react";
import { css } from "@emotion/core";

import Logo from "../vectors/logo";
import Hiiyar from "../vectors/hiiyar";

const Nav = () => {
  return (
    <div
      css={css`
        display: flex;
        position: relative;
        width: 100vw;
        background: lightblue;
      `}
    >
      <Logo />
      <Hiiyar css={css``}/>
    </div>
  );
};

export default Nav;
