import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Toppng from '../../images/top.png';
import Bottompng from '../../images/bottom.png';

const Findclass = () => {
  const [findClass, setFindClass] = React.useState("Class A");

  const handleChange = (event) => {
    console.log("Selected value:", event.target.value);
    setFindClass(event.target.value);
  };

  return (
    <>
      <Box sx={{ background: "#f2f2f2" }}>
        <Grid container sx={{ minHeight: "600px" }}>
          <Grid item sm={6} xs={12}>
            <Grid
              item
              sm={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                minHeight: "40vh",
                width: "100%",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: "36px",
                  fontSize: "40px",
                  fontWeight: 800,
                  marginLeft: "15%",
                  paddingTop: "20%",
                  maxWidth: "640px",
                  lineHeight: 1.4,
                  fontFamily:
                    "Buenos Aires, Pulp, OpenSans, 'Open Sans', sans-serif",
                }}
              >
                Find your Nearest Assessors and Tutors
              </Typography>
              <Typography
                sx={{
                  alignItem: "center",
                  fontSize: "20px",
                  fontWeight: 600,
                  paddingLeft: "15%",
                  paddingTop: "2%",
                }}
              >
                ✅ Check reviews, chat with our tutors, and book lessons all in
                one place 🎉 Pay as you go and 1st lesson is free!
              </Typography>
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2%",
                width: "100%",
                marginTop: "10%"

              }}
            >
              <select
                id="cars"
                name="cars"
                value={findClass}
                onChange={handleChange}
                style={{
                  color: "gray",
                  fontSize: "18px",
                  outline: "none",
                  border: "1px solid lightgray",
                  borderColor: "none",
                  background: "transparent",
                  width: "100%",
                  maxWidth: "30%",
                  height: "58px",
                  marginLeft: "10%",
                  background: "#fff"

                }}
              >
                <option style={{ fontSize: "18px", background: "#f2f2f2" }} value="volvo">
                  Counsellors
                </option>
                <option style={{ fontSize: "18px", background: "#f2f2f2" }} value="saab">
                  Online Therapy
                </option>
                <option style={{ fontSize: "18px", background: "#f2f2f2" }} value="mercedes">
                  Support Groups
                </option>
                <option style={{ fontSize: "18px", background: "#f2f2f2" }} value="audi">
                  Class D
                </option>
              </select>

              <TextField
                fullWidth
                id="search"
                placeholder="Address to Postcode"
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
                  border: "1px solid lightgray",
                  background: "#fff"
                }}
              />
              <Button
                sx={{
                  minWidth: "15%",
                  height: "56px",
                  background: "#ff7002",
                  color: "#fff",
                }}
                variant="contained"
              >
                Search
              </Button>
            </Box>
          </Grid>

          <Grid item sm={6} xs={12} sx={{ margin: "auto", display: "flex", textAlign: "center", alignContent: "center" }}>
            <Box style={{ position: "relative", height: "95%", }}>
              <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }}>
                <img
                  src={Toppng}
                  style={{ position: "absolute", top: 0, left: 0, width: "25%", animation: "scaleAnimation 3s infinite alternate" }}
                  alt="Top Left Image"
                />
              </div>
              <Box sx={{ marginTop: "10%" }}>
                <img src="https://img.freepik.com/free-photo/young-mother-working-from-home-with-daughter_329181-18974.jpg?w=740&t=st=1700745258~exp=1700745858~hmac=ad7c615a1015baf811a6840a0c97377abd9bb6b4f24140f8f22caba8a31809fa" style={{ height: "80%", width: "80%" }} />

              </Box>

              <div style={{ position: "absolute", bottom: 0, right: 0, height: "100%", width: "100%" }}>
                <img
                  src={Bottompng}
                  style={{ position: "absolute", bottom: 0, right: 0, height: "20%", width: "20%", animation: "scaleAnimation 3s infinite alternate" }}
                  alt="Bottom Right Image"
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <style>
        {`
          @keyframes scaleAnimation {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(0.8);
            }
          }
        `}
      </style>
    </>
  );
};

export default Findclass;
