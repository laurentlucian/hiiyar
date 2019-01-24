import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../modules/Hero";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`hiiyar`, `content`, `creator`]} />
    <Hero />
  </Layout>
);

export default IndexPage;
