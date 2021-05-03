import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Grid, Input, makeStyles, TextField, Typography } from '@material-ui/core';
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons';
import navopts from '../Navigation_Data.json';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'rgb(17, 89, 122)',
        padding: '50px',
        [theme.breakpoints.only('xs')]: {
            padding: '30px',
        }
    },
    logo: {
        color: 'rgb(214, 190, 207)',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Verdana',
        fontWeight: 'bold',
        fontSize: '20px',
        paddingBottom: '10px',
        [theme.breakpoints.only('xs')]: {
            fontSize: '18px',
        }
    },
    links: {
        color: 'rgb(214, 190, 207)',
        textDecoration: 'none',
        fontFamily: 'Verdana',
        fontSize: '11px',
        [theme.breakpoints.only('xs')]: {
            fontSize: '10px',
        }
    },
    icons: {
        paddingTop: '20px',
    },
    newsletter_head: {
        fontSize: '23px',
        color: 'white',
        textAlign: 'right',
        marginBottom: '5px',
        [theme.breakpoints.only('xs')]: {
            fontSize: '20px',
        }
    },
    input: {
        marginRight: '10px',
        marginTop: '0px',
        backgroundColor: 'white',
        width: '50%',
        paddingLeft: '2px',
        paddingRight: '2px',
        [theme.breakpoints.only('sm')]: {
            width: '80%',
            marginRight: '5px',
            marginBottom: '10px',
        },
        [theme.breakpoints.only('xs')]: {
            width: '100%',
            marginRight: '0px',
            marginBottom: '10px',
        }
    },
    button: {
        textAlign: 'right',
        background: '#fc9fb6',
        "&:hover": {
            background: 'rgb(214, 190, 207)',
        },
        [theme.breakpoints.only('xs')]: {
            padding: '0px',
        }
    },
    line: {
        color: 'rgb(214, 190, 207)',
        marginTop: '50px',
        fontSize: '18px',
        [theme.breakpoints.only('sm')]: {
            marginTop: '30px',
        },
        [theme.breakpoints.only('xs')]: {
            marginTop: '20px',
            fontSize: '15px'
        }
    }
}));

function Footer() {
    const classes = useStyles();
    return(
        <Grid container className={classes.root}>
            <Grid item xs={6}>
                <Typography className={classes.logo}>Becoming<br/>Businesswomen</Typography>

                <div style={{display: 'flex', flexDirection: 'column'}}>  
                {navopts.footer.map((e) => {
                    return (
                        <>
                        <NavLink className={classes.links} activeClassName="active" to={e.to} exact>{e.label}</NavLink>
                        </>
                    )
                })}
                </div>

                <div className={classes.icons}>
                    <a style={{color: 'white'}} href={navopts.social_media_icons[0].link}><Facebook/></a>
                    <a style={{color: 'white'}} href={navopts.social_media_icons[1].link}><Instagram/></a>
                    <a style={{color: 'white'}} href={navopts.social_media_icons[2].link}><LinkedIn/></a>
                </div>
            </Grid>
                <Grid item xs={6} style={{display: 'flex', flexDirection: 'column', textAlign: 'right'}}>
                    <Typography className={classes.newsletter_head} variant="body2">Join Our Mailing List!</Typography>
                    <div>
                        <Input
                        id="email"
                        placeholder="Email"
                        className={classes.input}
                        //value={this.state.email}
                        //onChange={(e) => this.setState({ message: e.target.value })}
                        />
                    <Button className={classes.button}>Join</Button>
                    </div>
                    <Typography className={classes.line} variant="body2">Created by B.B. Tech Team</Typography>
                </Grid>
            </Grid>
    )
}

export default Footer;