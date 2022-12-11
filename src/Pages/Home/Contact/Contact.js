import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";

const Contact = () => {
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_jhccm16', 'template_wxa2k68', form.current, 'HQ4hH0DSeEl66QURX')
      .then((result) => {
          console.log(result.text);
          toast.success('Submit Succesess');
          event.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div id="contact-me" className="mb-10 mt-10">
      <h1 className="text-center text-2xl font-bold text-primary rounded-lg">
        Contect Me
      </h1>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center items-center mx-auto h-72 rounded-lg mt-5">
        <input
          type="text"
          required
          name="user_name"
          placeholder="Your name"
          className="input input-bordered input-primary w-full max-w-xs mb-4"
        />
        <input
          type="email"
          required
          name="user_email"
          placeholder="Your email address"
          className="input input-bordered input-primary w-full max-w-xs mb-4"
        />
        <textarea name="message" required className="textarea textarea-primary w-full max-w-xs mb-4" placeholder="Message"></textarea>
        <button type="submit" className="btn btn-primary w-full max-w-xs">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
