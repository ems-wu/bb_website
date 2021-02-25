import React from 'react';
import { Button, Typography, makeStyles, Card, CardContent, ButtonBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 220,
    maxHeight: 220,
    [theme.breakpoints.down('sm')]:{
      maxWidth: 200,
      maxHeight: 200
    }
  },
  desgn: {
    color: 'pink',
    visibility: 'hidden',
    fontWeight: 300,
    "@media (max-width: 1100px)": {
      fontSize: '15px'
    }
  },
  name: {
    color: 'white',
    visibility: 'hidden',
    "@media (max-width: 700px)": {
      fontSize: '20px'
    }
  },
  learn: {
    color: 'pink',
    visibility: 'hidden',
    position: 'absolute',
    bottom: '40px',
    width: '100%',
    left: 0,
    [theme.breakpoints.down('sm')]:{
      bottom: '60px',
    }
  },
  cardAction: {
    display: 'block',
    height: '100%',
    width: '100%',
    '&:active, &:focus': {
      backgroundColor: 'rgb(22, 49, 90)',
      transition: 'all 0.5s ease',
        '& h5': {
          visibility: 'visible',
          transition: 'all 0.7s ease',
        },
        '& h6': {
          visibility: 'visible',
          transition: 'all 0.7s ease',
        },
        '& Button': {
          visibility: 'visible',
          transition: 'all 0.7s ease',
        }
    }
  },
  content: {
    height: 220,
    position: 'relative',
    overflow: 'hidden',
    "@media (min-width: 600px)": {
    "&:hover": {
        backgroundColor: 'rgb(22, 49, 90)',
        transition: 'all 0.5s ease',
        '& h5': {
          visibility: 'visible',
          transition: 'all 0.7s ease',
        },
        '& h6': {
          visibility: 'visible',
          transition: 'all 0.7s ease',
        },
        '& Button': {
          visibility: 'visible',
          transition: 'all 0.7s ease',
        }
    },
    },
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const {name, designation, linkedin, image, clg}=props;
  return (
    <Card style={{ background: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className={classes.root}>
      <ButtonBase focusRipple className={classes.cardAction}>
      <CardContent className={classes.content}>
        <Typography variant="h5" className={classes.name}>{name}</Typography>
        <Typography variant="h6" className={classes.desgn}>{designation}</Typography>
        <Typography variant="h6" className={classes.desgn}>{clg}</Typography>
        <a href={linkedin} style={{ textDecoration: 'none' }}>
          <Button className={classes.learn}>Learn More</Button>
        </a>
      </CardContent>
      </ButtonBase>
    </Card>
  );
}