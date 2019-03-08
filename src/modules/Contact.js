import React, { useState } from "react";
import { css } from "@emotion/core";
import { Heading3, Paragraph } from "../components/typography";
import Content from "../components/content";
import { FifthCurve as FifthCurveSvg } from "../vectors/curves";
import RouterAnchor from "../components/routerAnchor";
import Button from "../components/button";
import Textarea from "react-textarea-autosize";

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: e => setValue({ [e.target.name]: e.target.value }),
  };
};

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

export default () => {
  const inputs = useInputValue({});
  // const email = useInputValue({});
  // const message = useInputValue({});
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    //@todo verify if empty & @email.com

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...inputs.value.name,
        ...inputs.value.email,
        ...inputs.value.message,
      }),
    })
      .then(() => setSent(true))
      .catch(error => setSent(null));

    e.preventDefault();
  };
  console.log("test", ...message.value);

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
            flex-direction: column;
            align-items: center;
          `}
        >
          <Heading3 red style={{ margin: 0 }}>
            Ready when you are.
          </Heading3>
          <Paragraph heading center style={{ fontSize: "30px", color: "#4d4d4d" }}>
            We're based in LA with a global network of influencers spanning NA, SA and SEA
          </Paragraph>
          {sent ? (
            <>
              <Heading3 red>Thank you!</Heading3>
            </>
          ) : sent === null ? (
            <Heading3>
              Oh no, an error has occurred. Please, send an email to us instead.
            </Heading3>
          ) : (
            <form
              name="contact"
              method="post"
              action="#"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              css={css`
                display: flex;
                width: 100%;
                max-width: 600px;
                flex-direction: column;
                align-content: center;
                align-items: center;
                /* @media only screen and (max-width: 610px) {
                } */
              `}
            >
              <input type="hidden" name="bot-field" />
              <div
                css={css`
                  display: flex;
                  flex-flow: column nowrap;
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
                    margin: 5px 0;
                    font-weight: 600;
                  }
                `}
              >
                <span
                  css={css`
                    display: flex;
                    @media only screen and (max-width: 610px) {
                      flex-direction: column;
                    }
                  `}
                >
                  <input
                    type="text"
                    name="name"
                    maxLength="30"
                    placeholder="Name"
                    value={inputs.value.name}
                    onChange={inputs.onChange}
                    css={css`
                      flex: 1 1 80%;
                    `}
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    maxLength="40"
                    css={css`
                      flex: 2 1 100%;
                      margin-left: 30px;
                    `}
                    value={inputs.value.email}
                    onChange={inputs.onChange}
                  />
                </span>
                <label
                  css={css`
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                  `}
                >
                  <label htmlFor="message">Describe your needs</label>
                  <label>
                    {400 - (inputs.value.message ? inputs.value.message.length : 0)}{" "}
                    characters remaining
                  </label>
                </label>
                <Textarea
                  name="message"
                  type="text"
                  maxLength="400"
                  minRows="6"
                  value={inputs.value.message}
                  onChange={inputs.onChange}
                  css={css`
                    resize: none;
                  `}
                />
              </div>
              <Button
                type="submit"
                style={{ width: "100px", height: "40px" }}
                onClick={handleSubmit}
                CTA
              >
                Send
              </Button>
            </form>
          )}
          <Paragraph
            css={css`
              margin-top: 30px;
            `}
            center
            heading
          >
            You could also directly email us at <a>contact@hiiyar.com</a>
          </Paragraph>
        </Content>
      </RouterAnchor>
    </section>
  );
};
