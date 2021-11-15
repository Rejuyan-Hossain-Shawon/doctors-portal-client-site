import React from 'react';
import chair from "../../../images/chair.png";
import bg from '../../../images/bg.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`
}
const verticalCenter = {
    display: 'flex',
    height: 400,
    alignItems: "center"
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1, mt: 5 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalCenter, textAlign: "left" }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here

                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 13, color: 'gray', fontWeight: 300, my: 5 }}>
                            When you start typing an Emmet abbreviation, you will see the abbreviation displayed in the suggestion list. If you have the suggestion documentation fly-out open, you will see a preview of the expansion as you type. If you are in a stylesheet file, the expanded abbreviation shows up in the suggestion list sorted among the other CSS suggestions

                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: "#11D0E0" }}>Get Appointment</Button>
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>

                    <img style={{ width: '450px' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;