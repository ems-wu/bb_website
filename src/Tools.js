import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from 'react-bootstrap/Button'

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  fullWidth: {
    width: '100%',
  },
}));

function Tools() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h6'>Tools We Provide</Typography>
      </div>
      <div className={classes.content}>
        <Typography paragraph>
        A supportive network of female students and professionals in fields from accounting, banking, consulting and more

        </Typography>
        <Button color="blue">Join Us</Button>
      </div>
      
      <div className={classes.content}>
        <Typography paragraph>
        Access to a Facebook group where you can meet learn about student opportunities, meet new people, and ask for advice
        </Typography>
        <Button color="blue">Check It Out</Button>

      </div>

      <div className={classes.content}>
        <Typography paragraph>
        Invitations to webinars focused on topics such as professional development, career exploration, and women in leadership
        </Typography>
        <Button color="blue">Let's Go</Button>

      </div>
    
    </main>
  );
}

export default Tools;