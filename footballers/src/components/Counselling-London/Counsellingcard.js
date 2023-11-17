import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/material/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/joy";
import Div from "../../shared/Div/Div";

const Counsellingcard = ({ therapists }) => {
    const maxDetailLength = 400;
    return (
        <Box sx={{ width: "80%", position: "relative", margin: "auto", overflow: { xs: "auto", sm: "initial" }, }}>
            <Grid item>
                <Div sx={{ padding: "20px" }}>
                    <h1>Counselling in London</h1>
                </Div>
                {therapists?.map((value, index) => (
                    <Card orientation="horizontal"
                        sx={{
                            flexWrap: 'wrap',
                            [`& > *`]: {
                                '--stack-point': '500px',
                                minWidth:
                                    'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
                            },
                            resize: 'horizontal',
                        }}>
                        <AspectRatio flex ratio="1" minHeight={250} sx={{ minWidth: 182,  }}>
                            <img src={value.imageSrc} style={{borderRadius:"15px", }} alt="" />
                        </AspectRatio>
                        <CardContent sx={{ flex: "30%" }}>
                            <h2>{value.name}</h2>
                            <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
                                {value.role}
                            </Typography>
                            <Typography>
                                {value.detail.length > maxDetailLength
                                    ? `${value.detail.substring(0, maxDetailLength)}...`
                                    : value.detail}
                                {value.detail.length > maxDetailLength && (
                                    <span style={{ color: "blue", cursor: "pointer" }}> Read More</span>
                                )}
                            </Typography>
                        </CardContent>
                        <CardContent sx={{ flex: "10%" }}>
                            <h1>{value.phoneNumber}</h1>
                            <Button variant="contained" color="primary" sx={{ backgroundColor: "white", color: "dark", border: '1px solid lightgray', padding: "10px", marginTop: 2 }}>
                                Email
                            </Button>
                            <Button variant="contained" color="primary" sx={{ backgroundColor: "white", color: "dark", border: '1px solid lightgray', padding: "10px", marginTop: 2 }}>
                                View
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Grid>
        </Box>
    )
}

export default Counsellingcard
