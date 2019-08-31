import React from 'react';
import NavBar from './NavBar';
import Slider from './Slider';

const Header = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <Slider/>
        </React.Fragment>
    );
}

export default Header;