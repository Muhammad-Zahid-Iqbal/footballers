// Layout.js
import React from "react";
import { Box } from "@mui/material";
import Appbar from "../Appbar.js/Appbar";

const Layout = ({ children }) => {
  return (
    <Box>
      <Appbar />
      <Box sx={{ marginTop: "65px" }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
