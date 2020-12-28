import React, { Component, useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../../styles/Toolbar.css';
import DrawerToggleButton from './DrawerToggleButton';
import { FaCaretDown } from 'react-icons/fa';
import Select from 'react-select';

function Toolbar(props) {

    const data = [
        {
            value: 1,
            className: 'dropdown',
            label: "E-Board"
        },
        {
            value: 2,
            className: 'dropdown',
            label: "Tech Team"
        },
        {
            value: 3,
            className: 'dropdown',
            label: "Ambassadors"
        }
    ];

    const [selectedOption, setSelectedOption] = useState(null); 

    const handleChange = e => {
        setSelectedOption(e);
    }

    const handleClick = (value) => {
        this.props.history.push('/Join');
    }
    
    return(
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
                {/*    <li><Select options = {data} onChange = {handleChange}/></li> */}
                    <li><a href = "/">OUR TEAM</a></li>
                    <li onClick = { handleClick }><a href = "/Join">JOIN US!</a></li>
                    <li><a href = "/">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    </header>
        );
}

export default Toolbar;