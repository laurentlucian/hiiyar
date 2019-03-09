import React, { useState } from "react";
import { css } from "@emotion/core";
import { Heading3, Paragraph } from "../components/typography";
import Content from "../components/content";
import { FifthCurve as FifthCurveSvg } from "../vectors/curves";
import RouterAnchor from "../components/routerAnchor";
import Button from "../components/button";

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: e => setValue(e.target.value),
  };
};

const encode = data => {
  //@todo make it direct just testing
  const obj = Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
  return obj;
};

export default () => {
  const name = useInputValue("");
  const email = useInputValue("");
  const message = useInputValue("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (
      !email.value.includes("@") ||
      name.value === "" ||
      email.value === "" ||
      message.value === ""
    )
      return setError(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })
      .then(() => setSent(true))
      .catch(error => setSent(null));
  };

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
                /* @media only screen and (max-width: 400px) {
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
                    @media only screen and (max-width: 400px) {
                      flex-direction: column;
                    }
                  `}
                >
                  <input
                    type="text"
                    name="name"
                    maxLength="30"
                    placeholder="Name"
                    value={name.value}
                    onChange={name.onChange}
                    css={css`
                      flex: 1 1 80%;
                    `}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    maxLength="40"
                    css={css`
                      flex: 2 1 100%;
                      margin-left: 30px;
                      @media only screen and (max-width: 400px) {
                        margin: 15px 0;
                      }
                    `}
                    value={email.value}
                    onChange={email.onChange}
                  />
                </span>
                <div
                  css={css`
                    display: flex;
                    flex-flow: row wrap;
                    margin-top: 20px;
                    & textarea {
                      flex: 1 100%;
                    }
                    & span {
                      flex: 1 0;
                    }
                    @media only screen and (max-width: 400px) {
                      & span,
                      dt {
                        flex: 1 100%;
                        text-align: center;
                      }
                      & dt {
                        order: 3;
                      }
                    }
                  `}
                >
                  <span htmlFor="message">Describe your needs</span>
                  <dt>
                    {400 - (message.value ? message.value.length : 0)} characters
                    remaining
                  </dt>

                  <textarea
                    name="message"
                    maxLength="400"
                    rows="6"
                    value={message.value}
                    onChange={message.onChange}
                    css={css`
                      resize: none;
                    `}
                  />
                </div>
              </div>
              <Button
                type="submit"
                style={css`
                  width: 100px;
                  height: 40px;
                  border: ${error ? "2px solid #FF3056" : ""};
                  background-color: ${error ? "#FF3056" : ""};
                  color: ${error ? "white" : ""};
                `}
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
