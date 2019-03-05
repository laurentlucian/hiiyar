import React, { useState, useContext } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../modules/Hero";
import About from "../modules/About";
import Clients from "../modules/Clients";
import Talents from "../modules/Talents";
import Info from "../modules/Info";
import Contact from "../modules/Contact";

const IndexPage = () => (
  <Layout>
    <SEO lang={`en`} keywords={[`hiiyar`, `content`, `creator`]} />
    <Hero routerName="hero" />
    <About routerName="about" />
    <Clients routerName="clients" />
    <Talents routerName="talents" />
    <Info routerName="info" />
    <Contact routerName="contact" />
  </Layout>
);

export default IndexPage;
