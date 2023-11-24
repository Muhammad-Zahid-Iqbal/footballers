import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Toppng from "../../images/top.png";
import Bottompng from "../../images/bottom.png";
import { MenuItem } from "@mui/joy";

const Findclass = () => {
  const [findClass, setFindClass] = React.useState("Class A");
  const selectImage =
    "https://c.superprof.com/style/images/home/v4/book-new-off.svg";
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
                one place 🎉 
              </Typography>
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2%",
                width: "90%",
                marginTop: "10%",
                // border:"1px solid red",
                marginLeft: "10%",
                borderRadius: "30px"
              }}
            >
              {/* <div style={{border:"1px solid red", display:"flex", width:"100%", justifyContent: "center",
                alignItems: "center",}}> */}
              <select
                id="cars"
                name="cars"
                value={findClass}
                onChange={handleChange}
                style={{
                  color: "gray",
                  fontSize: "18px",
                  outline: "none",
                  border: "none",
                  background: "transparent",
                  width: "100%",
                  maxWidth: "30%",
                  height: "78px",

                  background: "#fff",
                  padding: "10px", // Padding
                  backgroundImage: `url('https://c.superprof.com/style/images/home/v4/book-new-off.svg')`, // Replace with your image URL
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "10px center", // Adjust the position as needed
                  paddingLeft: "40px",
                  appearance: "none",
                  position: "relative",
                }}
              >
                <option
                  style={{ fontSize: "18px", background: "#f2f2f2" }}
                  value="volvo"
                >
                  Counsellors
                </option>
                <option
                  style={{ fontSize: "18px", background: "#f2f2f2" }}
                  value="saab"
                >
                  Online Therapy
                </option>
                <option
                  style={{ fontSize: "18px", background: "#f2f2f2" }}
                  value="mercedes"
                >
                  Support Groups
                </option>
                <option
                  style={{ fontSize: "18px", background: "#f2f2f2" }}
                  value="audi"
                >
                  Class D
                </option>
              </select>
              <div
                style={{
                  borderLeft: "1px solid gray",
                  height: "40px",
                  background: "#fff"
                }}
              ></div>

              <TextField
                fullWidth
                id="search"
                placeholder="Address to Postcode"
                InputProps={{
                  startAdornment: (
                    <>
                      <img
                        src="https://icones.pro/wp-content/uploads/2021/02/icone-de-localisation-grise.png"
                        alt="Search Icon"
                        style={{
                          height: "34px",
                          width: "50px",
                          marginRight: "5px",
                          filter: "grayscale(100%)",
                        }}
                      />
                    </>
                  ),
                  endAdornment: (
                    <Button
                      sx={{
                        minWidth: "8%",
                        height: "50px",
                        background: "#ff7002",
                        color: "#fff",
                        borderRadius: "10px", // Border radius
                        marginLeft: "10px", // Add some margin for spacing
                      }}
                      variant="contained"
                    >
                      Search
                    </Button>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    padding: "10px", // Padding
                    background: "#fff", // Background color
                    position: "relative",
                    width: "100%"
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
                }}
              />
              {/* </div> */}
            </Box>
          </Grid>

          <Grid
            item
            sm={6}
            xs={12}
            sx={{
              margin: "auto",
              display: "flex",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            <Box style={{ position: "relative", height: "95%" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                }}
              >
                <img
                  src={Toppng}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "25%",
                    animation: "scaleAnimation 3s infinite alternate",
                  }}
                  alt="Top Left Image"
                />
              </div>
              <Box sx={{ marginTop: "10%" }}>
                <img
                  src="https://img.freepik.com/free-photo/young-mother-working-from-home-with-daughter_329181-18974.jpg?w=740&t=st=1700745258~exp=1700745858~hmac=ad7c615a1015baf811a6840a0c97377abd9bb6b4f24140f8f22caba8a31809fa"
                  style={{ height: "80%", width: "80%" }}
                />
              </Box>

              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  height: "100%",
                  width: "100%",
                }}
              >
                <img
                  src={Bottompng}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    height: "20%",
                    width: "20%",
                    animation: "scaleAnimation 3s infinite alternate",
                  }}
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
