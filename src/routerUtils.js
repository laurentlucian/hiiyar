import React, { useState, useContext, useMemo } from "react";

export const goTo = name => e => {
  e.preventDefault();

  const section = document.getElementById(name);
  if (section) return section.scrollIntoView({ behavior: "smooth" });
};

const RouterContext = React.createContext();

export const useRouter = () => {
  const routerCtx = useContext(RouterContext);
  if (routerCtx) return [routerCtx, null, null];

  const [routerActive, setRouterActive] = useState(null);

  const routerObj = useMemo(
    () => ({
      set: (name, value) => {
        setRouterActive(active => {
          if (name === active && value === false) return "";
          // document.title = name;
          if (value) return name;
        });
      },
      value: routerActive,
    }),
    [routerActive]
  );

  return [null, RouterContext.Provider, routerObj];
};
