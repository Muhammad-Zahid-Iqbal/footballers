// Layout.js
import React from "react";
import { Box, Grid } from "@mui/material";
import Appbar from "../Appbar/Appbar";

const Layout = ({ children }) => {
  return (
    <Box>
      <Appbar/>
      <Box sx={{marginTop:"65px"}}>
        {children}
      </Box>
    </Box>
    // <Grid container direction="column">
    //   <Grid item>
    //     <Appbar />
    //   </Grid>
    //   <Grid item>
    //     {children}
    //   </Grid>
    // </Grid>
  );
};

export default Layout;
