import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InfoIcon from '@material-ui/icons/Info'; 
import MenuIcon from '@material-ui/icons/Menu';
import GroupIcon from '@material-ui/icons/Group';
import { Button} from '@material-ui/core';

import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
      paddingLeft: '10px',
      paddingRight: '10px',
      background: 'transparent',
      border: 'none',
      fontSize: '14px',
      '&:hover': {
        opacity: 0.7,
      }, 
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    sectionDesktop: {
      display: 'none',
      paddingTop: '25px',
      paddingBottom: '25px',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    link: {
      color: '#000',
      textDecoration: 'none',
      fontFamily: 'Montserrat',
    },
    listitem: {
      paddingTop: '20px',
      paddingBottom: '20px',
      
    },
    active: {
      borderStyle: 'solid',
      borderWidth: '0 0 1px 0',
      borderColor: '#000',
      paddingBottom: '4px',
    }
  }));

//image to be displayed on header of Home Page
export default function NavigationBar(props) {
    const classes = useStyles();
    const [navbar, setNavbar] = useState(false);
    const [state, setState] = React.useState({
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })} 
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <NavLink className={classes.link} activeClassName="active" to="/" exact>
            <ListItem button className={classes.listitem}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </NavLink>
          <Divider />
          <NavLink className={classes.link} activeClassName="active" to="/about" exact>
            <ListItem button className={classes.listitem}>
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItem>
          </NavLink>
          <Divider />
          <NavLink className={classes.link} activeClassName="active" to="/our-team" exact>
            <ListItem button className={classes.listitem}>
              <ListItemIcon><GroupIcon /></ListItemIcon>
              <ListItemText>Our Team</ListItemText>
            </ListItem>
          </NavLink>
          <Divider />
          <NavLink className={classes.link} activeClassName="active" to="/join" exact>
            <ListItem button className={classes.listitem}>
              <ListItemIcon><PersonAddIcon /></ListItemIcon>
              <ListItemText>Join</ListItemText>
            </ListItem>
          </NavLink>
          <Divider />
          <NavLink className={classes.link} activeClassName="active" to="/contact" exact>
            <ListItem button className={classes.listitem}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItem>
          </NavLink>
          <Divider/>
        </List>
      </div>
    );

    const changeBg = () => {
      if(window.scrollY >= 100) {
        setNavbar(true);
      }
      else{
          setNavbar(false)
      }
    }; 

    window.addEventListener('scroll', changeBg);

    return (
      <>
        <AppBar elevation={navbar ? 2 : "none"} style={navbar ? {background: 'white', transition: 'all 0.2s ease-in-out'} : {background: 'transparent', textColor: 'white', transition:'all 0.5s ease'}} >
            <Toolbar>
                <Typography style={{lineHeight: '20px', marginLeft: '30px', color: 'black', fontWeight: 600, fontSize: '20px'}} variant="body1">
                    Becoming<br/>Businesswomen
                </Typography>

                <div className={classes.grow} />

                <div className={classes.sectionDesktop}>
                    <button className={classes.menuButton} color="inherit" >
                        <NavLink className={classes.link} activeClassName={classes.active} to="/" exact>Home</NavLink>
                    </button>
                    <button className={classes.menuButton} color="inherit" >
                        <NavLink className={classes.link} activeClassName={classes.active} to="/about" exact>About</NavLink>
                    </button> 
                    <button className={classes.menuButton} color="inherit" >
                        <NavLink className={classes.link} activeClassName={classes.active} to="/our-team" exact>Our Team</NavLink>
                    </button>
                    <button className={classes.menuButton} color="inherit" >
                        <NavLink className={classes.link} activeClassName={classes.active} to="/join" exact>Join</NavLink>
                    </button>
                    <button className={classes.menuButton} color="inherit" >
                        <NavLink className={classes.link} activeClassName={classes.active} to="/contact" exact>Contact</NavLink>
                    </button>
                </div>
                <div className={classes.sectionMobile}>
                    <Button onClick={toggleDrawer('right', true)}><MenuIcon/></Button>
                    <SwipeableDrawer
                      anchor='right'
                      open={state['right']}
                      onClose={toggleDrawer('right', false)}
                      onOpen={toggleDrawer('right', true)}
                    >
                      {list('right')}
                    </SwipeableDrawer>
                </div>
            </Toolbar>
        </AppBar>
      </>
    )
}