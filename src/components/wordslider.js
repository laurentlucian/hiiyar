import React, { useState } from "react";

import { animated, Transition } from "react-spring/renderprops";
import { useInterval } from "./hooks/useInterval";

export default props => {
  if (React.Children.count(props.children) === 1) {
    return <span>{React.Children.toArray(props.children)[0]}</span>;
  }

  const [index, setIndex] = useState(0);
  const count = React.Children.count(props.children);

  useInterval(() => setIndex((index + 1) % count), 4000);

  return (
    <Transition
      items={index}
      keys={item => item}
      native
      initial={null}
      from={{ transform: "translate3d(0,20%,0)", opacity: 0 }}
      enter={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
      leave={{
        position: "absolute",
        transform: "translate3d(0, -20%,0)",
        opacity: 0,
      }}
    >
      {item => style => (
        <animated.span style={style}>{props.children[item]}</animated.span>
      )}
    </Transition>
  );
};
