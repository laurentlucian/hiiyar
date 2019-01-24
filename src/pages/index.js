import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../modules/Hero";
import Nav from "../modules/Nav";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`hiiyar`, `content`, `creator`]} />
    <Hero />
    <Nav />
  </Layout>
);

export default IndexPage;
