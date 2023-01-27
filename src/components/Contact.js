import "./Contact.css";
import contact from "../assets/contact.jpg";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setMessageStatus(true);
    emailjs
      .sendForm(
        "service_p5o0y4r",
        "template_pyewsey",
        form.current,
        "3EchEjl0lxmMGMNBz"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="contact-container"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <h1>Contact Me</h1>
      <div className="contact-section">
        {messageStatus && <h3>Message sent Successfully</h3>}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" name="user_name" required />
          <label htmlFor="email">E-mail</label>
          <input type="email" name="user_email" required />
          <label htmlFor="message">Message</label>
          <textarea type="text" name="message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
