import React from "react";
import { css } from "@emotion/core";
import Button from "./button";

import CountUp, { start } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Number extends React.Component {
  // onVisibilityChange(isVisible) {
  //   if (isVisible) {
  //     start(this.myCountUp);
  //   }
  // }
  render() {
    return (
      <VisibilitySensor onChange={this.onVisibilityChange}>
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
        {/*({ countUpRef, start }) => (
          <div>
            { <span ref={countUpRef} /> }
            { <Button onClick={start}>Start</Button> }
          </div>
        )*/}
      </VisibilitySensor>
    );
  }
}

export default Number;
