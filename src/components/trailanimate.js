import React, { useRef, useEffect } from "react";
import useVisibilitySensor from "@rooks/use-visibility-sensor";

import { animated, useTrail } from "react-spring";

export const Recipes = {
  fadeInLeft: {
    start: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    stop: { opacity: 0, transform: "translate3d(-80px, 0, 0)" },
  },
  fadeInRight: {
    start: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    stop: { opacity: 0, transform: "translate3d(80px, 0, 0)" },
  },
  fadeInDown: {
    start: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    stop: { opacity: 0, transform: "translate3d(0, -40px, 0)" },
  },
};

export default props => {
  const rootNode = useRef(null);

  const { isVisible } = useVisibilitySensor(rootNode, {
    intervalCheck: false,
    scrollCheck: true,
    resizeCheck: true,
    partialVisibility: true,
  });

  const [trail, set] = useTrail(React.Children.count(props.children), () => ({
    opacity: 0,
    transform: "translate3d(-80px,0,0)",
  }));

  if (isVisible) {
    set(props.recipe.start);
  }
  if (!isVisible) {
    set(props.recipe.stop);
  }

  const childrenArray = React.Children.toArray(props.children);

  return (
    <>
      <span
        ref={rootNode}
        style={{
          width: "100%",
          left: 0,
          right: 0,
          height: "100%",
          pointerEvents: "none",
          position: "absolute",
        }}
      />
      {trail.map((style, index) => (
        <animated.div style={style}>{childrenArray[index]}</animated.div>
      ))}
    </>
  );
};
