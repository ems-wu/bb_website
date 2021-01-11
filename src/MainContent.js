import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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

function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h6'>Who Are We?</Typography>
      </div>
      <div className={classes.content}>
        <Typography paragraph>
        Becoming Businesswomen is a student-run organization dedicated to establishing a community of undergraduate women passionate about business and supporting them through education, mentorship, and collaboration. Through B.B., you will have access to a growing community of women from schools all over the world, as well as resources such as guides, videos, and webinars.

        </Typography>
      </div>
      <div className={classes.title}>
        <Typography variant='h6'>Our Focuses</Typography>
      </div>
      <div className={classes.content}>
        <Typography paragraph>
        We are actively collecting resources for other areas of Business that members may be interested, such as Marketing, Administrative, Data Science, Entrepreneurship, etc. If you have any suggestions, feel free to submit them!
        </Typography>
      </div>
    
    </main>
  );
}

export default MainContent;