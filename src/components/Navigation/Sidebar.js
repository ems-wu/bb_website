import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Sidebar.css';

const sideDrawer = props => {   
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className = {drawerClasses}>
            <ul>
                <li><NavLink activeClassName="active" to="/" exact>HOME</NavLink></li>
                <li><NavLink activeClassName="active" to="/about">ABOUT</NavLink></li>
                <li><NavLink activeClassName="active" to="/our-team">OUR TEAM</NavLink></li>
                <li><NavLink activeClassName="active" to="/join">JOIN US!</NavLink></li>
                <li><NavLink activeClassName="active" to="/contact">CONTACT</NavLink></li>
            </ul> 
        </nav>
    );
};

export default sideDrawer;