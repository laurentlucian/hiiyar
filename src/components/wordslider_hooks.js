// import React, { useState, useRef } from "react";

// import { animated, useTransition, useChain } from "react-spring";
// import { useInterval } from "./hooks/useInterval";

// export default props => {
//   const [index, setIndex] = useState(0);
//   const count = React.Children.count(props.children);

//   useInterval(() => {
//     setIndex((index + 1) % count);
//   }, 4000);

//   const transRef = useRef();
//   const transitions = useTransition(index, item => item, {
//     ref: transRef,
//     from: { position: "relative", transform: "translate3d(0,20px,0)", opacity: 0 },
//     enter: { position: "relative", transform: "translate3d(0,0px,0)", opacity: 1 },
//     leave: [
//       {
//         position: "absolute",
//       },
//       {
//         transform: "translate3d(0, 20px,0)",
//         opacity: 0,
//       },
//     ],
//     config: { duration: props.duration },
//   });

//   useChain([transRef], [props.delay ? props.delay : 0]);

//   return transitions.map(({ item, key, props: style }) => (
//     <animated.div key={key} style={style}>
//       {props.children[item]}
//     </animated.div>
//   ));
// };
