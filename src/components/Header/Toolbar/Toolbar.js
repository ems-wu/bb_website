import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';

const toolbar = props => (
    <header className = "toolbar">
        <nav className = "toolbar_navigation">
            <div className = "toolbar_toggle-button">
                <DrawerToggleButton click = {props.drawerClickHandler} />
            </div>
            <div className = "toolbar_logo">
                <a href = "/">BECOMING<br/>BUSINESSWOMEN</a>
            </div>
            <div className = "spacer" />
            <div className = "toolbar_navigation-items">
                <ul>
                    <li><a href = "/Home">HOME</a></li>
                    <li><a href = "/">OUR TEAM</a></li>
                    <li><a href = "/">JOIN US!</a></li>
                    <li><a href = "/">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;