import React, { useState, useMemo } from "react";
import { css } from "@emotion/core";
import Button from "./../components/button";
import { NavLink } from "./typography";
import { goTo, useRouter } from "../routerUtils";

const Nav = props => {
  const [routerActions] = useRouter();
  const activeRouter = routerActions.value;
  console.log(activeRouter);

  return (
    <nav
      css={css`
        margin-left: auto;
      `}
    >
      <NavLink onClick={goTo("about")} href="#about" active={activeRouter === "about"}>
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
        raised={!props.isFixed}
        primary={props.isFixed}
        style={{ marginLeft: 64 }}
        shadow={
          props.isFixed &&
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
  );
};
export default React.memo(Nav);
