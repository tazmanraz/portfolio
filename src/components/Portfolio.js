import React from 'react';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar'
import project1 from "../images/images/Capture1.PNG"
import project2 from "../images/images/Capture2.PNG"
import project3 from "../images/images/Capture3.PNG"
import project4 from "../images/images/Capture4.PNG"
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
    <Box component="div" className={classes.mainContainer} style={{background: "#233", height: "100%"}}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Project 1" height="140" image={project1}/>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Bookify
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A book keeping web app with a special feature of extracting expenses automatically from your camera. Built in MERN stack
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://github.com/tazmanraz/Bookify" target="_blank">
                  Repo
                </Button>
                <Button size="small" color="primary" href="https://www.youtube.com/watch?v=DpS8RdKg_Po" target="_blank">
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
                  Makkah Restaurant
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A website I built for my family's restaurant to help bring out a better online prescence during covid-19. This was my first React project on my own.
                </Typography>
              </CardContent>
              
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary" href="https://github.com/tazmanraz/makkahdeploy" target="_blank">
                  Repo
                </Button>
                <Button size="small" color="primary" href="https://makkahrestaurant.ca/" target="_blank">
                  Live Demo
                </Button>
              </CardActions>
            {/* </CardActionArea> */}
          </Card>
        </Grid>



 {/* Project 3 */}
 <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Project 3" height="140" image={project3}/>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  TexMexPho
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Made a silly fake restaurant ordering website. Built in PostGres, Express, Node, and using the Twilio API to send an SMS to the user once the order is complete. 
                </Typography>
              </CardContent>
              
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary" href="https://github.com/tazmanraz/TexMexPho" target="_blank">
                  Repo
                </Button>
              </CardActions>
            {/* </CardActionArea> */}
          </Card>
        </Grid>


 {/* Project 4 */}
 <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Project 3" height="140" image={project4}/>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Dark Ride
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A dark ride simulator with "squinching" effects based on head tracking with a camera. This was built in Unity3D and mostly coded in C# and an arduino was used for the sensor. 
                </Typography>
              </CardContent>
              
              </CardActionArea>

              <CardActions>
                <Button size="small" color="primary" href="https://github.com/tazmanraz/dark-ride" target="_blank">
                  Repo
                </Button>
                <Button size="small" color="primary" href="https://www.youtube.com/watch?v=lJWxu4BUXDc" target="_blank">
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
