import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
import "./normalize.css";
import { Global, css } from "@emotion/core";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Global
          styles={css`
            body {
              font-family: "Nunito", -apple-system, BlinkMacSystemFont, Segoe UI,
                Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
                Segoe UI Symbol;
            }
          `}
        />
        <Header siteTitle={data.site.siteMetadata.title} />

        <main>{children}</main>
        {/* <Footer /> */}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
