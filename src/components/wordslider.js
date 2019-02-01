import React, { useState, useEffect } from "react";

import { animated, Transition } from "react-spring";

export default props => {
  const [index, setIndex] = useState(0);
  const count = React.Children.count(props.children);

  useEffect(
    () => {
      const timeout = setTimeout(() => {
        setIndex((index + 1) % count);
      }, 4000);

      return () => clearTimeout(timeout);
    },
    [index]
  );

  return (
    <Transition
      items={index}
      keys={item => item}
      native
      delay={500}
      config={{ duration: 300 }}
      from={{ transform: "translate3d(0,20px,0)", opacity: 0 }}
      enter={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
      leave={{
        position: "absolute",
        transform: "translate3d(0, 20px,0)",
        opacity: 0,
      }}
    >
      {item => style => <animated.div style={style}>{props.children[item]}</animated.div>}
    </Transition>
  );
};
