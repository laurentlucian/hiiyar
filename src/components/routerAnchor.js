import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useRouter } from "../routerUtils";

export default ({ name, children }) => {
  const [routerActions] = useRouter();

  return (
    <VisibilitySensor
      partialVisibility
      offset={{ top: 500 }}
      minTopValue={500}
      onChange={isVisible => {
        routerActions.set(name, isVisible);
      }}
    >
      <div id={name}>{children}</div>
    </VisibilitySensor>
  );
};
