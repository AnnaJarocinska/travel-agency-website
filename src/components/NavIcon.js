import React from 'react';
import MobileNavigation from './MobileNavigation';

class NavIcon extends React.Component {
    constructor(props) {
        super(props);
        this.handleNavIconClick = this.handleNavIconClick.bind(this);
        this.state = {
            isClicked: false,
            isIconVisible: true,
        };
    }

    handleNavIconClick() {
        this.setState({ isClicked: !this.state.isClicked });
    }


    render() {
        const isClicked = this.state.isClicked;
        const isIconVisible = this.state.isIconVisible;
        let icon;
        if (isIconVisible) { icon = <i class="fas fa-bars" onClick={this.handleNavIconClick}></i>}
        else { icon = null }
        return (
            <>
                <MobileNavigation isClicked={isClicked} />
                {icon}
            </>
        );
    }
}

export default NavIcon;