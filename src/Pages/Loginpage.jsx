import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Loginpage = () => {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { email, password };
    await axios
      .post("https://resetpassword-xpk9.onrender.com/api/user/login-user", payload)
      .then((res) => {
        toast.success(res.data.message)
        navigate("/landingpage");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });

      setEmail(' ');
      setPassword(' ');
      
    // setTimeout(() => {
    //   navigate("/landingpage");
    // }, 1000);
  };
  return (
    <section className="centre_container opacity-75">
      <div className="login_container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
          <Button type="submit">Login</Button>
        </form>
        <div>
          Don't have account ? <a href="/register">Register here</a>
          <br />
          Forgot Password ? <a href="forgotpassword">Click here</a>
        </div>
      
      </div>
      
    </section>
  );
};

export default Loginpage;
