import React from 'react';
import NavIcon from './NavIcon';
import Logo from './Logo';
import Navigation from './Navigation';

const NavBar = (props) => {
    return (
            <div className="navigation">
                <Logo/>
               { props.width > 600 ? <Navigation/> : null}
               { props.width < 600 ? <NavIcon/> : null}
            </div>
    )
}

export default NavBar;
