import React from 'react';
import NavIcon from './NavIcon'

const NavBar = (props) => {
    return (
        <>
            <nav className="navigationBar">
                <div className="navigationBar__logo">
                <i className="fas fa-plane"></i>
                <span className="navigationBar__companyName">Fly High</span>
                <NavIcon />
                </div>
               
            </nav>
        </>
    )
}

export default NavBar;
