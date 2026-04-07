import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <input type="text" placeholder="Enter Name" />
        <input type="email" placeholder="Enter Email" />
        <input type="text" placeholder="Enter Mobile" />

        <button>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;