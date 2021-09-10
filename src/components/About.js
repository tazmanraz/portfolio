import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core";
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from "@material-ui/icons/Send";
import Navbar from './Navbar';


const About = () => {
  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Navbar />
      <div class="topleft">
        <p>Logo</p>
      </div>
      <div class="middle">
        <h1>COMING SOON</h1>
        <p>35 days</p>
      </div>
      <div class="bottomleft">
        <p>Some text</p>
      </div>
    </Box>
  )
}

export default About
