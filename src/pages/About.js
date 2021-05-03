import { Grid } from '@material-ui/core';
import React from 'react'
import NavigationBar from '../components/NavigationBar.js';
import '../styles/Home.css';
import Footer from '../components/Footer.js';
import { makeStyles } from '@material-ui/core/styles';
import PageHeaderShort from '../components/Page_Header_Short.js';

const About = () => {
    document.title = 'About Us | B.B.';
    return (
        <>
        <NavigationBar/>
        <PageHeaderShort/>
        <Grid container direction="column">
            <Grid item container>
                <Grid item xs={1} />
                <Grid item xs={10} >
                    About B.B.
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        </Grid>
        <Footer/>
        </>
    )
}

export default About