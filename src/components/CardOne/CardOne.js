import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EuroIcon from '@material-ui/icons/Euro';
import { Box } from '@material-ui/core';


const CardOne = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://img.goglasi.com/img/208595497"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            Naziv Ploce
          </Typography>
          <Typography gutterBottom variant="h6">
            Naziv izvodjaca
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box alignItems="center" display="flex" style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
        10<EuroIcon fontSize="small"/>
        </Box>
        <Button size="small" style={{color:"green"}}>
          in stock
        </Button>
      </CardActions>
    </Card>
    
  );
}
const useStyles = makeStyles({
  root: {
    maxWidth: 166,
  },
  media: {
    height: 200,
    width: 160,
  },
});
export default CardOne