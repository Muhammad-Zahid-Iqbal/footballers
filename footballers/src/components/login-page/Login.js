import React from 'react';
import { TextField, Button, Link, Typography, Container, CssBaseline, Grid, Box, FormHelperText } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Div from '../../shared/Div/Div';

const validationSchema = yup.object({
    email: yup.string('Enter email').email('Invalid email').required('Email is required'),
    password: yup.string('Enter password').required('Password is required'),
});


const Login = () => {


    const handleSubmit = (data, { setSubmitting, resetForm }) => {
        console.log("data", data);
        // Handle form submission logic here

        // Example: Assume form submission is successful, then reset the form
        resetForm();
        setSubmitting(false);
    };

    return (
        <Container component="main" maxWidth="xs" sx={{ height: "50vh", display: "flex", alignItems: "center" }}>
            <CssBaseline />
            <Div sx={{ textAlign: "center" }}>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(data, { setSubmitting, resetForm }) => {
                        console.log("dataFormik", data)
                        handleSubmit(data, { setSubmitting, resetForm });
                    }}
                >
                    <Form>
                        <Box sx={{ mt: 1, mb: 3, pl: 2, pr: 2 }}>
                            <Field
                                id="email"
                                name="email"
                                type="text"
                                as={TextField}
                                fullWidth
                                label="Enter Email"
                                helperText={
                                    <FormHelperText sx={{ color: 'red', m:0,fontSize:"16px" }}>
                                        <ErrorMessage name="email" />
                                    </FormHelperText>
                                }
                            />
                        </Box>

                        <Box sx={{ mt: 1, mb: 3, pl: 2, pr: 2 }}>
                            <Field
                                id="password"
                                name="password"
                                type="password"
                                as={TextField}
                                fullWidth
                                label="Enter Password"
                                helperText={
                                    <FormHelperText sx={{ color: 'red', m:0, fontSize:"16px" }}>
                                        <ErrorMessage name="password" />
                                    </FormHelperText>
                                }
                            />
                        </Box>
                        <Box sx={{ mb: 3, pl: 2, pr: 2 }}>
                            <Button type="submit" fullWidth variant="contained">
                                Login
                            </Button>
                        </Box>

                    </Form>
                </Formik>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot your password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            Don't have an account? Sign Up Here
                        </Link>
                    </Grid>
                </Grid>
            </Div>
        </Container >
    );
};

export default Login;
