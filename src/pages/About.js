import { Grid } from '@material-ui/core';
import React from 'react'
import NavigationBar from '../components/NavigationBar.js';
import '../styles/Home.css';
import Footer from '../components/Footer.js';
import { makeStyles } from '@material-ui/core/styles';

const About = () => {
    return (
        <Grid container direction="column">
            <Grid item>
                <NavigationBar/>
            </Grid>
            <Grid item container>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8} >
                    About B.B.
                </Grid>
                <Grid item xs={0} sm={2} />
            </Grid>
            <Grid item>
                <Footer/>
            </Grid>
        </Grid>
    )
}

export default About