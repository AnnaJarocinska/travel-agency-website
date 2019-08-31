import React from 'react';
import Navigation from './Navigation';
import '../styles/mobilenavigation.css';

const MobileNavigationVisible = () => {
    return (
    <>
    <div className="navigation__mobile--visible">
        <Navigation/>
    </div>

    </>  );
}
 
export default MobileNavigationVisible;