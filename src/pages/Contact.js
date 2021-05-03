import React, { useState } from 'react'
import NavigationBar from '../components/NavigationBar.js';
import '../styles/Home.css';
import Footer from '../components/Footer.js';
import PageHeaderShort from '../components/Page_Header_Short.js';
import TelegramIcon from '@material-ui/icons/Telegram';
import { Grid, TextField, Button, Typography, withStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    head1: {
        background: 'rgba(201, 155, 5, 0.8);',
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

function Contact(){
  const classes = useStyles();
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const message = useFormInput("");
  const email = useFormInput("");
  const emailError = useFormInput(false);
  const sent = useFormInput(false);
  const buttonText = useFormInput("Send Message");

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
          <Typography variant="h4" style={{fontSize: 30, fontWeight: 'bold', marginTop: '20px', marginBottom: '20px'}}>
            Get in touch with us!
          </Typography>
          <form className="contact-form" onSubmit={formSubmit}>  
              <TextField
                id="outlined-basic" placeholder="Enter your first name"
                label="First Name"  variant="outlined"
                required            type="text"
                style={{width: '49%', marginRight: '1%'}}
                {...firstName}/>

              <TextField
                id="outlined-basic" placeholder="Enter your last name"
                label="Last Name"   variant="outlined"
                {...lastName}
                required            type="text"
                style={{width: '49%', marginLeft: '1%'}}/>
                        
              <br/>

              <TextField
                id="outlined-basic" placeholder="Enter email address"
                label="Email"       variant="outlined"
                {...email}
                error={emailError}  required
                type="email"        fullWidth
                style={{marginTop: '10px', marginBottom: '10px'}}/>
                        
              <br/>

              <TextField
                id="message"    placeholder="Enter Message"
                label="Message" variant="outlined"
                multiline       rowsMax={4}
                {...message}
                required        type="text"
                fullWidth/>

              <br/>

              <Button style={{color: 'white', background: 'black', padding: '10px', marginTop: '30px', marginBottom: '20%'}}>
                <TelegramIcon style={{marginRight: '5px'}}/>{buttonText}
              </Button>
            </form>
          </Grid>
          <Grid item xs={1} sm={2} md={3} />
        </Grid>
      </Grid>
      <Footer/>
    </>
  )
}

function handleEmailChange(e) {
  if (!e.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    useFormInput(e.target.email);
    useFormInput(true);

    if (email === "") {
      // check if the input is empty
      useFormInput(false);
    }
  } 
  else {
    useFormInput(e.target.email);
    useFormInput(false);
  }
};

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e){
    setValue(e.target.value);
  }
  
  return {
    value,
    onChange: handleChange
  };
};

async function formSubmit(e) {
  e.preventDefault();
  setButtonText("...sending");

  let data = {
    name: firstName + lastName,
    email: email,
    message: message,
  };

  try {
    //await axios.post("BACKEND_URL", data);
    setSent(true);
  } 
  catch (error) {
    console.log(error);
  }
};

export default Contact