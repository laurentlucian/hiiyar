import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../modules/Hero";
import About from "../modules/About";
import Clients from "../modules/Clients";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`hiiyar`, `content`, `creator`]} />
    <Hero />
    <About />
    <Clients />
  </Layout>
);

export default IndexPage;
