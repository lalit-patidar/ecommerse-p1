// React
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./container/user/Pages/Home";
import SignIn from "./container/user/Authentications/SignIn";
import SignUp from "./container/user/Authentications/SignUp";
import AddMobileNumber from "./container/user/Authentications/AddMobileNumber";

// Styles
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/addnumber" element={<AddMobileNumber />} />
      </Routes>
    </>
  );
}

export default App;
