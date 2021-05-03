import { Button, Grid, Typography, makeStyles, Paper } from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';
import React from 'react';

const focuses=[
    {
        title: "Investment Banking",
        desc: "Investment banking involves assisting companies with deal transactions and giving financial advice. Become a general memeber to get access to networking advice, technical/behavioural interview tips, and a community to get all your questions answered!",
    },
    {
        title: "Consulting",
        desc: "Management Consulting is the practice of providing advice to companies and tackling challenging obstacles. Become a general member to get access to market sizing tips, practice cases, sample frameworks, and a community to get all your questions answered!",
    },
    {
        title: "Accounting",
        desc: "Accounting is a career in which you will be checking companies financial statements and helping prevent fraud. Becoming a general member to get access to CPA practice, common behavioural questions, and a community to get all your questions answered!",
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    paper: {
        height: '280px', 
        padding: '5%', 
        textAlign: 'center', 
        borderStyle: 'solid', 
        borderWidth: '1px', 
        borderColor: 'rgb(107, 30, 97)',
        "@media (max-width: 1200px)": {
            height: '350px',
        },
        [theme.breakpoints.only('sm')]: {
            height: '280px',
        },
        "@media (max-width: 769px)": {
            height: '370px',
        },
        [theme.breakpoints.only('xs')]: {
            height: '250px',
        },
    },
    icon: {
        height: '40%',
    },
    head: {
        fontWeight: 'bold', 
        color: 'rgb(107, 30, 97)',
        [theme.breakpoints.up('md')]: {
            fontSize: '25px',
        },
        [theme.breakpoints.only('md')]: {
            fontSize: '20px',
        }
    },
}));

const OurFocus = () => {
    const classes = useStyles();
    return (
        <>
        <div>
            <Grid container spacing={3} style={{marginTop: '5%', paddingBottom: '5%'}} justify='center'>
                {focuses.map((e)=>{
                    return (
                        <Grid item xs={12} sm={6} md={4} align="center">
                            <Paper square elevation={2} className={classes.paper}>
                                <PersonAdd color="primary" align="center" className={classes.icon}/>
                                <Typography variant="h6" className={classes.head}>{e.title}</Typography>
                                <Typography variant="body2">{e.desc}</Typography>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid> 
        </div>
        </>
    )
}

export default OurFocus