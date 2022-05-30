import React from "react";
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'
// import { validateEmail } from "../../utils/helpers";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>ashok.nayakii@gmail.com</h5>
            <a href="mailto:ashok.nayakii@gmail.com" target="_blank">Send an email</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Ashok Nayak</h5>
            <a href="https://www.facebook.com/piecesofthefire" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>347.751.5035</h5>
            <a href="https://api.whatsapp.com/send?phone+0113477515035" target="_blank">Call</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder= "Your Message" required /> 
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact 

















// function ContactForm() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [errorMessage, setErrorMessage] = useState("");
//   const { name, email, message } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       setFormState({ [e.target.name]: e.target.value });
//       console.log("Form", formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === "email") {
//       const isValid = validateEmail(e.target.value);
//       console.log(isValid);
//       // isValid conditional statement
//       if (!isValid) {
//         setErrorMessage("Your email is invalid.");
//       } else {
//         setErrorMessage("");
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage("");
//       }
//     }
//   };

//   return (
//     <section>
//       <h1 data-testid="h1tag">Contact me</h1>
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             defaultValue={name}
//             onBlur={handleChange}
//             name="name"
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email address:</label>
//           <input
//             type="email"
//             defaultValue={email}
//             onBlur={handleChange}
//             name="email"
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             name="message"
//             defaultValue={message}
//             onBlur={handleChange}
//             rows="5"
//           />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}

//         <button data-testid="button" type="submit">Submit</button>
//       </form>
//     </section>
//   );
// }

// export default ContactForm;