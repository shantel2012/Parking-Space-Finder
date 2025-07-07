import React, { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For now, just display a message
    setMessage(`Thanks for signing up, ${formData.name}!`);
    // Here you’d usually call your API to register the user
  }

  return (
    <main className="signup-container">
      <section className="signup-hero">
        <h1>Create your account</h1>
        <p>Join ParkEase and start parking smarter today.</p>
      </section>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </label>

        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      {message && <p className="signup-message">{message}</p>}
    </main>
  );
}
