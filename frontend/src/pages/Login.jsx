import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        console.log(res);
        if (res.data === "Success") {
          navigate("/Home");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Your Email:{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
          </label>
          <label>
            Your Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
          </label>
          <button type="submit">Login</button>
        </form>
        <div className="container2">
          <p>don't have an account?</p>
          <Link to="/signup" id="btn">
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
