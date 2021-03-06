import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'
import Navbar from './Navbar'
import {Route, Link, Redirect} from 'react-router-dom';
import resume from '../images/resume.pdf'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "#233"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan"
      },
      "&:nth-of-type(2b):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato"
      }
    }

  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase"
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    // <>
    //   <Navbar />
    //   <Box component="header" className={classes.mainContainer}>
    //     <Typography variant="h4" align="center" className={classes.heading}>
    //       Working Expeirence
    //     </Typography>
    //     <Box component="div" className={classes.timeLine}>
    //       <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineitem}`}>
    //         2021
    //       </Typography>
    //       <Box component="div" className={classes.timeLineItem}>
    //         <Typography variant="h5" align="center" className={classes.subHeading}>
    //           web design
    //         </Typography>
    //         <Typography variant="body1" align="center" style={{color:"tomato"}}>
    //           Matrix
    //         </Typography>
    //         <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
    //           herp derp
    //         </Typography>
    //       </Box>
          
    //       <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineitem}`}>
    //         2022
    //       </Typography>
    //       <Box component="div" className={classes.timeLineItem}>
    //         <Typography variant="h5" align="center" className={classes.subHeading}>
    //           web design
    //         </Typography>
    //         <Typography variant="body1" align="center" style={{color:"tomato"}}>
    //           Matrix
    //         </Typography>
    //         <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
    //           herp derp
    //         </Typography>
    //       </Box>

          
    //     </Box>
    //   </Box>
    // </>
    // <Redirect to="/portfolio" />


  //   <div>
  //   <object
  //     data='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'
  //     type="application/pdf"
  //     width="max-width"

  //   >

  //     <iframe
  //       src='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'
  //       width="max-width"

  //     >
  //     <p>This browser does not support PDF!</p>
  //     </iframe>

  //   </object>
  // </div>

  <Box component="div" style={{background: "#233", height: "100vh"}}>
  <Navbar />
  <iframe src={resume} width="100%" height="100%">
  </iframe>
  </Box>
  
  )
}

export default Resume
