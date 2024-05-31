import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Resetpwd = () => {
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const [data, setData] = useState("");
  const navigate = useNavigate();
  const { str } = useParams();
  //const str = "Lf83vBGB466S7Kns0oECX6la7xjTzVWG";
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    await axios
      .get(`https://resetpassword-xpk9.onrender.com/api/user/checkstring/${str}`)
      .then((res) => {
        setData(res.data.result)
        setUsername(res.data.result.username)
        setEmail(res.data.result.email)
        toast.success(res.data.message)
       
    }
    )
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { username, email, password };
   // console.log(payload);
    await axios
      .put("https://resetpassword-xpk9.onrender.com/api/user/reset-password", payload)
      .then((res) => {
        
        toast.success(res.data.message)
        navigate('/login')
  })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });

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
          
        </div>
      </section>
    </div>
  );
};

export default Resetpwd;
