import React from "react";

export default props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="202.914"
    height="93"
    viewBox="0 0 202.914 93"
    {...props}
  >
    <defs>
      <filter
        id="Path_708"
        width="202.914"
        height="93"
        x="0"
        y="0"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy="10" />
        <feGaussianBlur result="blur" stdDeviation="7.5" />
        <feFlood flood-color="#4d1226" flood-opacity=".302" />
        <feComposite in2="blur" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g
      id="BOTAO_COMECAR"
      data-name="BOTAO COMECAR"
      transform="translate(-1102.5 -27.766)"
    >
      <g style={{ filter: "url(#Path_708)" }} transform="translate(1102.5 27.77)">
        <path
          id="Path_708-2"
          d="M24 0h109.914a24 24 0 0 1 0 48H24a24 24 0 0 1 0-48z"
          style={{ fill: "#fff" }}
          data-name="Path 708"
          transform="translate(22.5 12.5)"
        />
      </g>
      <text
        id="LET_S_TALK"
        style={{
          fill: "#a11846",
          fontSize: "16px",
          fontFamily: "Nunito-Black,Nunito",
          fontWeight: 800,
          letterSpacing: ".002em",
        }}
        data-name="LET'S TALK"
        transform="translate(1163 71.008)"
      >
        <tspan x="0" y="0">
          LET&apos;S TALK
        </tspan>
      </text>
    </g>
  </svg>
);
