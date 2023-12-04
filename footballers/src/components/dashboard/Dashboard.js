import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { Grid, TextField, Button, Box, Typography, FormHelperText, IconButton, Avatar } from '@mui/material';
import Div from '../../shared/Div/Div';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';


const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    education: Yup.string().required('Education is required'),
    phone: Yup.string().required('Phone is required'),
    city: Yup.string().required('City is required'),
    detail: Yup.string().required('Detail is required'),
});

const Dashboard = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [findClass, setFindClass] = React.useState();

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setSelectedImage(URL.createObjectURL(file));
            console.log("file", file)
        }
    };
    const handleCameraClick = () => {
        document.getElementById('fileInput').click();
    };
    const handleSubmit = (data) => {
        console.log("data", data);
        console.log("handleSubmitSelectedImage", selectedImage);
        console.log("findClass state after update:", findClass);
    };
    const handleChange = (event) => {
        console.log("Selected value:", event.target.value);
        setFindClass(event.target.value);

    };
    return (
        <Formik
            initialValues={{
                image: selectedImage,
                name: '',
                email: '',
                education: '',
                type: '',
                phone: "",
                city: '',
                detail: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting, resetForm }) => {
                console.log("dataFormik", data);
                handleSubmit(data, { setSubmitting, resetForm });
            }}
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form>
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={6} sx={{ margin: "auto" }}>
                            <Div>
                                <Box
                                    sx={{ display: "flex", cursor: "pointer", justifyContent: "center", position: "relative" }}
                                    p={1}
                                    // border={1}
                                    width={"160px"}
                                    margin={"auto"}
                                    mt={2}
                                    onClick={handleCameraClick}
                                >
                                    {selectedImage ? (
                                        <img
                                            src={selectedImage}
                                            alt="Image Preview"
                                            style={{ cursor: "pointer", border: "1px solid lightgrey", width: '140px', height: '140px', borderRadius: '50%' }}
                                        />
                                    ) : (
                                        <Avatar
                                            sx={{
                                                width: '140px',
                                                height: '140px',
                                                borderRadius: '50%',
                                                backgroundColor: '#f2f2f2',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {/* You can customize the placeholder icon or text */}
                                            <PhotoCameraIcon fontSize="large" color="action" />
                                        </Avatar>
                                    )}
                                    <input
                                        id="fileInput"
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={handleFileChange}
                                        capture="environment"
                                    />
                                    <IconButton
                                        sx={{
                                            position: 'absolute',
                                            bottom: '10px',
                                            right: '20px',
                                            // background: 'rgba(255, 255, 255, 0.8)',
                                            background: 'lightblue',
                                        }}
                                        component="span"
                                        size="small"
                                        color="success"
                                    >
                                        <PhotoCameraIcon />
                                    </IconButton>
                                </Box>


                                {/* <TextField
                                    onChange={(event) => {
                                        handleFileChange(event, "image");
                                        setFieldValue(
                                            "image",
                                            event.currentTarget.files[0]
                                        );
                                    }}
                                    required
                                    name="image"
                                    type="file"
                                    margin="normal"
                                    sx={{ marginBottom: "0px", width: "100%" }}
                                    InputProps={{
                                        endAdornment: (
                                            <CameraAltIcon fontSize={"small"} color={"success"} />
                                        ),
                                    }}
                                /> */}

                            </Div>
                            <Grid container spacing={2} padding={2}>
                                <Grid item sm={6} xs={12}>
                                    <Box>
                                        <Field
                                            id="name"
                                            name="name"
                                            type="text"
                                            as={TextField}
                                            fullWidth
                                            label="Name"
                                            helperText={
                                                <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                    <ErrorMessage name="name" />
                                                </FormHelperText>
                                            }
                                        />
                                    </Box>
                                </Grid>

                                <Grid item sm={6} xs={12}>
                                    <Box>
                                        <Field
                                            id="email"
                                            name="email"
                                            type="email"
                                            as={TextField}
                                            fullWidth
                                            label="Email"
                                            helperText={
                                                <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                    <ErrorMessage name="email" />
                                                </FormHelperText>
                                            }
                                        />
                                    </Box>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Box>
                                        <Field
                                            id="education"
                                            name="education"
                                            type="text"
                                            as={TextField}
                                            fullWidth
                                            label="Education"
                                            helperText={
                                                <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                    <ErrorMessage name="education" />
                                                </FormHelperText>
                                            }
                                        />
                                    </Box>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Box>
                                        <select
                                            id="type"
                                            name="type"
                                            value={findClass}
                                            onChange={handleChange}
                                            style={{
                                                color: "gray",
                                                fontSize: "18px",
                                                outline: "none",
                                                // border: "none",
                                                background: "transparent",
                                                // width: "100%",
                                                minWidth: "100%",
                                                height: "55px",

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
                                            <option value="" disabled>Select type</option>
                                            <option
                                                style={{ fontSize: "18px", background: "#f2f2f2" }}
                                                value="tutors"
                                            >
                                                Tutors
                                            </option>
                                            <option
                                                style={{ fontSize: "18px", background: "#f2f2f2" }}
                                                value="assessors"
                                            >
                                                Assessors
                                            </option>
                                        </select>
                                    </Box>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Box>
                                        <Field
                                            id="phone"
                                            name="phone"
                                            type="number"
                                            as={TextField}
                                            fullWidth
                                            label="Phone"
                                            helperText={
                                                <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                    <ErrorMessage name="phone" />
                                                </FormHelperText>
                                            }
                                        />
                                    </Box>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Box>
                                        <Field
                                            id="city"
                                            name="city"
                                            type="text"
                                            as={TextField}
                                            fullWidth
                                            label="City"
                                            helperText={
                                                <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                                    <ErrorMessage name="city" />
                                                </FormHelperText>
                                            }
                                        />
                                    </Box>
                                </Grid>
                            </Grid>


                            <Box mt={1} mb={3} pl={2} pr={2}>
                                <Field
                                    id="detail"
                                    name="detail"
                                    type="text"
                                    as={TextField}
                                    fullWidth
                                    multiline
                                    rows={4}
                                    label="Detail"
                                    helperText={
                                        <FormHelperText sx={{ color: 'red', m: 0, fontSize: "16px" }}>
                                            <ErrorMessage name="detail" />
                                        </FormHelperText>
                                    }
                                />
                            </Box>

                            {/* Add similar code for other fields */}

                            <Box mb={3} pl={2} pr={2}>
                                <Button type="submit" fullWidth variant="contained" sx={{ background: "#FFA500", height: "45px", borderRadius: "15px" }}>
                                    Signup
                                </Button>
                            </Box>
                        </Grid>


                    </Grid>
                </Form>
            )}
        </Formik>
    );
};

export default Dashboard;
