import CardOne from '../CardOne/CardOne'
import React from 'react';
import { Grid } from '@material-ui/core';

const CardArea = () => {

  return (
      <Grid 
       container 
       spacing={2}
       justify='space-around'
       alignContent='space-around'
       wrap = 'wrap'
       style={{marginTop:'30px',marginBottom:'30px'}}
       >
       <Grid item>
         <CardOne />
       </Grid>
       <Grid item>
         <CardOne />
       </Grid>
       <Grid item>
         <CardOne />
       </Grid>
       <Grid item>
         <CardOne />
       </Grid>
       <Grid item>
         <CardOne />
       </Grid>
       <Grid item>
         <CardOne />
       </Grid>
       <Grid item>
         <CardOne />
       </Grid>
       <Grid item>
         <CardOne />
       </Grid>
       <Grid item>
         <CardOne />
       </Grid>
       <Grid item>
         <CardOne />
       </Grid>
        </Grid>
        
  )
}
export default CardArea