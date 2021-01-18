import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://tonsmb.org/wp-content/uploads/2014/03/default-placeholder.png"

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection:'row',
      maxWidth: '100%',  
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
    content: {
      flex: '1 0 auto',
    },
    poster: {
      width:133,
      textAlign:"right"
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      justifyContent:'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    }
  }));

const Movie = ({ movie }) => {
  const classes = useStyles();
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return(

    
  <Card className={classes.root}>
    <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {movie.Title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {movie.Year}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
      <CardActions className={classes.controls}>
        <Button size="small" color="primary">
          Nominate
        </Button>
        <Button size="small" color="primary" href={`https://www.imdb.com/title/${movie.imdbID}`}>
          Learn More
        </Button>
      </CardActions>
        </div>
      </div>
      <CardMedia
        className={classes.poster}
        image={poster}
        title={movie.Title}
      />
      
      
    </Card>);
}

export default Movie;