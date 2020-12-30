import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Toolbar.css';
import DrawerToggleButton from './DrawerToggleButton';

function Toolbar(props) {
    return(
    <header className="toolbar">
            <nav className = "toolbar_navigation" role="navigation">
            <div className = "toolbar_toggle-button">
                <DrawerToggleButton click = {props.drawerClickHandler} />
            </div>
            <div className = "toolbar_logo">
                <a href = "/">BECOMING<br/>BUSINESSWOMEN</a>
            </div>
            <div className = "spacer" />
            <div className = "toolbar_navigation-items">
                <ul>
                    <li>
                        <NavLink to="/" exact>
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/our-team">
                            OUR TEAM
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/join">
                            JOIN US!
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </header>
        );
}

export default Toolbar;