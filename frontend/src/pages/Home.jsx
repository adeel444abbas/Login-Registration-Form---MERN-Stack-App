import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h2 style={{textAlign: "center"}}>Welcome user 🤩🤩</h2>
        <Link to="/login" id="btn">Logout</Link>
    </div>
  )
}

export default Home