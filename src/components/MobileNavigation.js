import React from 'react';
import MobileNavigationVisible from './MobileNavigationVisible';
import '../styles/mobilenavigation.css';

const MobileNavigation = (props) => {
    const isClicked = props.isClicked;
    if(isClicked){
    return <MobileNavigationVisible/>}
      return(null)
}
 
export default MobileNavigation;