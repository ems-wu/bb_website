import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from '../images/home_header.jpg';

const useStyles = makeStyles(() => ({
    root: {
        background: `url(${Header})`,
        backgroundPositionX: '0px',
        backgroundPositionY: '0px',
        backgroundSize: '100%',
        width: '100%',
        height: '150px',
        opacity: 0.8, 
    }
}));

const PageHeaderShort = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}></div>
    )
}

export default PageHeaderShort