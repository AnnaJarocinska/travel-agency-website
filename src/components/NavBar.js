import React from 'react';
import NavIcon from './NavIcon';
import Logo from './Logo';

const NavBar = (props) => {
    return (
            <div className="navigation">
                <Logo/>
                <NavIcon />
                </div>
    )
}

export default NavBar;
