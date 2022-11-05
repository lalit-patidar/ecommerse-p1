import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../../components/menu/Menu";
import axios from "axios";
import "toastify-js/src/toastify.css";
import AccountFooter from "../../../components/accountfooter/AccountFooter";
import "./account.css";
import AccountEdit from "../../../components/accountEdit/account-edit";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";

const userData = [
  {
    title: "Account type",
    caption: "Personal",
    type: "account",
  },
  {
    title: "User ID",
    caption: "username",
    type: "userName",
  },
  {
    title: "Email adress",
    caption: "example@domain.com",
    type: "email",
  },
  {
    title: "Password",
    caption: "**********",
    type: "password",
  },
  {
    title: "Mobile phone number:",
    caption: "",
    type: "phoneNumber",
  },
  {
    title: "Registartion Address",
    caption: "",
    type: "address",
  },
];

// const breadcrumbsLinks = [{ title: "MyNichoshop", href: "/" }];

const Account = () => {
  const [userDetails, setUserDetails] = useState(userData);

  const getUserData = () => {
    let user = JSON.parse(localStorage.getItem("_userLogin"));
     const updatedUserData = userDetails.map(item => {
      if(item.type === "account") item.caption = (user.accountType && user.accountType === 1) ? "Personal" : "Business";
      else if(item.type === "userName") item.caption = user.username;
      else if(item.type === "email") item.caption = user.email;
      else if(item.type === "phoneNumber") item.caption = user.phoneNumber;
     
     return item;
  })
  setUserDetails(updatedUserData);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="home-page">
      <Menu />
  
        <div className="cs_section ne_css account-pg accoutn-details-wrpr">
          <div className="container_no">
            <Breadcrumbs links={[{title: "My NichoShop", href: "jhj"}]} lastElemTitle="account" />
            <h3 className="all_heading">Account</h3>
            <div className="inner_content no_padd">
              <div className="inner_content-two">
                {userDetails.map((item, id) => {
                  return (
                    <AccountEdit
                      key={id + "id"}
                      title={item.title}
                      caption={item.caption}
                      type={item.type}
                    />
                  );
                })}
                <div className="close-my-account-wrpr">
                  <Link to="/account/close-account" className="ine_close">
                    Close my account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      <AccountFooter style={{ position: "relative" }} />
    </div>
  );
};

export default Account;
