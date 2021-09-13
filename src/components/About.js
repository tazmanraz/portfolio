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
        <p>I am a Full Stack Developer with an Electrical Engineering (P. Eng) background and I am currently ready to use my technical and creative skills towards a new developer position. As a life long learner, I always strive to push myself out of my comfort zone and always challenging myself with new projects. Keep an eye out on my portfolio to see the latest projects I'm working on. Currently open to relocating for work</p>
      </div>
      <div class="bottomleft">
        <p>Some text</p>
      </div>
    </Box>
  )
}

export default About
