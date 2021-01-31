
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../../img/logo.jpg'
import { Grid, Link } from '@material-ui/core';

const Nav = () => {
  const classes = useStyles();
  const [hideCloseIcon, setHideCloseIcon] = useState(true)

  const changeDisplay = (e) => {
    setHideCloseIcon(!hideCloseIcon);
  }
  return (
    <div className={classes.root}>
      <AppBar color="secondary" position='static'>
        <Toolbar>
          <img alt="logo" className="logoPicture" src={logo} style={{width: "100px"}} />
          <Typography variant="h6" className={classes.title} noWrap>
            treasurewax
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for products…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          {hideCloseIcon && (<MenuIcon onClick={changeDisplay} style={{ fontSize: 40, marginLeft: '30px' }} />)}
          {!hideCloseIcon && (<CloseIcon onClick={changeDisplay} style={{ fontSize: 40, marginLeft: '30px' }} />)}
        </Toolbar>
      </AppBar>
      <div style={{background:'rgba(0,0,0,0.6)', height:'200px', position:'absolute',zIndex:'200', width:'100%'}}>
      <Grid container justify='flex-start' style={{paddingTop:'25px'}}>
      <Grid wrap='nowrap' justify='space-evenly' container item >
      <Grid item xs={false} sm={1}></Grid>
        <Grid item xs={9} sm={5} md={6} lg={4} container direction='column'>
          <Link className={classes.firstLink} href="#" color='secondary'>Catalouge</Link>
          <Link href="#" color='secondary'>Recently Added</Link>
          <Link href="#" color='secondary'>Vinyl Only</Link>
          <Link href="#" color='secondary'>Advice</Link>
          <Link href="#" color='secondary'>Back In Stock</Link>
          <Link href="#" color='secondary'>Back Catalogue</Link>
        </Grid>
        <Grid item xs={6} sm={5} md={6} lg={3} container direction='column'>
          <Link className={classes.firstLink} href="#" color='secondary'>Features</Link>
          <Link href="#" color='secondary'>Labels</Link>
          <Link href="#" color='secondary'>Mixtape</Link>
          <Link href="#" color='secondary'>News</Link>
          <Link href="#" color='secondary'>Search</Link>
          <Link href="#" color='secondary'>QR Code</Link>
        </Grid>
        <Grid xs={4} sm={5} md={6} lg={5} item container direction='column'>
          <Link className={classes.firstLink} href="#" color='secondary'>Info</Link>
          <Link href="#" color='secondary'>About Us</Link>
          <Link href="#" color='secondary'>General Terms</Link>
          <Link href="#" color='secondary'>Payment Security</Link>
          <Link href="#" color='secondary'>Delivery</Link>
          <Link href="#" color='secondary'>Contact</Link>
        </Grid>
        <Grid item md={10}></Grid>
      </Grid>
      </Grid>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    borderLeft: '2px solid black',
    fontWeight: '530',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      paddingLeft: '10px',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    border: '1px solid black',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '6px'
  },
  inputRoot: {
    color: 'inherit',
  },
  firstLink: {
    textTransform: 'uppercase',
    fontWeight: 'bolder',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2.5)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '17ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
export default Nav