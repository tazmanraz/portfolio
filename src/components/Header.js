import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../images/logo.svg";
import Typed from "react-typed";


const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(27),
    height: theme.spacing(27),
    margin: theme.spacing(2)
  },
  title: {
    color: "#BE0000"
  },
  subtitle: {
    color: "#E8E8E8",
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
      <Typography className={classes.title} variant="h3">
        <Typed strings={["Imtiaz Miah"]} typeSpeed={40} />
      </Typography>
      <br/>
      <Typography className={classes.subtitle} variant="h4">
        <Typed strings={["Full Stack Development", "Photography", "Teacher"]} 
        typeSpeed={40} 
        backSpeed={60}
        loop  
        />
      </Typography>
    </Box>
  )
}

export default Header
