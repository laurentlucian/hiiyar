import React, { useState } from "react";
import { css } from "@emotion/core";
import { Heading3, Paragraph } from "../components/typography";
import Content from "../components/content";
import { FifthCurve as FifthCurveSvg } from "../vectors/curves";
import RouterAnchor from "../components/routerAnchor";

const useInputValue = initialValue => {
  const [text, setText] = useState(initialValue);
  return {
    text,
    onChange: e => setText(e.target.value),
  };
};

export default () => {
  const name = useInputValue("");
  const email = useInputValue("");
  const description = useInputValue("");

  return (
    <section
      css={css`
        position: relative;
      `}
    >
      <FifthCurveSvg
        css={css`
          position: absolute;
          top: 0;
          transform: translateY(-100%);
          fill: white;
        `}
      />
      <RouterAnchor name="contact">
        <Content
          css={css`
            display: flex;
            height: 300px;
            flex-direction: column;
            align-items: center;
          `}
        >
          <Heading3 red style={{ margin: 0 }}>
            Ready when you are.
          </Heading3>
          <Paragraph heading center style={{ fontSize: "30px", color: "#4d4d4d" }}>
            We're based in Los Angeles with a global network of influencers spanning in
            North America, South America and South East Asia.
          </Paragraph>
          <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <fieldset
              css={css`
                background-color: lightcoral;
                text-decoration: none;
                border: 0;

                & input,
                textarea {
                  border-radius: 5px;
                  border-width: 0;
                  outline: none;
                  width: 100%;
                }
              `}
            >
              <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  background-color: lightblue;
                `}
              >
                <div>
                  <p>Your name</p>
                  <input name="text" maxLength="100" {...name} />
                </div>
                <div>
                  <p>Your email</p>
                  <input name="email" maxLength="100" {...email} />
                </div>
              </div>
              <label
                css={css`
                  display: flex;
                  justify-content: space-between;
                `}
              >
                <p>Describe your needs</p>
                <p>{255 - description.text.length} characters remaining</p>
              </label>
              <textarea
                name="message"
                cols="50"
                rows="6"
                maxLength="255"
                {...description}
              />
            </fieldset>
          </form>
        </Content>
      </RouterAnchor>
    </section>
  );
};

// <div
//   css={css`
//     margin: 100px 0;
//     display: flex;
//     width: 100%;
//     justify-content: space-around;
//     & a {
//       text-decoration: none;
//       font-size: 45px;
//       color: #3f3f3f;
//       font-weight: bold;
//       line-height: 1.33;
//     }
//   `}
// >
//   <a href="mailto:contact@hiiyar.com" >
//     contact@hiiyar.com
//   </a>
//   <a href="tel:8188572905" >
//     forwardphonenumber
//   </a>
//   </div>
