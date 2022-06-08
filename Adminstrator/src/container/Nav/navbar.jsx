import React from 'react';
import './css/navbar.css';
const Nav = () => {
    return (
        <React.Fragment>
            <div className='p-0'>
                <nav className="navbar navbar-expand-sm bg-light justify-content-center" >
                    <img src='assets/img/NS Logo.svg' className='logo' />
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src='assets/img/menu/General (Statistic Chart).svg' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src='assets/img/menu/Customer Support.svg' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src='assets/img/menu/Search.svg' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <img src='assets/img/menu/Categories.svg '/>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src='assets/img/menu/Content.svg' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src='assets/img/menu/Administrator.svg' />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img src='assets/img/menu/Messages.svg' className='m-auto' />
                            </a>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    )
}
export default Nav;