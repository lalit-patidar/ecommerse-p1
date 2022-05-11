// React
import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import SignIn from "./container/user/Authentications/SignIn";
import SignUp from "./container/user/Authentications/SignUp";

// Styles
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
