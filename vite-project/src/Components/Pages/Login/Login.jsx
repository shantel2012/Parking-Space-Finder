import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ added for redirect
import "./Login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // ✅ initialize navigate

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Simple validation
    if (!formData.email || !formData.password) {
      setError("Please fill in both fields.");
      return;
    }

    setError("");
    setMessage(`Welcome back, ${formData.email}!`);

    // Simulate API call and redirect
    setTimeout(() => {
      navigate("/dashboard"); // ✅ redirect to dashboard
    }, 1000);
  }

  return (
    <main className="login-container">
      <section className="login-hero">
        <h1>Welcome Back</h1>
        <p>Please log in to your account.</p>
      </section>

      <form className="login-form" onSubmit={handleSubmit}>
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
          />
        </label>

        <button type="submit" className="login-button">
          Log In
        </button>
      </form>

      {error && <p className="login-error">{error}</p>}
      {message && <p className="login-message">{message}</p>}
    </main>
  );
}




// // Login.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // TODO: Replace with your real authentication logic
//     if(email === 'user@example.com' && password === 'password123') {
//       // Successful login: Redirect to dashboard
//       navigate('/dashboard');
//     } else {
//       alert('Invalid login credentials');
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input 
//         type="email" 
//         placeholder="Email"
//         value={email} 
//         onChange={(e) => setEmail(e.target.value)} 
//         required 
//       />
//       <input 
//         type="password" 
//         placeholder="Password"
//         value={password} 
//         onChange={(e) => setPassword(e.target.value)} 
//         required 
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// }
