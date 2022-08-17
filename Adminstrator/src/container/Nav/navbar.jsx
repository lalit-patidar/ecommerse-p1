import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./css/navbar.css";
import { ReactComponent as ChatIcon } from "./../../assets/images/nav/chat-icon.svg";
import { ReactComponent as SupportIcon } from "./../../assets/images/nav/customer-support.svg";
import { ReactComponent as SearchIcon } from "./../../assets/images/nav/search-icon.svg";
import { ReactComponent as CategoryIcon } from "./../../assets/images/nav/categories-icon.svg";
import { ReactComponent as ContentIcon } from "./../../assets/images/nav/content-icon.svg";
import { ReactComponent as AdministratorIcon } from "./../../assets/images/nav/administrator-icon.svg";
import { ReactComponent as MessagesIcon } from "./../../assets/images/nav/messages-icon.svg";
import { ReactComponent as NsLogo } from "./../../assets/images/nav/ns-logo.svg";

const Nav = () => {
    return (
        <React.Fragment>
            <div className="p-0">
                <nav className="navbar navbar-expand-sm bg-light justify-content-center">
                    <div className="logo">
                        <NsLogo />
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/general" className="nav-link">
                                <ChatIcon />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/customer-support"
                                className="nav-link"
                            >
                                <SupportIcon />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/search" className="nav-link">
                                <SearchIcon />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                                <CategoryIcon />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/content" className="nav-link">
                                <ContentIcon />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/administrator" className="nav-link">
                                <AdministratorIcon />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/messages" className="nav-link">
                                <MessagesIcon />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
};
export default Nav;
