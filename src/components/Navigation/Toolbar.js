import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Toolbar.css';
import DrawerToggleButton from './DrawerToggleButton';

class Toolbar extends Component {

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    
    handleScroll = () => {
        if (window.scrollY > 100) {
            document.querySelector(".toolbar").className = "toolbar scroll";
        } 
        else {
            document.querySelector(".toolbar").className = "toolbar";
        }
    };

    render() {
        return(
            <header className="toolbar">
                <nav className = "toolbar_navigation" role="navigation">
                    <div className = "toolbar_toggle-button">
                        <DrawerToggleButton click = {this.props.drawerClickHandler} />
                    </div>
                    <div className = "toolbar_logo">
                        <a href = "/">BECOMING<br/>BUSINESSWOMEN</a>
                    </div>
                    <div className = "spacer" />
                    <div className = "toolbar_navigation-items">
                        <ul>
                            <li><NavLink activeClassName="active" to="/" exact>HOME</NavLink></li>
                            <li><NavLink activeClassName="active" to="/about">ABOUT</NavLink></li>
                            <li><NavLink activeClassName="active" to="/our-team">OUR TEAM</NavLink></li>
                            <li><NavLink activeClassName="active" to="/join">JOIN US!</NavLink></li>
                            <li><NavLink activeClassName="active" to="/contact">CONTACT</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Toolbar;