import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Signup = () => {

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// using navigator
const navigate = useNavigate();
const hanldeSubmit = (e)=>{
  e.preventDefault();
  axios.post("http://localhost:3001/users", {username, email, password})
  .then((res) => {
    console.log(res);
    navigate("/Login");
})
  .catch((error) => console.log(error))
}

  return ( 
    <>
    <div className="container">
      <h2>Signup Page</h2>
      <form onSubmit={hanldeSubmit}>
        <label>Your Name: <input type="text" onChange={(e) => setUsername(e.target.value)}/></label> 
        <label>Your Email: <input type="email" onChange={(e) => setEmail(e.target.value)}/></label>
        <label>Your Password: <input type="password" onChange={(e) => setPassword(e.target.value)}/></label>
        <button type="submit">Signup</button>
      </form>
      <div className='container2'>
        <p>already have an account?</p>
        <Link to="/login" id="btn">Login</Link>
      </div>
     </div>
    </>
  )
}

export default Signup