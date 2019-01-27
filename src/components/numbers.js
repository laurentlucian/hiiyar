import React from "react";
import { css } from "@emotion/core";
import Button from "./button";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Number extends React.Component {
  render() {
    return (
      <CountUp
        start={100}
        end={4301201}
        duration={2.75}
        separator=","
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "53px",
          fontWeight: "bold",
          lineHeight: 1.38,
          color: "#ffffff",
          width: "283px",
        }}
      >
        {({ countUpRef, start }) => (
          <div>
            <span ref={countUpRef} />
            <Button onClick={start}>Start</Button>
          </div>
        )}
      </CountUp>
    );
  }
}

export default Number;
