import React from 'react';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar'
import project1 from "../images/images/html-css-javascript-lg.jpg"
import project2 from "../images/images/html-css-javascript.jpg"
//import classes from "*.module.css";

const useStyles = makeStyles({
  mainContainer:{
    background: "#233",
    height: "100%"
  },
  cardContainer:{
    maxWidth: 345,
    margin: "3rem",
    margin: "5rem auto"

  }
})


const Portfolio = () => {
  const classes= useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Project 1" height="140" image={project1}/>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project1
                </Typography>
                <Typography variant="body2" colot="textSecondary" component="p">
                  lorem ipsum fsfsdfds fsfdsdfa  adsas fgfaa
                  adasdadassda
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            
          </Card>
        </Grid>

 {/* Project 2 */}
 <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Project 2" height="140" image={project2}/>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project1
                </Typography>
                <Typography variant="body2" colot="textSecondary" component="p">
                  lorem ipsum fsfsdfds fsfdsdfa  adsas fgfaa
                  adasdadassda
                </Typography>
              </CardContent>
              
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            {/* </CardActionArea> */}
          </Card>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Portfolio
