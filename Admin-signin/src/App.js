import "./App.css";
import HomePage from "./pages/HomePage";
import MyNichoShop from "./pages/MyNichoShop/MyNichoShop";
import SignIn from "./pages/Authentications/SignIn";
import SignUp from "./pages/Authentications/SignUp";
import AddMobileNumber from "./pages/Authentications/AddMobileNumber";
import TempPassword from "./pages/Authentications/TempPassword";
import ChooseMethod from "./pages/Authentications/ChooseMethod";
import VerifySuc from "./pages/Authentications/VerifySuc";
import Account from "./pages/MyAccount/Account";
import CloseAccount from "./pages/MyAccount/Closeaccount";
import CloseRequest from "./pages/MyAccount/Closerequest";
import CloseRequestCancel from "./pages/MyAccount/Requestcancel";
import CloseRequestProcess from "./pages/MyAccount/Requestprocess";

import AdminSignIn from "./pages/Admin_authentications/AdminSignIn";
import AdminTempPass from "./pages/Admin_authentications/AdminTempPass";
import AdminProfile from "./pages/Admin_administrator/Profile";
import AdminUpdateProfile from "./pages/Admin_administrator/UpdateProfile";

import CreatePassword from "./pages/Authentications/CreatePassword";
import ForgetPassword from "./pages/Authentications/ForgetPassword";

import AdminCategory from "./pages/Admin/AdminCategory";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes, useRoutes  } from "react-router-dom";


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/user/signin", element: <SignIn /> },
    { path: "/user/signup", element: <SignUp /> },
    { path: "/user/addnumber", element: <AddMobileNumber />},
    { path: "/user/temp-password", element: <TempPassword />},
    { path: "/user/choose-method", element: <ChooseMethod />},
    { path: "/user/verify-suc", element: <VerifySuc />},
    { path: "/user/my-account", element: <Account />},
    { path: "/user/close-account", element: <CloseAccount />},
    { path: "/user/close-request", element: <CloseRequest />},
    { path: "/user/close-requeset-cancel", element: <CloseRequestCancel />},
    { path: "/user/close-requeset-process", element: <CloseRequestProcess />},


    { path: "/admin/signin", element: <AdminSignIn />},
    { path: "/admin/temp-password", element: <AdminTempPass />},
    { path: "/admin/profile", element: <AdminProfile />},
    { path: "/admin/update-profile", element: <AdminUpdateProfile />},


    { path: "/mynichoshop", element: <MyNichoShop />},
    { path: "/user/create-password", element: <CreatePassword />},
    { path: "/user/forget-pass", element: <ForgetPassword />},
    { path: "/user/admin-category", element: <AdminCategory />},
    
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;