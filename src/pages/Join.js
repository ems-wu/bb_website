import React from 'react'
import NavigationBar from '../components/NavigationBar.js';
import '../styles/Home.css';
import Footer from '../components/Footer.js';
import PageHeaderShort from '../components/Page_Header_Short.js';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import JoinCard from '../components/JoinUs/Join_Card.js';

const useStyles = makeStyles((theme) => ({
    head1: {
        color: 'black',
        marginBottom: '20px',
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20%',
        paddingRight: '20%',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '40px',
            paddingBottom: '40px',
            paddingLeft: '10%',
            paddingRight: '10%',
        } 
    },
}));

function Join() {
    document.title = 'Join Us | B.B.';
    const classes = useStyles();
        
        return (
            <>
            <NavigationBar/>
            <PageHeaderShort/>
            <div className={classes.head1}>
                <Typography variant="h4" style={{fontSize: 40, fontWeight: 'bold'}}>
                    Become a member!
                </Typography>
                <Typography variant="body2" style={{fontSize: 20, paddingTop: '10px'}}>
                    To become a member of B.B., all you've got to do is fill out a survey. We'd love to find out a little bit about you to best assist your professional goals. We look forward to welcoming you to the community.
                </Typography>
            </div>
            <Grid container>
                <Grid item xs={12} sm={6} align="center">
                    <JoinCard icon='0' head='0' desc='0' buttonText='0'/>
                </Grid>
                <Grid item xs={12} sm={6} align="center">
                    <JoinCard icon='1' head='1' desc='1' buttonText='1'/>
                </Grid>
            </Grid>
            <Footer/>
            </>
    )
}

export default Join