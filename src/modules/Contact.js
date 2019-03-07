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
  const message = useInputValue("");

  return (
    <section
      css={css`
        position: relative;
        background-color: lightgray;
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
            min-height: 300px;
            flex-direction: column;
            align-items: center;
            background-color: lightgoldenrodyellow;
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
            action="#contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            css={css`
              display: flex;
              width: 600px;
              flex-direction: column;
              align-content: center;
              align-items: center;
              background-color: lightblue;
            `}
          >
            <input type="hidden" name="bot-field" />
            <fieldset
              css={css`
                display: flex;
                flex-direction: column;
                text-decoration: none;
                border: 0;
                margin: 30px 0;

                & input,
                textarea {
                  border-radius: 5px;
                  border-width: 0;
                  outline: none;
                  width: 100%;
                  font-size: 17px;
                  padding: 10px;
                  background-color: #e8e8e8;
                }
                & input {
                  height: 44px;
                }
                & label {
                  margin: 5px;
                  font-weight: 600;
                }
              `}
            >
              <span
                css={css`
                  display: flex;
                `}
              >
                <span>
                  <label htmlFor="name">Your name</label>
                  <input type="text" name="text" maxLength="100" {...name} />
                </span>
                <span
                  css={css`
                    flex-grow: 1;
                    margin-left: 30px;
                  `}
                >
                  <label htmlFor="email">Your email</label>
                  <input name="email" maxLength="100" {...email} />
                </span>
              </span>
              <label
                css={css`
                  display: flex;
                  justify-content: space-between;
                  margin-top: 20px;
                `}
              >
                <label htmlFor="message">Describe your needs</label>
                <label>{255 - message.text.length} characters remaining</label>
              </label>
              <textarea name="message" cols="50" rows="7" maxLength="255" {...message} />
            </fieldset>
            <Button
              type="submit"
              style={{ width: "90px", height: "40px" }}
              /* onClick={e => e.preventDefault()} */
              CTA
            >
              Send
            </Button>
          </form>
        </Content>
      </RouterAnchor>
    </section>
  );
};
