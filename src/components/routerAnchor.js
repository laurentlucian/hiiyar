import React from "react";
import VisibilitySensor from "react-visibility-sensor";

export default ({ name, children }) => {
  return (
    <VisibilitySensor
      partialVisibility
      offset={{ top: 400 }}
      minTopValue={500}
      onChange={isVisible =>
        console.log(name, isVisible ? "is now visible" : "is not visible")
      }
    >
      <div id={name}>{children}</div>
    </VisibilitySensor>
  );
};
