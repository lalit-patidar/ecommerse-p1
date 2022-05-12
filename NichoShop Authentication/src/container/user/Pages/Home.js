import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <Link to={"/auth/signup"}>Sign Up</Link> <br />
        <Link to={"/auth/signin"}>Sign In</Link> <br />
        <Link to={"/auth/addnumber"}>Add Mobile Number</Link> <br />
    </div>
  )
}

export default Home