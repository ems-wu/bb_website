import { Grid } from '@material-ui/core';
import React from 'react'
import NavigationBar from '../components/NavigationBar.js';
import '../styles/Home.css';
import Footer from '../components/Footer.js';
import Header from '../images/home_header.jpg';

const Home = () => {
    return (
        <>
        <NavigationBar/>
        <img src={Header} width='100%' style={{opacity: 0.8}}/>
        <Grid container direction="column">
            <Grid item container>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8} >
                    Welcome, B.B.
                </Grid>
                <Grid item xs={0} sm={2} />
            </Grid>
        </Grid>
        <Footer/>
        </>
    )
}

export default Home