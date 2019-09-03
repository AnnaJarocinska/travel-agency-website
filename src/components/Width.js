import React from 'react';
import NavBar from './NavBar';

class Width extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            isMobile: false,
        }
        this.updateWidowWidth = this.updateWidowWidth.bind(this);
    }

    componentDidMount() {
        this.updateWidowWidth();
        window.addEventListener("resize", this.updateWidowWidth)
    }


    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidowWidth)
    }

    updateWidowWidth() {
        this.setState({ width: window.innerWidth })
        if (this.state.width < 600) {
            this.setState({ isMobile: true })
        };
    }
    render( ) {

        return (
            <>
                <NavBar width={this.state.width} />

            </>);
    }
}


export default Width;