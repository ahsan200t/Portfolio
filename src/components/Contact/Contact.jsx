import emailjs from "@emailjs/browser";
import { useRef } from "react";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dbusbrp", "template_2rih8ne", form.current, {
        publicKey: "60fnUxrXuCswrxjt1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="p-4 bg-black text-white mb-10">
      <h2 className="text-2xl font-bold text-center mb-8 border-2 p-4">Connect With Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        action="contact-form-handler"
        method="POST"
        className="grid grid-cols-1 gap-4"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="p-2 border border-gray-300 text-black"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          className="p-2 border border-gray-300 text-black"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-2 border border-gray-300 text-black"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
