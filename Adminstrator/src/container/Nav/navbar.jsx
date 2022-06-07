import React from 'react';
import './css/navbar.css'
const Nav = () => {
    return (
        <React.Fragment>
            <div>
                <nav className="navbar navbar-expand-sm bg-light justify-content-center p-2" s>
                    <ul className="navbar-nav">
                    <li>
                        <img src='assets/img/NS Logo.svg' className='logo' />
                    </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    )
}
export default Nav;