import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontSize: '50px',
    textAlign: 'center',
    fontFamily: 'Verdana',
    fontWeight: '600',
    background: 'transparent',
    paddingTop: '20px',
    paddingBottom: '20px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#fff',
    "@media (max-width: 600px)": {
      fontSize: '40px',
      paddingTop: '15px',
      paddingBottom: '15px',
    } 
  },
});

export default function Team_Section(props) {
  const classes = useStyles();
  const {title}=props;
  return (
    <div className={classes.root}>
        {title}
    </div>
  );
}