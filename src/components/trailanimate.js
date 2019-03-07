import React, { useRef, useEffect } from "react";
import useVisibilitySensor from "@rooks/use-visibility-sensor";

import { animated, useTrail } from "react-spring";

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
    set({ opacity: 1, transform: "translate3d(0, 0, 0)" });
  }
  if (!isVisible) {
    set({ opacity: 0, transform: "translate3d(-80px, 0, 0)" });
  }

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
        <animated.div style={style}>{props.children[index]}</animated.div>
      ))}
    </>
  );
};
