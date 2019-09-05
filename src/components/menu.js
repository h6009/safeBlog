import React from 'react';
import { Link, navigate } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import { Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { LocalCafeOutlined, HomeOutlined, BuildOutlined, LocalFloristOutlined, PinDropOutlined } from '@material-ui/icons';


import { graphql, useStaticQuery } from "gatsby"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '1.5rem',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    textDecoration: 'none',
  },
  logo: {
    color: 'white',
  },
  menu: {
    color: 'black',
  },
}));

export default () => {
  const classes = useStyles();
  const pageQuery = useStaticQuery(graphql`
    query {
        site{
        siteMetadata{
            title
          }
        }
    }
    `)

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  const LinkListItem = props => (
    <Link to={props.to} className={`${classes.menu} ${classes.link}`}>
      <ListItem button key={props.key}>
        <ListItemIcon>{props.children}</ListItemIcon>
        <ListItemText primary={props.content} />
      </ListItem>
    </Link>
  )

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <LinkListItem to="/" content="Trang Chủ" key="homepage"><HomeOutlined /></LinkListItem>
        <LinkListItem to="/about-me" content="Giới Thiệu" key="aboutme"><LocalFloristOutlined /></LinkListItem>
        <LinkListItem to="/tools" content="Công Cụ" key="tools"><BuildOutlined /></LinkListItem>
        <LinkListItem to="/contact" content="Liên Hệ" key="contact"><PinDropOutlined /></LinkListItem>
      </List>
      <Divider />
        <LinkListItem to="/buy-me-a-coffee" content="Buy me a coffee" key="buycoffee"><LocalCafeOutlined /></LinkListItem>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Button color="inherit" aria-label="menu" onClick={event => {
            event.preventDefault()
            // TODO: do something with form values
            navigate("/")
          }}>
    {pageQuery.site.siteMetadata.title}</Button>
          </Typography>
          {/* <a href="" className={`${classes.link} ${classes.logo}`}><Button color="inherit">Login</Button></a> */}
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      </SwipeableDrawer>
      
    </div>
  );
}