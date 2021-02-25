import React from 'react';
import '../../styles/Home.css';
import img from '../../images/home_header.jpg';

//image to be displayed on header of Home Page
const Home_Header = () => {
    return (
        <div>
            <img src={img} alt="Home_Header"/>
        </div>
    )
}

export default Home_Header