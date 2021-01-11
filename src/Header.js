import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Face';
import { MenuItem } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position='fixed' style = {{backgroundColor: "#E9AFA3"}} className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='primary'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
        <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Home
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='h6' className={classes.title}>
            About Us
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Our Team
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Join Us
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Contact Us
          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
