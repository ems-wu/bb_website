import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles ((theme) => ({
    img: {
        height: '350px',
        [theme.breakpoints.only('xs')]: {
            height: '150px',
        },
        [theme.breakpoints.only('sm')]: {
            height: '230px',
        },
        [theme.breakpoints.only('md')]: {
            height: '300px',
        }
    },
    root: {
        marginBottom: '8%',
        marginTop: '5%',
        paddingLeft: '10%',
        paddingRight: '10%',
        height: '350px',
        [theme.breakpoints.only('xs')]: {
            height: '150px'
        },
        [theme.breakpoints.only('sm')]: {
            height: '230px'
        },
        [theme.breakpoints.only('md')]: {
            height: '300px'
        }
    },
    paper: {
        background: 'transparent',
        paddingTop: '20%',
        paddingBottom: '15%',
        [theme.breakpoints.only('xs')]: {
            paddingTop: '0%',
            paddingBottom: '0%',
        },
        [theme.breakpoints.only('sm')]: {
            paddingTop: '10%',
            paddingBottom: '5%',
        },
        [theme.breakpoints.only('md')]: {
            paddingTop: '15%',
        }
    },
    text: {
        fontSize: '20px',
        textAlign: 'left',
        height: '40%',
        paddingLeft: '20px',
        paddingRight: '20px',
        [theme.breakpoints.only('xs')]: {
            fontSize: '15px',
            paddingLeft: '10px',
            paddingRight: '10px',
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '18px',
            paddingLeft: '10px',
            paddingRight: '10px',
        },
    },
    button: {
        background: 'blue',
        color: 'white',
        marginTop: '5%',
        width: '40%',
        fontSize: '25px',
        height: '20%',
        [theme.breakpoints.only('xs')]: {
            fontSize: '12px',
            padding: '2px',
            width: '70%',
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: '18px',
            padding: '5px',
            width: '70%',
        },
        [theme.breakpoints.only('md')]: {
            fontSize: '20px',
            width: '50%',
        },
        "&:hover": {
            background: 'white',
            color: 'blue',
        }
    }
}));
 
function Tools(props) {
    const {number, image, desc, buttonText}=props;
    if(number)
        return <Tools1 image={image} desc={desc} buttonText={buttonText}/>;
    else 
        return <Tools2 image={image} desc={desc} buttonText={buttonText}/>;
}

function Tools1(props) {
    const {image, desc, buttonText} = props;
    const classes = useStyles();
    return (
        <Grid container className={classes.root}> 
            <Grid item xs={6} align='center' >
                <img src={image} width='100%' height='100%' className={classes.img} />
            </Grid>   
            <Grid item xs={6} align='center'>
                <Paper square className={classes.paper} elevation='none'>
                    <Typography className={classes.text}>{desc}</Typography>
                    <Button className={classes.button}>{buttonText}</Button>
                </Paper>
            </Grid>
        </Grid>
    )
}

function Tools2(props) {
    const {image, desc, buttonText} = props;
    
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>  
            <Grid item xs={6} align='center'>
                <Paper square className={classes.paper} elevation='none'>
                    <Typography className={classes.text}>{desc}</Typography>
                    <Button className={classes.button}>{buttonText}</Button>
                </Paper>
            </Grid>
            <Grid item xs={6} align='center'>
                <img src={image} width='100%' height='100%' className={classes.img} />
            </Grid>  
        </Grid>
    )
}

export default Tools