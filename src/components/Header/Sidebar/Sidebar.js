import React from 'react';
import './Sidebar.css';

const sideDrawer = props => {   
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className = {drawerClasses}>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/">OUR TEAM</a></li>
                <li><a href="/">JOIN US!</a></li>
                <li><a href="/">CONTACT</a></li>
            </ul> 
        </nav>
    );
};

export default sideDrawer;