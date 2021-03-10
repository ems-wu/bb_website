import React, { Component } from 'react'
import NavigationBar from '../components/NavigationBar.js';
import '../styles/Home.css';
import Footer from '../components/Footer.js';
import PageHeaderShort from '../components/Page_Header_Short.js';
import TelegramIcon from '@material-ui/icons/Telegram';
import { Grid, TextField, Button, Typography, withStyles } from '@material-ui/core';

const useStyles = theme => ({
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
});

class Contact extends Component {
    state = {
        name: "",
        message: "",
        email: "",
        subject: "",
        sent: false,
        buttonText: "Send Message",
        emailError: false,
    };

    resetForm = () => {
        this.setState({
          firstname: "",
          message: "",
          email: "",
          lastname: "",
          buttonText: "Message Sent",
        });
    
        setTimeout(() => {
          this.setState({ sent: false });
        }, 3000);
    };
    
    handleChangeEmail = (e) => {
        if (!e.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
          this.setState({
            email: e.target.value,
          });
          this.setState({ emailError: true });
    
          if (this.state.email === "") {
            // check if the input is empty
            this.setState({ emailError: false });
          }
        } 
        else {
          this.setState({ email: e.target.value, emailError: false });
        }
    };
    
    formSubmit = async (e) => {
        e.preventDefault();
        this.setState({
          buttonText: "...sending",
        });
    
        let data = {
          name: this.state.firstname + this.state.lastname,
          email: this.state.email,
          message: this.state.message,
        };
    
        try {
          //await axios.post("BACKEND_URL", data);
          this.setState({ sent: true }, this.resetForm());
        } catch (error) {
          console.log(error);
        }
    };

    render(){
        const { classes } = this.props;
        
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
                        <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>  
                        <TextField
                            id="outlined-basic"
                            placeholder="Enter your first name"
                            label="First Name"
                            variant="outlined"
                            value={this.state.firstname}
                            onChange={(e) => this.setState({ firstname: e.target.value })}
                            required
                            type="text"
                            style={{width: '49%', marginRight: '1%'}}/>

                        <TextField
                            id="outlined-basic"
                            placeholder="Enter your last name"
                            label="Last Name"
                            variant="outlined"
                            value={this.state.lastname}
                            onChange={(e) => this.setState({ lastname: e.target.value })}
                            required
                            type="text"
                            style={{width: '49%', marginLeft: '1%'}}/>
                        
                        <br/>

                        <TextField
                            id="outlined-basic"
                            label="Email"
                            placeholder="Enter email address"
                            variant="outlined"
                            value={this.state.email}
                            onChange={(e) => this.handleChangeEmail(e)}
                            error={this.state.emailError}
                            required
                            type="email"
                            fullWidth
                            style={{marginTop: '10px', marginBottom: '10px'}}/>
                        
                        <br/>

                        <TextField
                            id="message"
                            label="Message"
                            placeholder="Enter Message"
                            variant="outlined"
                            multiline
                            rowsMax={4}
                            value={this.state.message}
                            onChange={(e) => this.setState({ message: e.target.value })}
                            required
                            type="text"
                            fullWidth/>

                        <br/>

                        <Button style={{color: 'white', background: 'black', padding: '10px', marginTop: '30px', marginBottom: '20%'}}>
                            <TelegramIcon style={{marginRight: '5px'}}/>{this.state.buttonText}
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
}

export default withStyles(useStyles)(Contact)