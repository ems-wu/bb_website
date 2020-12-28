import React from 'react';
import '../../styles/Sidebar.css';

const sideDrawer = props => {   
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className = {drawerClasses}>
            <ul>
                <li><a href="/Home">HOME</a></li>
                <li><a class="links-hidden" href="#">E-BOARD</a></li>
                <li><a class="links-hidden" href="#">TECH TEAM</a></li>
                <li><a class="links-hidden" href="#">AMBASSADORS</a></li>
                <li><a href="/">JOIN US!</a></li>
                <li><a href="/">CONTACT</a></li>
            </ul> 
        </nav>
    );
};

export default sideDrawer;