import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const Findclass = () => {
  const [findClass, setFindClass] = React.useState("Class A");

  const handleChange = (event) => {
    console.log("Selected value:", event.target.value);
    setFindClass(event.target.value);
  };


  return (
    <>
      <Box sx={{ background: "#f2f2f2" }}>
        <Grid container sx={{ minHeight: "380px" }}>
          <Grid
            item
            sm={12}
            sx={{ display: "flex", justifyContent: "center", margin: "auto" }}
          >
            <h1 style={{ fontSize: "36px", paddingTop: "20px" }}>
              Find A Class
            </h1>
          </Grid>

          <Grid container sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item sm={12} xs={12}>
              <Typography
                sx={{
                  position: "relative",
                  left: "17%",
                  top: "40%",
                  paddingBottom: "20px",
                  fontSize: "18px",
                }}
              >
                Choose your location
              </Typography>
            </Grid>
            <Grid item sm={1.8} xs={12}>
              {/* <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Class</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={findClass}
                  label="Class"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Class A</MenuItem>
                  <MenuItem value={20}>Class B</MenuItem>
                  <MenuItem value={30}>Class C</MenuItem>
                </Select>
              </FormControl> */}
              <select id="cars" name="cars" value={findClass} onChange={handleChange} style={{color:"gray", fontSize: "18px", outline: "none", border: "1px solid lightgray", borderColor: "none", background: "transparent", width: '100%', minWidth: '202px', height: '58px' }}>
                <option style={{ fontSize: "18px", background: "#f2f2f2" }} value="volvo">Counsellors</option>
                <option style={{ fontSize: "18px", background: "#f2f2f2" }} value="saab">Online Therapy</option>
                <option style={{ fontSize: "18px", background: "#f2f2f2" }} value="mercedes">Support Groups</option>
                <option style={{ fontSize: "18px", background: "#f2f2f2" }} value="audi">Class D</option>
              </select>
            </Grid>
            <Grid item sm={5} xs={12}>
              <TextField
                fullWidth
                id="search"
                // label="Search"
                placeholder="Type to enter your address, town or postcode"
                // variant="outlined"
                InputProps={{
                  startAdornment: (
                    <>
                      <SearchIcon color="action" />
                    </>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    border: "none",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  border: "1px solid lightgray"
                }}
              />
            </Grid>
            <Grid item sm={1} xs={12}>
              <Button
                sx={{
                  width: "56px",
                  height: "56px",
                  background: "#ff7002",
                  color: "#fff",
                }}
                variant="contained"
              >
                Go
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Findclass;
