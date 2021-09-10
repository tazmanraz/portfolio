import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import LinkedIn from "@material-ui/icons/LinkedIn"
import Github from "@material-ui/icons/GitHub"
import Instagram from "@material-ui/icons/Instagram"

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root":{
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root":{
      fill: "tan",
      "&:hover":{
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
})

const Footer = () => {
  const classes = useStyles()
  return (
    <BottomNavigation width="auto" style={{background: "#222"}}>
      <BottomNavigationAction className={classes.root} style={{padding:0}} icon={<LinkedIn/>} href="https://www.linkedin.com/in/imtiazmiah/" target="_blank" />
      <BottomNavigationAction className={classes.root} style={{padding:0}} icon={<Github/>} href="https://github.com/tazmanraz" target="_blank" />
      <BottomNavigationAction className={classes.root} style={{padding:0}} icon={<Instagram/>} href="https://www.instagram.com/miahmanx/" target="_blank" />

      
    </BottomNavigation> 
  )
}

export default Footer
