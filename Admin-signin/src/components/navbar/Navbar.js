import React, { useState } from "react";
import "./Navbar.css";
// import { NavLink, Link } from "react-router-dom";
// import account from "../../assets/icons/Account.png";
import trolly from "../../assets/icons/Trolly.png";
import bell from "../../assets/icons/Bell.png";
import Account from "../../assets/icons/Account.png";
import { DropdownButton, Dropdown } from "react-bootstrap";
import SearchbarMobile from "../searchbar/SearchbarMobile";
import { Link } from "react-router-dom";
import NotificationBell from "../notification/NotificationBell";
import { useSelector, useDispatch } from "react-redux";
import { setHideSearchBar, setShowNotif } from "../../actions/actions";
function Navbar() {
  const hideSearchBar = useSelector((state) => state.hideSearchBar);

  if (!hideSearchBar) {
    return <NavbarContainer />;
  } else {
    return <SearchbarMobile />;
  }
}

// const notifHandler = () => {
//   dispatch(setShowNotif(!showNotif));
// };

const NavbarContainer = () => {
  const dispatch = useDispatch();
  const showNotif = useSelector((state) => state.showNotif);

  return (
    <nav className="nav-bar">
      <button className="custom-button search-mobile-btn">
        <i
          class="bi bi-search"
          onClick={() => {
            dispatch(setHideSearchBar(true));
          }}
        ></i>
      </button>
      <button
        className="sell-btn custom-button small-text"
        onClick={() => {
          dispatch(setShowNotif(!showNotif));
        }}
      >
        Sell
      </button>
      {/* <Button className="sell-btn custom-button" value="Sell" /> */}

      <DropdownButton id="" title="" className="account-drop">
        <Dropdown.Item href="/user/signin">
          <button className="custom-button signin-btn small-text">
            Sign In
          </button>
        </Dropdown.Item>
        <Dropdown.Item href="/user/signup">
          <button className="custom-button register-btn small-text">
            Register
          </button>
        </Dropdown.Item>
      </DropdownButton>

      <Link to="/mynichoshop">
        <img className="trolly-icon" src={trolly} alt="Trolly icon" />
      </Link>

      {/* <img className="bell-icon" src={bell} alt="Bell icon" /> */}
      <DropdownButton id="" title="" className="notification-drop">
        <Dropdown.Item href="#/action-1">
          <NotificationBell
            color="green"
            title="WON"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ..."
          />
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          <NotificationBell
            color="red"
            title="OUTBID"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ..."
          />
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          <NotificationBell
            color="gray"
            title="SOLD"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ..."
          />
        </Dropdown.Item>
        <Dropdown.Item href="#/action-4">
          <NotificationBell
            color="gray"
            title="NEW MESSAGE"
            description="You received 6 messages.Lorem Ipsum is simply dummy text of the printing and"
          />
        </Dropdown.Item>
      </DropdownButton>
    </nav>
  );
};

export default Navbar;
