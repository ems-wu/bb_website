import React from 'react';
import '../../styles/Sidebar.css';
import { FaAlignLeft } from 'react-icons/fa';

const drawerToggleButton = props => (
    <button className = "toggle-button" onClick = {props.click}>
        <FaAlignLeft />
    </button>
);

export default drawerToggleButton;