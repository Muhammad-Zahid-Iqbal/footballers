import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const Findclass = () => {
  const [findClass, setFindClass] = React.useState('');

  const handleChange = (event) => {
    setFindClass(event.target.value);
  };
  return (
    <>
      <Box sx={{ background: "#f2f2f2", }}>
        <Grid container sx={{ minHeight: "380px" }}>
          <Grid item sm={12} sx={{ display: "flex", justifyContent: "center", margin: "auto" }}>
            <h1 style={{fontSize:"36px", paddingTop:"20px"}}>Find A Class</h1>
            
          </Grid>
         
          <Grid container  sx={{ display: "flex", justifyContent:"center" }}>
          <Grid item sm ={12} xs={12}>
          <Typography sx={{position:"relative", left:"17%", top:"40%",  paddingBottom:"20px", fontSize:"18px"}}>Choose your location</Typography>
          </Grid>
            <Grid item sm={2} xs={12}>
              <FormControl fullWidth >
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
              </FormControl>
            </Grid>
            <Grid item sm={5} xs={12} >
              <TextField
              fullWidth
                id="search"
                // label="Search"
                placeholder='Type to enter your address, town or postcode'
                // variant="outlined"
                InputProps={{
                  startAdornment: (
                    <>
                      <SearchIcon color="action" />
                    </>
                  ),
                  
                  
                }}
                // sx={{ border: "1px solid #ff7002", borderRadius:"10px"}}
              />
            </Grid>
            <Grid item sm={1}  xs={12}>
              <Button sx={{width:"56px", height:"56px", background:"#ff7002", color:"#fff"}} variant="contained">Go</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Findclass
