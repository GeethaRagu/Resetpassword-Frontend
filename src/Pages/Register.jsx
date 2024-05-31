import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { username, email, password };
    await axios
      .post("https://resetpassword-backend-6wh0.onrender.com/api/user/register-user", payload)
      .then((res) => setMsg(res.data.message))
      .catch((error) => {
        console.log(error);
        setMsg(error.data.message);
      });
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <div>
      <section className="centre_container opacity-75">
        <div className="login_container">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="input_container ri-user-fill">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input_container ri-mail-fill">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_container ri-lock-password-fill">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit">Register</Button>
          </form>
          <h5>{msg}</h5>
        </div>
      </section>
    </div>
  );
};

export default Register;
