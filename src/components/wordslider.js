import React, { useState, useEffect } from "react";

import { animated, Transition } from "react-spring";
import { useInterval } from "./hooks/useInterval";

export default props => {
  const [index, setIndex] = useState(0);
  const count = React.Children.count(props.children);

  useInterval(() => setIndex((index + 1) % count), 4000);

  return (
    <Transition
      items={index}
      keys={item => item}
      native
      delay={500}
      config={{ duration: 500 }}
      from={{ transform: "translate3d(0,15px,0)", opacity: 0 }}
      enter={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
      leave={{
        position: "absolute",
        transform: "translate3d(0, 15px,0)",
        opacity: 0,
      }}
    >
      {item => style => <animated.div style={style}>{props.children[item]}</animated.div>}
    </Transition>
  );
};
