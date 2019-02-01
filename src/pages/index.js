import React, { useState, useContext } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../modules/Hero";
import About from "../modules/About";
import Clients from "../modules/Clients";
import Talents from "../modules/Talents";
import Info from "../modules/Info";
import Contact from "../modules/Contact";

import VisibilitySensor from "react-visibility-sensor";
import { Router } from "@reach/router";

// const HashRouter = ({ routerName, render }) => {
//   return (
//     <>
//       <div id={`${routerName}`} />
//       <Visibi
//       {render}
//       <div id={`end-${routerName}`} />
//     </>
//   );
// };
export const RouterContext = React.createContext();

const HashRouter = ({ children }) => {
  const [activeRouter, setActive] = useContext(RouterContext);

  const checkVisibility = routerName => isVisible => {
    console.log(routerName, "isVisibile?", isVisible);
    if (isVisible) {
      setActive(routerName);
    }
  };

  const modifiedChildrens = React.Children.map(children, children => {
    if (!children.props.routerName) return;
    return (
      <React.Fragment>
        <div id={children.props.routerName} />
        <VisibilitySensor
          minTopValue={500}
          partialVisibility="top"
          onChange={checkVisibility(children.props.routerName)}
        >
          {children}
        </VisibilitySensor>
      </React.Fragment>
    );
  }).filter(Boolean);

  console.log("Active", activeRouter);

  return modifiedChildrens;
};

const RouterStore = props => {
  const context = useState(null);

  return (
    <RouterContext.Provider value={context}>{props.children}</RouterContext.Provider>
  );
};

const IndexPage = () => (
  <RouterStore>
    <Layout>
      <SEO title="Home" keywords={[`hiiyar`, `content`, `creator`]} />
      <HashRouter>
        <Hero routerName="hero" />
        <About routerName="about" />
        <Clients routerName="clients" />
        <Talents routerName="talents" />
        <Info routerName="info" />
        <Contact routerName="contact" />
      </HashRouter>
    </Layout>
  </RouterStore>
);

export default IndexPage;
