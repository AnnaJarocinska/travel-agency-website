import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/mobilenavigation.css';

const Navigation = () => {
    return ( 
        <>
        <nav className="navigation__list">
            <ul className="navigation__ul">
                <li><Link to="/">Start</Link></li>
                <li><Link to="/First">First</Link></li>
                <li><Link to="/Second">Second</Link></li>
                <li><Link to="/Third">Third</Link></li>
                <li><Link to="/Contact">Kontakt</Link></li>
            </ul>
        </nav>
        </>
     );
}
 
export default Navigation;