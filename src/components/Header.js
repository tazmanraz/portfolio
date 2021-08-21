import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../images/logo.svg";
import Typed from "react-typed";


const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: {
    color: "tomato"
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex:1
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <Box className={classes.typedContainer}>
    <Grid container justify="center">
      <Avatar className={classes.avatar} src={avatar} alt="mylogo" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Imtiaz Miah"]} typeSpeed={40} />
      </Typography>
      <br/>
      <Typography className={classes.subtitle} variant="h5">
        <Typed strings={["Full Stack Development", "Photography", "Blog"]} 
        typeSpeed={40} 
        backSpeed={60}
        loop  
        />
      </Typography>
    </Box>
  )
}

export default Header
