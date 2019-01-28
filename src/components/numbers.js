import React from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Number extends React.Component {
  state = {
    done: false,
  };

  onVisibilityChange = isVisible => {
    if (isVisible) this.timeout = setTimeout(this.setState({ done: true }), 6000);
  };

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  render() {
    return (
      <VisibilitySensor
        offset={{ top: -20 }}
        partialVisibility={true}
        onChange={this.onVisibilityChange}
      >
        {({ isVisible }) =>
          isVisible ? (
            <CountUp
              start={this.state.done ? this.props.value : 0}
              end={this.props.value}
              duration={this.props.duration}
              separator=","
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "31px",
                fontWeight: "bold",
                lineHeight: 1.38,
                color: "#ffffff",
                width: "283px",
              }}
            />
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "31px",
                fontWeight: "bold",
                lineHeight: 1.38,
                color: "#ffffff",
                width: "283px",
              }}
            >
              0
            </div>
          )
        }
      </VisibilitySensor>
    );
  }
}

export default Number;
