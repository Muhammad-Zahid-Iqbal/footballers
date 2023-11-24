import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../images/logo.svg";
import gitlab from "../../images/gitlab.png";


const drawerWidth = 240;

const Appbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, background:"blue" }}>
      <img src={gitlab} alt="logo" style={{width:"100%", height:"70px"}}/>
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center", flexDirection: "column" }}>
            <ListItemText>Weekly Training</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center", flexDirection: "column" }}>
            <ListItemText>Holiday Camps</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center", flexDirection: "column" }}>
            <ListItemText>Birthday Parties</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex", height:"70px" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img src={gitlab} alt="logo" style={{width:"40%", height:"70px"}}/>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
          >
            <Button sx={{ color: "#fff", m: 1 }}>Holiday Camps</Button>
            <Button sx={{ color: "#fff", m: 1 }}>Weekly Training</Button>
            <Button sx={{ color: "#fff", m: 1 }}>Birthday Parties</Button>
            <Button variant="contained" sx={{
    m: 1,
    backgroundColor: "#ee7925",
    "&:hover": {
        backgroundColor: "#fff",
        borderColor: "#ee7925",
        color: "#ee7925",
      },
  }}>
              Book a session
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
};

export default Appbar;
