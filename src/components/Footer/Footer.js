import { Grid, Link, makeStyles, Typography } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CloudIcon from '@material-ui/icons/Cloud';
import AdjustIcon from '@material-ui/icons/Adjust';
import React from 'react';
const Footer = () => {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <Grid container direction='column' spacing={2}>
      <Grid wrap='nowrap' container item >
        <Grid item xs={false} sm={7} ></Grid>
        <Grid xs={5} sm={9} md={6} lg={2} item container direction='column'>
          <Link className={classes.firstLink} href="#" color='secondary'>Catalouge</Link>
          <Link href="#" color='secondary'>Recently Added</Link>
          <Link href="#" color='secondary'>Vinyl Only</Link>
          <Link href="#" color='secondary'>Advice</Link>
          <Link href="#" color='secondary'>Back In Stock</Link>
          <Link href="#" color='secondary'>Back Catalogue</Link>
        </Grid>
        <Grid xs={4} sm={7} md={5} lg={2} item container direction='column'>
          <Link className={classes.firstLink} href="#" color='secondary'>Features</Link>
          <Link href="#" color='secondary'>Labels</Link>
          <Link href="#" color='secondary'>Mixtape</Link>
          <Link href="#" color='secondary'>News</Link>
          <Link href="#" color='secondary'>Search</Link>
          <Link href="#" color='secondary'>QR Code</Link>
        </Grid>
        <Grid xs={3} sm={7} md={5} lg={2} item container direction='column'>
          <Link className={classes.firstLink} href="#" color='secondary'>Info</Link>
          <Link href="#" color='secondary'>About Us</Link>
          <Link href="#" color='secondary'>General Terms</Link>
          <Link href="#" color='secondary'>Payment Security</Link>
          <Link href="#" color='secondary'>Delivery</Link>
          <Link href="#" color='secondary'>Contact</Link>
        </Grid>
        <Grid xs={3} sm={6} md={3} lg={1} item container direction='column'>
          <Link className={classes.firstLink} href="#" color='secondary'>Follow Us</Link>
          <Link href="#" color='secondary'>Vkpage</Link>
          <Link href="#" color='secondary'>Facebook</Link>
          <Link href="#" color='secondary'>Instagram</Link>
          <Link href="#" color='secondary'>Youtube</Link>
        </Grid>
      </Grid>

      <Grid container item direction='column'>
        <Typography pt={3}>Secure payment: Visa / MasterCard / PayPal.</Typography>
        <Typography>Strong safe packaging & shipping.</Typography>
        <Grid item container><CopyrightIcon fontSize='small' /> 2020 </Grid>
      </Grid>

      <Grid container item spacing={2} >
        <Grid item><InstagramIcon fontSize='small'/></Grid>
        <Grid item><FacebookIcon fontSize='small'/></Grid>
        <Grid item><YouTubeIcon fontSize='small'/></Grid>
        <Grid item><CloudIcon fontSize='small'/></Grid>
        <Grid item><AdjustIcon fontSize='small'/></Grid>
      </Grid>
      </Grid>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  firstLink: {
    textTransform: 'uppercase',
    fontWeight: 'bolder',
  }
}));
export default Footer