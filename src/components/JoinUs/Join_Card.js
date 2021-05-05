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
        <Paper className={classes.root} square>
            <PersonAdd color="primary" fontSize="large" className={classes.icon} style={props.icon === '0' ? {display: 'block'} : {display: 'none'}}/>
            <FacebookIcon color="primary" fontSize="large" className={classes.icon} style={props.icon === '1' ? {display: 'block'} : {display: 'none'}}/>
            <Typography variant="h6" className={classes.head}>
                {props.head}
            </Typography>
            <Typography variant="body2" className={classes.desc}>
                {props.desc}
            </Typography>
            <a style={{textDecoration: 'none'}} href={props.toLink}>
                <Button className={classes.button}>
                    {props.buttonText}
                </Button>
            </a>
        </Paper>
    )
}

export default JoinCard