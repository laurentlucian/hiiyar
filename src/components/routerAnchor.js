import React from "react";

export default ({ name, children }) => {
  return (
    <div id={name} data-router-section={name}>
      {children}
    </div>
  );
};
