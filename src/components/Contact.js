import React, { useState } from "react";

// import { validateEmail } from '../../utils/helpers';
// if (!validateEmail(email) || !userName) {
// setErrorMessage('Email or username is invalid');

const FORM_ENDPOINT = "";
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }
  return (
    <div
      id="contact"
      className="flex snap-start
      items-center justify-center
      w-screen h-screen"
    >
      <div
        className="h-screen flex flex-col 
      items-center justify-center"
      >
        <div className="mb-3 pt-0">
          <h3 className="text-center text-gray-800 text-s">Contact Me</h3>
        </div>
        <form className="bg-gray-600 shadow-md rounded px-32 pt-3 pb-8 mb-4 w-full" action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank">
          <div className="mb-3 pt-0 ">
            <input type="text" placeholder="Your name" name="name" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" required />
          </div>
          <div className="mb-3 pt-0">
            <input type="email" placeholder="Email" name="email" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" required />
          </div>
          <div className="mb-3 pt-0">
            <textarea placeholder="Your message" name="message" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" required />
          </div>
          <div className="mb-3 pt-0">
            <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
              Send a message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
