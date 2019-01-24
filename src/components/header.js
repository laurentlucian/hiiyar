import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header>
    <div
      css={{
        position: "fixed",
        width: "100%",
        margin: `0 auto`,
        maxWidth: 1300,
        padding: "1rem",
      }}
    >
      <h1 css={{ margin: 0 }}>
        <Link
          to="/"
          css={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
