import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EuroIcon from '@material-ui/icons/Euro';
import { Grid } from '@material-ui/core';
const Nav1 = () => {
  return (
    // <Box display='flex' justifyContent="flex-end" bgcolor='black'>
    //   <Box pl={7}><PersonIcon color='secondary' /></Box>
    //   <Box pl={7}><ShoppingCartIcon color='secondary' /></Box>
    //   <Box pl={7} pr={7}><EuroIcon color='secondary'/></Box>
    // </Box>
    <div style={{ backgroundColor: "black", color: "white" }}>
      <Grid container wrap='nowrap'>
      <Grid item xs={1} sm={10}></Grid>
        <Grid item xs={5} sm={1}><PersonIcon /></Grid>
        <Grid item xs={4} sm={1}><ShoppingCartIcon /></Grid>
        <Grid item xs={false} sm={1}><EuroIcon /></Grid>
      </Grid>
    </div>
  )

}

export default Nav1