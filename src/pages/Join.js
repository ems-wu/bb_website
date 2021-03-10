import React, { Component } from 'react'
import NavigationBar from '../components/NavigationBar.js';
import '../styles/Home.css';
import Footer from '../components/Footer.js';
import PageHeaderShort from '../components/Page_Header_Short.js';
import { Grid, Typography, withStyles } from '@material-ui/core';

const useStyles = theme => ({
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
});

class Join extends Component {

    render(){
        const { classes } = this.props;
        
        return (
            <>
            <NavigationBar/>
            <PageHeaderShort/>
            <Grid container direction="column">
                <Grid item className={classes.head1}>
                    <Typography variant="h4" style={{fontSize: 40, fontWeight: 'bold'}}>Become a member!</Typography>
                    <Typography variant="body2" style={{fontSize: 20, paddingTop: '10px'}}>
                    To become a member of B.B., all you've got to do is fill out a survey. We'd love to find out a little bit about you to best assist your professional goals. We look forward to welcoming you to the community.
                    </Typography>
                </Grid>
            </Grid>
            <Footer/>
            </>
        )
    };
}

export default withStyles(useStyles)(Join)