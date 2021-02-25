import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontSize: '40px',
    textAlign: 'center',
    fontFamily: 'Times New Roman',
    paddingTop: '40px',
    paddingBottom: '20px',
    fontWeight: '600',
    color: 'rgb(0, 13, 65)',
    "@media (max-width: 600px)": {
      fontSize: '30px',
      paddingTop: '30px',
    } 
  },
});

export default function Section_Head(props) {
  const classes = useStyles();
  const {title}=props;
  return (
    <div className={classes.root}>
        {title}
    </div>
  );
}