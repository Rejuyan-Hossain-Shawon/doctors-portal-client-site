import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from "../../../images/login.png"
import useAuth from './../../../hooks/useAuth'

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);


    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            type="password"
                            label="Your Password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        <NavLink to="/register"><Button variant="text">New User? Please Register</Button></NavLink>
                        <Button sx={{ width: "75%", m: 1 }}
                            variant="contained"
                            type="submit">Login</Button>

                        {
                            isLoading && <CircularProgress />
                        }
                        {user.email && <Alert severity="success">User Created successfully !</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}

                    </form>
                    <p>-----------------------------------</p>
                    <Button onClick={() => signInWithGoogle(location, history)} variant="contained">Google Sign In</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img alt="" style={{ width: '100%' }} src={login}></img>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;