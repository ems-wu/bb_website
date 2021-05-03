import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import { PersonAdd } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '300px',
        background: 'rgb(235, 197, 216)',
        padding: '20px',
        marginLeft: '10%',
        marginBottom: '10%',
        marginRight: '5%',
        [theme.breakpoints.down('xs')]:{
            marginRight: '10%',
            marginLeft: '10%',
            marginBottom: '5%',
        },
        [theme.breakpoints.only('sm')]: {
            height: '350px',
        },
    },
    root2: {
        height: '300px',
        background: 'rgb(235, 197, 216)',
        padding: '20px',
        marginLeft: '5%',
        marginRight: '10%',
        marginBottom: '10%',
        [theme.breakpoints.down('xs')]:{
            marginRight: '10%',
            marginLeft: '10%',
        },
        [theme.breakpoints.only('sm')]: {
            height: '350px',
        }
    },
    icon: {
        height: '40%',
    },
    head: {
        height: '10%',
        fontWeight: 'bolder',
        [theme.breakpoints.only('sm')]: {
            height: '20%',
        }
    },
    desc: {
        height: '30%',
    },
    button: {
        background: 'black',
        color: 'white',
        paddingLeft: '10px',
        paddingRight: '10px',
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
        "&:hover": {
            background: 'white',
            color: 'black',
        }
    }
}));

const JoinCard = (props) => {
    const classes = useStyles();

    return(
        <>
        <Paper className={classes.root} square style={props.icon === '0' ? {display: 'block'} : {display: 'none'}}>
            <PersonAdd color="primary" fontSize="large" className={classes.icon}/>
            <Typography variant="h6" className={classes.head}>
                Become a Member
            </Typography>
            <Typography variant="body2" className={classes.desc}>
                Sign up here to become a general member by filling out our google form below:
            </Typography>
            <a style={{textDecoration: 'none'}} href="https://docs.google.com/forms/d/e/1FAIpQLSflicN3vOHjgBd9C0C3FvDg0USSVJsCXpL0KECZbXCtbQ5ghA/viewform">
                <Button className={classes.button}>
                    Membership Signup
                </Button>
            </a>
        </Paper>
        <Paper className={classes.root2} square style={props.icon === '1' ? {display: 'block'} : {display: 'none'}}>
            <FacebookIcon color="primary" fontSize="large" className={classes.icon}/>
            <Typography variant="h6" className={classes.head}>
                Join Our Facebook Group
            </Typography>
            <Typography variant="body2" className={classes.desc}>
                After becoming a member, hop over to our Facebook group ​to introduce yourself and ask questions!
            </Typography>
            <a style={{textDecoration: 'none'}} href="https://www.facebook.com/groups/192044672089632/about/">
                <Button className={classes.button}>
                    Facebook Group
                </Button>
            </a>
        </Paper>
        </>
    )
}

export default JoinCard