import { Grid } from '@material-ui/core';
import React from 'react'
import NavigationBar from '../components/NavigationBar.js';
import '../styles/Home.css';
import Footer from '../components/Footer.js';
import { makeStyles } from '@material-ui/core/styles';
import Section_Head from '../components/Team/Section_Head.js';
import Team_Section from '../components/Team/Team_Section.js';
import PageHeaderShort from '../components/Page_Header_Short.js';
import MediaCard from '../components/Team/Card.js';
import data from '../Team_Data.json';

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
    document.title = 'Our Team | B.B.';
    return (
        <>
        <NavigationBar/>
        <PageHeaderShort/>
        <Grid container direction="column" className={classes.root}>
        {data.pagesections?.map((e)=>{
            /* display four cards in Ambassadors section */
            if(e.title==="Ambassadors"){
                return (
                    <>
                    <Grid item className={classes.head3} key={e}>
                        <Team_Section title={e.title}/>
                    </Grid>
                    {e.sections?.map((t)=> {
                        return(
                        <Grid item container>
                            <Grid item xs={1}/>
                            <Grid container spacing={4} justify="center" item xs={10} align="center">
                            {t.team?.map((g)=>{
                                return(
                                <Grid item xs={6} sm={4} md={3} key={g}>
                                    <MediaCard 
                                        name={g.name}
                                        designation={g.designation}
                                        image={process.env.PUBLIC_URL + g.image}
                                        clg={g.clg}
                                        linkedin={g.linkedin}
                                        description={g.description}/>
                                </Grid>
                                )
                            })}
                            </Grid>
                            <Grid item xs={1}/>
                        </Grid>
                        )
                    })};
                    </>
                )
            }
            
            /* display three cards in Executive Board section */
            else if(e.title==="Executive Board") {
                return (
                    <>
                    <Grid item className={classes.head1} key={e}>
                        <Team_Section title={e.title}/>
                    </Grid>
                    {e.sections?.map((t)=> {
                        return(
                        <>
                        <Grid item key={t}>
                            <Section_Head title={t.title}/>
                        </Grid>
                        <Grid item container>
                            <Grid item xs={1} sm={1} md={2}/>
                            <Grid container spacing={4} justify="center" item xs={10} sm={10} md={8} align="center">
                            {t.team?.map((g)=>{
                                {/* display two cards in this section */}
                                if(t.title==="Co-Founders/Co-Presidents") {
                                    return (
                                        <Grid item xs={6} key={g}>
                                            <MediaCard 
                                                name={g.name}
                                                designation={g.designation}
                                                image={process.env.PUBLIC_URL + g.image}
                                                clg={g.clg}
                                                linkedin={g.linkedin}
                                                description={g.description}/>
                                        </Grid>
                                    );
                                }

                                else {
                                    return (
                                        <Grid item xs={6} sm={4} key={g}>
                                            <MediaCard 
                                                name={g.name}
                                                designation={g.designation}
                                                image={process.env.PUBLIC_URL + g.image}
                                                clg={g.clg}
                                                linkedin={g.linkedin}
                                                description={g.description}/>
                                        </Grid>
                                    );
                                }
                            })}
                            </Grid>
                            <Grid item xs={1} sm={1} md={2}/>
                        </Grid>
                        </>
                        )
                    })};
                    </>
                )
            }

            /* display three cards in Tech Team section */
            else if(e.title==="Tech Team") {
                return (
                    <>
                    <Grid item className={classes.head2} key={e}>
                        <Team_Section title={e.title}/>
                    </Grid>
                    {e.sections?.map((t)=> {
                        return(
                        <Grid item container>
                            <Grid item xs={1} sm={1} md={2}/>
                            <Grid container spacing={4} justify="center" item xs={10} sm={10} md={8} align="center">
                            {t.team?.map((g)=>{
                                return(
                                <Grid item xs={6} sm={4} key={g}>
                                    <MediaCard 
                                        name={g.name}
                                        designation={g.designation}
                                        image={process.env.PUBLIC_URL + g.image}
                                        clg={g.clg}
                                        linkedin={g.linkedin}
                                        description={g.description}/>
                                </Grid>
                                )
                            })}
                            </Grid>
                            <Grid item xs={1} sm={1} md={2}/>
                        </Grid>
                        )
                    })}
                    </>
                )
            }
        })}
        </Grid>
        <Grid item>
            <br/><br/><br/>
        </Grid>
        <Footer/>
        </>
    )
}

export default Team