import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Div from '../../shared/Div/Div';
import logowhite from '../../images/logo-white.webp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTheme } from '@mui/material/styles';


const Footer = () => {
    const [selectedLocation, setSelectedLocation] = React.useState('Select an Academy');
    const theme = useTheme();
    const handleChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const style = {
        background: "#1b0d01",
        height: "100%",
        paddingTop: "100px",
        paddingBottom: "100px",
        fontSize: "18px",
        fontFamily: "Red Hat Text,Arial,Helvetica,sans-serif",
        color: "#fff",
        overflowX:"hidden"
    }
    return (
        <>
            <Box sx={style}>
                <Grid container spacing={2}>
                    <Grid item sm={4} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Div>
                            <img style={{ paddingLeft: "25px" }} src={logowhite} alt='footer image' />
                            <Div sx={{ display: "flex", mt: 5, pl: 2.9 }}>
                                <EmailIcon style={{ color:'#ff7531' }}/>
                                <p style={{ paddingLeft: 10, color:'#ff7531' }}>Make an enquiry</p>
                            </Div>
                            <Div sx={{ display: "flex", mt: 5, pl: 2.9 }}>
                                <PhoneIcon />
                                <p style={{ paddingLeft: 10 }}>Choose Academy Phone</p>
                            </Div>
                            <Div sx={{ display: "flex", mt: 5, pl: 2.9 }}>
                                <DateRangeIcon />
                                <p style={{ paddingLeft: 10 }}>Mon-Fri 9am - 5pm</p>
                            </Div>

                        </Div>
                    </Grid>
                    <Grid item sm={1}>

                    </Grid>
                    <Grid item sm={3} xs={12} sx={{ lineHeight: "62px", display: "flex", justifyContent: "center" }}>
                        <Div>
                            <Div>
                                <p>About Us</p>
                            </Div>
                            <Div>
                                <p>Join Us</p>
                            </Div>
                            <Div>
                                <p>School Partnerships</p>
                            </Div>
                            <Div>
                                <p>Franchise With Us</p>
                            </Div>
                            <Div>
                                <p>FAQs</p>
                            </Div>
                            <Div>
                                <p>Our Policies</p>
                            </Div>
                        </Div>
                    </Grid>
                    <Grid item sm={3} xs={12} sx={{ lineHeight: "62px", display: "flex", justifyContent: "center" }}>
                        <Div>
                            <Div>
                                <p>Locations</p>
                            </Div>
                            <Div>
                                <p>Shop</p>
                            </Div>
                            <Div>
                                <p>News</p>
                            </Div>
                            <Div>
                                <p>1-on-1 Training</p>
                            </Div>
                            <Div sx={{ color: "white", mt: 5 }}>
                                <Select
                                    sx={{ width: "100%", color: "white", border: "1px solid #fff" }}
                                    value={selectedLocation}
                                    onChange={handleChange}
                                    defaultValue="Select an Academy"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <LocationOnIcon color="action" style={{ color: 'white' }} />
                                        </InputAdornment>
                                    }
                                >
                                    <MenuItem value="Select an Academy">Select an Academy</MenuItem>
                                    <MenuItem value="location1">Location 1</MenuItem>
                                    <MenuItem value="location2">Location 2</MenuItem>
                                    <MenuItem value="location3">Location 3</MenuItem>
                                </Select>
                            </Div>
                        </Div>

                    </Grid>
                </Grid>
                <hr style={{ width: "80%", margin: "auto", marginTop: "10%", height: "0.2px", }} />
                <Grid container spacing={2} sx={{ paddingTop: "25px",  }}>
                    <Grid item sm={6} xs={12}>
                        <Box sx={{ paddingLeft: "20%", display: "flex" }}>
                            <Div sx={{ pr: 10 }}>
                                <FacebookIcon style={{  color:'#ff7531' }}/>
                            </Div>
                            <Div sx={{ pr: 10 }}>
                                <InstagramIcon style={{ color:'#ff7531' }}/>
                            </Div>
                            <Div>
                                <TwitterIcon style={{  color:'#ff7531' }}/>
                            </Div>
                        </Box>
                    </Grid>
                        <Grid item  sm={6} xs={12} sx={{display:"flex", textAlign:"center",gap:4,flexDirection: { xs: 'column', sm: 'row' },}}>
                                <Typography>Privacy Policy</Typography>
                                <Typography>|</Typography>
                                <Typography>FAQ</Typography>
                                <Typography>|</Typography>
                                <Typography>Terms & Conditions</Typography>
                                <Typography>|</Typography>
                                <Typography>Sitemap</Typography>
                        </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Footer
