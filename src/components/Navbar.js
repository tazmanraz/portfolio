import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, ListItemIcon, Avatar, Divider, List, Typography, Box, Drawer } from "@material-ui/core"
import { Dehaze, AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import avatar from "../images/logo.svg"
import Footer from './Footer';


// Main styling for portfolio avatar area
const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: "tomato",
    height: "100%"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan"
  }
}))

//menu list icons/links
const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts"
  }
]

const Navbar = () => {
  const [state, setState] = useState({
    right: false
  })

  const toggleSlider = ((slider, open) => () => {
    setState({ ...state, [slider]: open });
  })

  const classes = useStyles();

  const sideBar = slider =>(
    <Box 
    className={classes.menuSliderContainer} 
    component="div"
    onClick={toggleSlider(slider, false)}
    >
    <Avatar className={classes.avatar} src={avatar} alt="mylogo" />
    <Divider />
    <List>
      {menuItems.map((lsItem, key) => (
        <ListItem button key={key} component={Link} to={lsItem.listPath}>
          <ListItemIcon className={classes.listItem}>
            {lsItem.listIcon}
          </ListItemIcon>
          <ListItemText className={classes.listItem} primary={lsItem.listText} />
        </ListItem>
        ))}
    </List>
  </Box>
  )

  return (
    <>

      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <Dehaze style={{ background: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Imtiaz
            </Typography>
            <Drawer 
            anchor="right" 
            open={state.right}
            onClose={toggleSlider("right", false)}
            >
              {sideBar("right")}
              <Footer />
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
