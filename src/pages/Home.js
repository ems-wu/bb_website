import { Button, Grid, Typography, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import NavigationBar from '../components/NavigationBar.js';
import '../styles/Home.css';
import Footer from '../components/Footer.js';
import Header from '../images/home_header.jpg';
import { Person } from '@material-ui/icons';
import OurFocus from '../components/Home/OurFocus.js';
import Tools from '../components/Home/Tools.js';
import event from '../images/events.png';

const tools=[
    {
        number: true,
        pic: event, 
        desc: "A supportive network of female students and professionals in fields from accounting, banking, consulting and more",
        buttonText: "Join Us"
    
    },
    {
        number: false,
        pic: event, 
        desc: "Access to a facebook group where you can meet and learn about student opportunities, meet new people and ask for advice",
        buttonText: "Check it out"
    
    },
    {
        number: true,
        pic: event, 
        desc: "Invitations to webinars focused on topics such as professional development, career explorations, and women in leadership",
        buttonText: "Let's go"
    
    },
  ]

const useStyles = makeStyles((theme) => ({
    content: {
        width: '100%',
        height: '100%',
        top: 0,
        position: 'absolute',
        textAlign: 'center',
        background: 'rgba(0,0,0,0.3)',
    },
    name: {
        paddingTop: '15%',
        fontWeight: 'bolder',
        color: 'white',
        [theme.breakpoints.only('xs')]: {
            fontSize: '40px',
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '50px',
        },
    },
    joinus: {
        background: '#fc9fb6',
        fontSize: '25px',
        color: 'white',
        fontWeight: 'bold',
        width: '20%',
        marginTop: '5%',
        borderRadius: '0px',
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: '2px',
        "&:hover": {
            background: '#fc9fb6',
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '18px',
            width: '40%',
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '20px',
            width: '30%',
        },
    },
    
    icon1: {
        width: '20%',
        [theme.breakpoints.only('sm')]: {
            width: '40%',
        },
        [theme.breakpoints.only('sm')]: {
            width: '30%',
        },
    },
    head1: {
        [theme.breakpoints.only('xs')]: {
            fontSize: '40px',
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '50px',
        },
    },
    text1: {
        fontSize: '20px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
        },
    },
    text2: {
        fontSize: '24px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        },
    }
}));

const Home = () => {
    const classes = useStyles();
    document.title = 'Home | B.B.';
    return (
        <>
        <NavigationBar/>

        {/* HEADER */}
        <div style={{position: 'relative'}}>
            <img width='100%' src={Header} style={{opacity: 0.7, height: '100%'}}/>
            <div className={classes.content}>
                <Typography variant="h1" className={classes.name}>
                    Becoming<br/>Businesswomen
                </Typography>
                <Button className={classes.joinus}>Join Us</Button>
            </div>
        </div>


        {/* WHO ARE WE Section */}
        <div style={{height: '100%', background: 'rgb(17, 89, 122)', paddingBottom: '15%'}}>
            <Typography variant="h2" className={classes.head1} style={{paddingTop: '10%', paddingBottom: '3%', color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
                Who Are We?
            </Typography>
            <Paper style={{display: 'flex', background: 'white', marginLeft: '15%', marginRight: '15%', padding: '3%'}}>
                <Typography variant="body2" className={classes.text1}>
                <h style={{color: 'pink', fontWeight: 'bold'}}>Becoming Businesswomen</h> is a student-run organization dedicated to establishing a community of undergraduate women passionate about business and supporting them through <h style={{color: 'pink', fontWeight: 'bold'}}>education, mentorship and collaboration</h>. Through B.B., you will have access to a growing community of women from schools all over the world, as well as resources such as guides, videos and webinars.
                </Typography>
                <Person className={classes.icon1}/>
            </Paper>
        </div>
        

        {/* OUR FOCUSES Section */}
        <div style={{height: '100%', paddingLeft: '10%', paddingRight: '10%', paddingBottom: '10%'}}>
            <Typography variant="h2" className={classes.head1} style={{paddingTop: '15%', color: 'rgb(0, 13, 65)', fontWeight: 'bold'}}>
                Our Focuses
            </Typography>
            <Typography variant="body2" className={classes.text2}>
                We are actively collecting resources for other areas of business that members maybe interested, such as <h style={{color: 'pink', fontWeight: 'bold'}}>Marketing, Administration, Data Science, Entrepreneurship,</h> etc. If you have any suggestions, feel free to submit them!
            </Typography>
            <OurFocus/>
        </div>


        {/* TOOLS WE PROVIDE Section */}
        <div style={{height: '100%', background: 'rgb(255, 210, 173)', paddingBottom: '2%'}}>
            <Typography variant="h2" className={classes.head1} style={{paddingTop: '10%', color: 'blue', textAlign: 'center', fontWeight: 'bold'}}>
                Tools We Provide
            </Typography>
            {tools.map((e)=>{
                return (
                    <Tools number={e.number} image={e.pic} desc={e.desc} buttonText={e.buttonText}/>
                );
            })}
        </div>


        {/* OUR EVENTS Section */} 
        <div style={{height: '100%', padding: '5%'}}>
        <Grid container justify='center' alignItems='center'>
                <Grid item xs={7} align="center">
                    <img src={event} width='100%'/>
                </Grid>
                <Grid item xs={5} align="center">
                    <Button className={classes.joinus} style={{background: 'white', color: 'rgb(0, 13, 65)', width: '50%', borderColor: 'rgb(0, 13, 65)'}}>Our Events</Button>
                </Grid>
            </Grid> 
        </div>


        {/* FOLLOW OUR INSTAGRAM Section */}
        <div style={{height: '100%', background: 'rgb(170, 217, 245)', paddingBottom: '10%'}}>
            <Typography variant="h2" className={classes.head1} style={{paddingTop: '5%', paddingBottom: '3%', color: 'black', textAlign: 'center', fontWeight: 'bold'}}>
                Follow Our Instagram!
            </Typography>
            {/*<img src={Insta} style={{width: '700px',}}/> */}
        </div>

        <Footer/>
        </>
    )
}

export default Home