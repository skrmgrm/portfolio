import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="container-fluid h-100 p-5">
      <div className="container text-center pt-5">
        <h1 className="text-white text-uppercase fw-bold fs-3">Let's Work</h1>
        <p className="text-white fw-lighter mt-4">
          Don't be shy and just type something.
        </p>
      </div>
      <form type="submit" className="container py-5">
        <div class="mb-3 row">
          <div className="col-xs-12 pb-3 col-md-6">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="container text-center">
          <button
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
