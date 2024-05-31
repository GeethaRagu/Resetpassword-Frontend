import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { username, email, password };
    await axios
      .post("https://resetpassword-xpk9.onrender.com/api/user/register-user", payload)
      .then((res) => {
        toast.success(res.data.message)
        navigate("/login");
      } )
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });

      setEmail(' ');
      setPassword(' ');
      setUsername(' ');
    // setTimeout(() => {
    //   navigate("/login");
    // }, 1000);
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
        
        </div>
      </section>
    </div>
  );
};

export default Register;
