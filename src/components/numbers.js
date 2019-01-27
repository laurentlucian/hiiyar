import React from "react";
import { css } from "@emotion/core";
import Button from "./button";

import CountUp, { start } from "react-countup";
import VisibilitySensor, { onVisibilityChange } from "react-visibility-sensor";

class Number extends React.Component {
  onVisibilityChange(isVisible) {}

  render() {
    return (
      <VisibilitySensor>
        {({ isVisible }) =>
          isVisible ? (
            <CountUp
              end={this.props.value}
              duration={this.props.duration}
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
            />
          ) : (
            <div>not</div>
          )
        }
      </VisibilitySensor>
    );
  }
}

export default Number;
