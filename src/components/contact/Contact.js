import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import { TailSpin } from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Contact = () => {
  const form = useRef();

  const [userName, setUserName] = useState("");
  const [userNameEmpty, setUserNameEmpty] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userEmailEmpty, setUserEmailEmpty] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [userMessageEmpty, setUserMessageEmpty] = useState(false);

  const [onFocus, setOnFocus] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [emailSending, setEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (onFocus) {
      if (!userName) {
        setUserNameEmpty(true);
      } else {
        setUserNameEmpty(false);
      }
      if (!userEmail) {
        setUserEmailEmpty(true);
      } else {
        setUserEmailEmpty(false);
      }
      if (!userMessage) {
        setUserMessageEmpty(true);
      } else {
        setUserMessageEmpty(false);
      }
    }

    if (!userName || !userEmail || !userMessage) {
      setIsValid(false);
      return;
    }

    if (userName && userEmail && userMessage) {
      setIsValid(true);
    }
  }, [userName, userEmail, userMessage, onFocus]);

  const sendEmail = (e) => {
    e.preventDefault();
    setOnFocus(true);

    if (isValid) {
      setEmailSending(true);
      emailjs
        .sendForm(
          "service_ank4atj",
          "template_slc7qnr",
          form.current,
          "user_YLjdUwssXdpOVQOicxF5K"
        )
        .then((result) => {
          setEmailSending(false);
          setEmailSent(true);
          setOnFocus(false);
          setUserName("");
          setUserEmail("");
          setUserMessage("");
        })
        .catch((err) => {
          setEmailSending(false);
          setEmailSent(false);
          setOnFocus(false);
          setUserName("");
          setUserEmail("");
          setUserMessage("");
        });
    }
    if (!isValid) {
      return;
    }
  };

  return (
    <div id="contact" className="container-fluid h-100">
      <div className="container text-center pt-5">
        <h1 className="text-white text-uppercase fw-bold fs-3">Let's Work</h1>
        <p className="text-white fw-lighter mt-4">
          Let me help you with your business and I promise I will do what I can
          to the best of my abilities.
        </p>
      </div>

      <div className="container d-flex justify-content-center">
        {emailSending && <TailSpin color="#FFF" height={80} width={80} />}
      </div>
      <form
        ref={form}
        type="submit"
        onSubmit={sendEmail}
        className="container py-5"
      >
        <div className="mb-3 row">
          <div className="col-xs-12 pb-3 col-md-6">
            <input
              type="text"
              className={userNameEmpty ? `form-control empty` : `form-control`}
              id="exampleFormControlInput1"
              placeholder="Name"
              name="user_name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <input
              type="email"
              className={userEmailEmpty ? `form-control empty` : `form-control`}
              id="exampleFormControlInput1"
              placeholder="Email"
              name="user_email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3">
          <textarea
            className={userMessageEmpty ? `form-control empty` : `form-control`}
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message"
            name="message"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="container text-center">
          {emailSent && <p className="text-white">Email Sent</p>}
          <button
            disabled={emailSending}
            type="submit"
            className="btn bg-white text-primary mt-4 px-4 py-3 text-white fw-bold text-uppercase"
          >
            send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
