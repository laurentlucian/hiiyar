import React, { useState } from "react";
import { css } from "@emotion/core";
import { Heading3, Paragraph } from "../components/typography";
import Content from "../components/content";
import { FifthCurve as FifthCurveSvg } from "../vectors/curves";
import RouterAnchor from "../components/routerAnchor";
import Button from "../components/button";

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
            We're based in LA with a global network of influencers spanning in NA, SA and
            SEA
          </Paragraph>
          <form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            css={css`
              display: flex;
              width: 600px;
              flex-direction: column;
              align-content: center;
            `}
          >
            <fieldset
              css={css`
                display: flex;
                flex-direction: column;
                background-color: lightgreen;
                text-decoration: none;
                border: 0;

                & input,
                textarea {
                  border-radius: 5px;
                  border-width: 0;
                  outline: none;
                  width: 100%;
                  font-size: 17px;
                }
                & input {
                  height: 44px;
                }
                & p {
                  margin: 5px;
                  font-weight: 600;
                }
              `}
            >
              <div
                css={css`
                  display: flex;
                  background-color: lightblue;
                `}
              >
                <div>
                  <p>Your name</p>
                  <input name="text" maxLength="100" {...name} />
                </div>
                <div
                  css={css`
                    flex-grow: 1;
                    margin-left: 30px;
                  `}
                >
                  <p>Your email</p>
                  <input name="email" maxLength="100" {...email} />
                </div>
              </div>
              <label
                css={css`
                  display: flex;
                  justify-content: space-between;
                  margin-top: 20px;
                `}
              >
                <p>Describe your needs</p>
                <p>{255 - description.text.length} characters remaining</p>
              </label>
              <textarea
                name="message"
                cols="50"
                rows="7"
                maxLength="255"
                {...description}
              />
            </fieldset>
            <Button CTA>Send</Button>
          </form>
        </Content>
      </RouterAnchor>
    </section>
  );
};
