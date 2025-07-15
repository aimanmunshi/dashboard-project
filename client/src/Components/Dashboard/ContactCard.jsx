import React from "react";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import "./ContactCard.css";
import contactavatar from "../Assets/contact-avatar.png"; // Make sure this path is correct

const contacts = [
  {
    name: "James Smith",
    status: "you were in video call",
    dotColor: "blue",
  },
  {
    name: "Joseph Garciar",
    status: "you were in video call",
    dotColor: "green",
  },
  {
    name: "Maria Rodriguez",
    status: "you missed john call",
    dotColor: "red",
  },
  {
    name: "Liam Johnson",
    status: "you were in voice call",
    dotColor: "green",
  },
  {
    name: "Sophie Turner",
    status: "you missed a video call",
    dotColor: "red",
  },
  {
    name: "Ethan Brown",
    status: "you were in video call",
    dotColor: "blue",
  },
];

const ContactCard = () => {
  return (
    <div className="contact-card">
      <h4>My Contacts</h4>
      <p className="subtitle">Checkout my contacts here</p>
      <div className="contact-scroll">
        {contacts.map((c, index) => (
          <div className="contact-row" key={index}>
            <div className="call-icons">
              <button className="icon-btn"><FaPhoneAlt /></button>
              <button className="icon-btn video"><FaVideo /></button>
            </div>

            <div className="contact-info">
              <button className="contact-name">{c.name}</button>
              <p className="contact-status">{c.status}</p>
            </div>

            <div className="contact-avatar">
              <span className={`status-dot ${c.dotColor}`}></span>
              <img src={contactavatar} alt={c.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
