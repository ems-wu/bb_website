import React from 'react';
import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
    width: 800,
    overflowY: 'scroll',
    [theme.breakpoints.down('sm')]:{
        width: 600,
        height: 300,
    },
    [theme.breakpoints.down('xs')]:{
        width: 300,
        height: 500,
    }
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginTop: 30,
    [theme.breakpoints.down('sm')]:{
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 20,
    }
  },
  name: {
    [theme.breakpoints.down('sm')]:{
        fontSize: 20,
    },
    [theme.breakpoints.down('xs')]:{
        fontSize: 18,
    },
  },
  designation: {
    [theme.breakpoints.down('sm')]:{
        fontSize: 18,
    },
    [theme.breakpoints.down('xs')]:{
        fontSize: 15,
    },
  },
  linkedin: {
    [theme.breakpoints.down('sm')]:{
        fontSize: 25,
    }
  },
  desc: {
    fontSize: 18,
    textAlign: 'justify',
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    [theme.breakpoints.down('sm')]:{
        fontSize: 15,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    [theme.breakpoints.down('xs')]:{
        marginTop: -10,
        paddingRight: 5,
        paddingBottom: 5,
    }
  },
}));

export default function InfoModal(props) {
  const classes = useStyles();
  const {name, designation, linkedin, image, clg, description}=props;
  
  return (
    <Card raised='true'>
        <Grid container direction="column" className={classes.root}>
            <Grid item container>
            <Grid item xs={12} sm={4} align="center">
                <CardMedia image={image} className={classes.image}/>
                <br/>
                <Typography variant="h5" className={classes.name}>
                    {name}
                </Typography>
                <Typography variant="h6" color="textSecondary" className={classes.designation}>
                    {designation}
                </Typography>
                <a href={linkedin}>
                <LinkedInIcon fontSize="large" color="primary" className={classes.linkedin}/>
                </a>
            </Grid>
            <Grid item xs={12} sm={8}>
                <CardContent>
                    <Typography variant="body2" className={classes.desc}>
                        {description}
                    </Typography>
                </CardContent>
            </Grid>
            </Grid>
        </Grid>
    </Card>
  );
}