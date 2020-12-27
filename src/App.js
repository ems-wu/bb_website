import React, { Component } from 'react'
import Home from './components/Home'
import Toolbar from './components/Header/Toolbar/Toolbar'
import SideDrawer from './components/Header/Sidebar/Sidebar';
import Backdrop from './components/Header/Backdrop/Backdrop';

class App extends Component {
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
                <Home />
            </>
        );
    }
}

export default App;
