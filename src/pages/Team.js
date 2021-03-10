import { Grid } from '@material-ui/core';
import React from 'react'
import NavigationBar from '../components/NavigationBar.js';
import '../styles/Home.css';
import Footer from '../components/Footer.js';
import { makeStyles } from '@material-ui/core/styles';
import E_Board from '../components/Team/E_board';
import Director from '../components/Team/Director';
import VP from '../components/Team/VP';
import Tech_Team from '../components/Team/Tech_Team';
import Section_Head from '../components/Team/Section_Head.js';
import Team_Section from '../components/Team/Team_Section.js';
import Ambassador from '../components/Team/Ambassadors.js';
import PageHeaderShort from '../components/Page_Header_Short.js';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    head1: {
        background: '#fc9fb6',
        color: 'rgb(255, 255, 255)',
        marginBottom: '20px',
        paddingTop: '40px',
        paddingBottom: '40px',
        paddingLeft: '10%',
        paddingRight: '10%',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '20px',
            paddingBottom: '20px',
        } 
    },
    head2: {
        background: 'rgb(173, 98, 117)',
        color: 'rgb(255, 255, 255)',
        marginBottom: '60px',
        marginTop: '80px',
        paddingTop: '40px',
        paddingBottom: '40px',
        paddingLeft: '10%',
        paddingRight: '10%',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '20px',
            paddingBottom: '20px',
        } 
    },
    head3: {
        background:  'rgb(181, 196, 255);',
        color: 'rgb(255, 255, 255)',
        marginBottom: '60px',
        marginTop: '80px',
        paddingTop: '30px',
        paddingBottom: '30px',
        paddingLeft: '10%',
        paddingRight: '10%',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '20px',
            paddingBottom: '20px',
        } 
    },
}));

function Team() {
    const classes=useStyles();
    return (
        <>
        <NavigationBar/>
        <PageHeaderShort/>
        <Grid container direction="column" className={classes.root}>
            <Grid item className={classes.head1}>
                <Team_Section title="Executive Board"/>
            </Grid>
            <Grid item>
                <Section_Head title="Co-Founders/Co-Presidents"/>
            </Grid>
            <Grid item container>
                <Grid item xs={1} sm={1} md={2}/>
                <Grid item xs={10} sm={10} md={8} align="center">
                    <E_Board />
                </Grid>
                <Grid item xs={1} sm={1} md={2}/>
            </Grid>
            <Grid item>
                <Section_Head title="Directors"/>
            </Grid>
            <Grid item container>
                <Grid item xs={1} sm={1} md={2}/>
                <Grid item xs={10} sm={10} md={8} align="center">
                    <Director />
                </Grid>
                <Grid item xs={1} sm={1} md={2}/>
            </Grid>
            <Grid item>
                <Section_Head title="Vice Presidents"/>
            </Grid>
            <Grid item container>
                <Grid item xs={1} sm={1} md={2}/>
                <Grid item xs={10} sm={10} md={8} align="center">
                    <VP />
                </Grid>
                <Grid item xs={1} sm={1} md={2}/>
            </Grid>
            <Grid item className={classes.head2}>
                <Team_Section title="Tech-Team"/>
            </Grid>
            <Grid item container>
                <Grid item xs={1} sm={1} md={2}/>
                <Grid item xs={10} sm={10} md={8} align="center">
                    <Tech_Team />
                </Grid>
                <Grid item xs={1} sm={1} md={2}/>
            </Grid>
            <Grid item className={classes.head3}>
                <Team_Section title="Ambassadors"/>
            </Grid>
            <Grid item container>
                <Grid item xs={1} sm={1} />
                <Grid item xs={10} sm={10} align="center">
                    <Ambassador />
                </Grid>
                <Grid item xs={1} sm={1}/>
            </Grid>
            <Grid item>
                <br/><br/><br/>
            </Grid>
        </Grid>
        <Footer/>
        </>
    )
}

export default Team