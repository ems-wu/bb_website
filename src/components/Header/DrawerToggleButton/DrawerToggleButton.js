import React from 'react';
import './DrawerToggleButton.css';
import { FaAlignLeft } from 'react-icons/fa';

const drawerToggleButton = props => (
    <button className = "toggle-button" onClick = {props.click}>
        <FaAlignLeft />
    </button>
);

export default drawerToggleButton;