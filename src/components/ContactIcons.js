import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import "../styles/ContactIcons.css";

const ContactIcons = ({ isNight }) => {
  const [copiedText, setCopiedText] = useState(null);

  const contacts = [
    { id: 1, icon: <FaEnvelope />, text: "hello@example.com", type: "email" },
    { id: 2, icon: <FaPhoneAlt />, text: "+123456789", type: "phone" },
    { id: 3, icon: <FaLinkedin />, text: "/in/yourprofile", type: "linkedin" },
  ];

  // Function to handle clipboard copying
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000); // Reset after 2s
    });
  };

  return (
    <div className="contact-icons-box">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="contact-item"
          onClick={() => handleCopy(contact.text)}
          title="Click to copy"
        >
          <div className="icon">{contact.icon}</div>
          <div className="contact-text">
            {contact.text} {copiedText === contact.text && " Copied"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactIcons;
