import React, { Component, useState } from 'react'
import NavigationBar from '../components/NavigationBar.js';
import '../styles/Home.css';
import Footer from '../components/Footer.js';
import PageHeaderShort from '../components/Page_Header_Short.js';
import TelegramIcon from '@material-ui/icons/Telegram';
import { Grid, TextField, Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    head1: {
        background: 'rgba(201, 155, 5, 0.8)',
        color: 'white',
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

export default function Contact() {
  document.title = 'Contact Us | B.B.';
  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
    subject: "",
    buttonText: "Send Message",
    emailError: false,
  });

  const [sent, setSent] = useState(false);
  const [valid, setValid] = useState(false);

  const handleInputChange = (e) => {
  }

  const resetForm = () => {
  };

  const formSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
    <NavigationBar/>
    <PageHeaderShort/>
    <Grid container direction="column">
        <Grid item className={classes.head1}>
            <Typography variant="h4" style={{fontSize: 40, fontWeight: 'bold'}}>Questions or Concerns?</Typography>
            <Typography variant="body2" style={{fontSize: 20, paddingTop: '10px', textAlign: 'justify'}}>
            Email us at becomingbusinesswomen@gmail.com! Also feel free to send us any suggestions/resources you want us to share with the rest of the community.
            </Typography>
        </Grid>
        <Grid item container>
            <Grid item xs={1} sm={2} md={3} />
            <Grid item xs={10} sm={8} md={6} align="center">
                <Typography 
                    variant="h4" 
                    style={{fontSize: 30, fontWeight: 'bold', marginTop: '20px', marginBottom: '20px'}}>
                    Get in touch with us!
                </Typography>
                <form className="contact-form" onSubmit={formSubmit}>  
                <TextField
                    placeholder="Enter your first name"
                    label="First Name"
                    variant="outlined"
                    value={values.firstName}
                    onChange={handleInputChange}
                    required
                    type="text"
                    style={{width: '49%', marginRight: '1%'}}/>

                <TextField
                    placeholder="Enter your last name"
                    label="Last Name"
                    variant="outlined"
                    value={values.lastName}
                    onChange={handleInputChange}
                    required
                    type="text"
                    style={{width: '49%', marginLeft: '1%'}}/>
                
                <br/>

                <TextField
                    label="Email"
                    placeholder="Enter email address"
                    variant="outlined"
                    value={values.email}
                    onChange={handleInputChange}
                    error={values.emailError}
                    required
                    type="email"
                    fullWidth
                    style={{marginTop: '10px', marginBottom: '10px'}}/>
                
                <br/>

                <TextField
                    label="Message"
                    placeholder="Enter Message"
                    variant="outlined"
                    multiline
                    rowsMax={4}
                    value={values.message}
                    onChange={handleInputChange}
                    required
                    type="text"
                    fullWidth/>

                <br/>

                <Button style={{color: 'white', background: 'black', padding: '10px', marginTop: '30px', marginBottom: '20%'}}>
                    <TelegramIcon style={{marginRight: '5px'}}/>{values.buttonText}
                </Button>
                </form>
            </Grid>
            <Grid item xs={1} sm={2} md={3} />
        </Grid>
    </Grid>
    <Footer/>
    </>
  )
};