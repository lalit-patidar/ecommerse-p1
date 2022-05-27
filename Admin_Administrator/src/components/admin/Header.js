import React from "react";
import { Link } from "react-router-dom";

import Logo from "../logo/Logo";
import "./Header.css";

import Generalimg from "../../assets/admin/menu/general_statistic_chart.svg";
import Supportimg from "../../assets/admin/menu/customer_support.svg";
import Searchimg from "../../assets/admin/menu/search.svg";
import Categoriesimg from "../../assets/admin/menu/categories.svg";
import Contentimg from "../../assets/admin/menu/content.svg";
import Administratorimg from "../../assets/admin/menu/administrator.svg";
import Messagesimg from "../../assets/admin/menu/messages.svg";

const Header = (props) => {
  return (

  <header id="header" className="fixedtop">
          <div className="container-fluid d-flex align-items-center">
              {/* <h1 className="logo"><img src="assets/img/NS Logo.svg" alt="" className="img-fluid"></h1> */}
              <Logo />
              <nav id="navbar" className="navbar order-last order-lg-0">
                <ul>
                    <li><Link to="#" className="nav-link scrollto active"><img src={Generalimg} alt="piechart" height="400px" width="400px"></img></Link></li>
                    <li><Link to="#" className="nav-link scrollto"><img src={Supportimg} alt="piechart" height="400px" width="400px"></img></Link></li>
                    <li><Link to="#" className="nav-link scrollto"><img src={Searchimg} alt="piechart" height="400px" width="400px"></img></Link></li>
                    <li><Link to="#" className="nav-link scrollto"><img src={Contentimg} alt="piechart" height="400px" width="400px"></img></Link></li>
                    <li><Link to="#" className="nav-link scrollto"><img src={Categoriesimg} alt="piechart" height="400px" width="400px"></img></Link></li>
                   <li><Link to="#" className="nav-link scrollto"><img src={Administratorimg} alt="piechart" height="400px" width="400px"></img></Link></li>
                    <li><Link to="#" className="nav-link scrollto"><img src={Messagesimg} alt="piechart" height="400px" width="400px"></img></Link></li>
                </ul>
              </nav>
              
          </div>
        </header>

  );
};

export default Header;
