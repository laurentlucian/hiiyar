import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../modules/Hero";
import About from "../modules/About";
import Clients from "../modules/Clients";
import Talents from "../modules/Talents";
import Info from "../modules/Info";
import Work from "../modules/Work";
import Brands from "../modules/Brands";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`hiiyar`, `content`, `creator`]} />
    <Hero />
    <About />
    <Clients />
    <Talents />
    <Info />
    <Work />
    <Brands />
  </Layout>
);

export default IndexPage;
