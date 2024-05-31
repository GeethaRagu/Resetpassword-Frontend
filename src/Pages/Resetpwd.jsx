import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const Resetpwd = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const { str } = useParams();
  //const str = "Lf83vBGB466S7Kns0oECX6la7xjTzVWG";
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    await axios
      .get(`http://localhost:5000/api/user/checkstring/${str}`)
      .then((res) => {
        setData(res.data.result)
        setUsername(res.data.result.username)
        setEmail(res.data.result.email)
        setMsg(res.data.message)
    }
    )
      .catch((error) => {
        console.log(error);
        setMsg(error.data.message);
      });
  };
  //setUsername(username);
  //setEmail(email);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { username, email, password };
   // console.log(payload);
    await axios
      .put("http://localhost:5000/api/user/reset-password", payload)
      .then((res) => {
        
        setMsg(res.data.message)
  })
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
          <h1>Reset password</h1>
          <form onSubmit={handleSubmit}>
            <div className="input_container ri-user-fill">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required
                value={data.username}
               readonly
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
                value={data.email}
               readonly
              />
            </div>
            <div className="input_container ri-lock-password-fill">
              <label for="password"> New Password</label>
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
            <Button type="submit">Reset password</Button>
          </form>
          <h5>{msg}</h5>
        </div>
      </section>
    </div>
  );
};

export default Resetpwd;
