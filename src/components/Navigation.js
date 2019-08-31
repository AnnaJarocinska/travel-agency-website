import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return ( 
        <>
        <nav>
            <ul>
                <li><Link to="/">Start</Link></li>
                <li><Link to="/First">First</Link></li>
                <li><Link to="/Second">Second</Link></li>
                <li><Link to="/Third">Third</Link></li>
                <li><Link to="/Contact"></Link></li>
            </ul>
        </nav>
        </>
     );
}
 
export default Navigation;