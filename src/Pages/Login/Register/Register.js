import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import login from "../../../images/login.png"
import useAuth from './../../../hooks/useAuth'


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);


    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert("Your Password Did not matched")
            return
        }
        registerUser(loginData?.email, loginData?.password, loginData?.name, history);

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography variant="body1" gutterBottom>
                        Registration
                    </Typography>
                    {!isLoading &&
                        <form onSubmit={handleLoginSubmit}>
                            <TextField sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                type="password"
                                label="Your Password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                type="password"
                                label="Re-type Password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <NavLink to="/login"><Button variant="text">Already User? Please Login</Button></NavLink>
                            <Button sx={{ width: "75%", m: 1 }}
                                variant="contained"
                                type="submit">Register</Button>

                        </form>

                    }
                    {
                        isLoading && <CircularProgress />
                    }
                    {user.email && <Alert severity="success">User Created successfully !</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img alt="" style={{ width: '100%' }} src={login}></img>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;