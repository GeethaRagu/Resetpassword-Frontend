import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Forgotpwd = () => {

  const [email, setEmail] = useState("");

  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {email};
    await axios
      .post("http://localhost:5000/api/user/forgot-password", payload)
      .then((res) => setMsg(res.data.message))
      .catch((error) => {
        console.log(error);
        setMsg(error.data.message);
      });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div>
      <section className="centre_container opacity-75">
        <div className="login_container">
          <h1>Forgot Password</h1>

          <form onSubmit={handleSubmit}>
            <div className="input_container ri-mail-fill">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" required
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <Button type="submit">Reset password</Button>
          </form>
          <h6>Password link will be send to your Email id.Check your inbox</h6>

          {msg}
        </div>
      </section>
    </div>
  );
};

export default Forgotpwd;
