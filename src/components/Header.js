import React from 'react'
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../images/logo.svg"

const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="mylogo" />
    </Box>
  )
}

export default Header
