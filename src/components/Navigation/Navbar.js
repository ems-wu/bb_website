import React, { Component } from 'react'
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/Sidebar';
import Backdrop from '../../components/Navigation/Backdrop';

class Navbar extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
        let backdrop;

        if(this.state.sideDrawerOpen) {
            backdrop = <Backdrop click = {this.backdropClickHandler} />
        }
        return (
            <>
                <Toolbar drawerClickHandler = {this.drawerToggleClickHandler} />
                <SideDrawer show = {this.state.sideDrawerOpen} />
                {backdrop}
            </>
        );
    }
}

export default Navbar;