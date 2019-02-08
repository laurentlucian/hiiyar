import { useEffect, useState } from "react";
import _throttle from "lodash.throttle";

let supportsPassive = false;
try {
  const opts = Object.defineProperty({}, "passive", {
    get: function() {
      supportsPassive = true;
      return "";
    },
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

const getPosition = () => ({
  x: typeof window === "undefined" ? 0 : window.pageXOffset,
  y: typeof window === "undefined" ? 0 : window.pageYOffset,
});

export default ({ throttle }) => {
  const [position, setPosition] = useState(getPosition());
  let handleScroll = _throttle(() => {
    setPosition(getPosition());
  }, throttle);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener(
      "scroll",
      handleScroll,
      supportsPassive ? { passive: true } : false
    );
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return position;
};
