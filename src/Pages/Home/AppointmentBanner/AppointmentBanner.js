import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


const AppointmentBanner = () => {
    const appointmentBg = {

        background: `url(${bg})`,
        marginTop: 150,
        backgroundColor: '#42495C',
        opacity: 0.85,
        backgroundBlendMode: 'darken, luminosity',

    }
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "400px", marginTop: '-120px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography sx={{ color: "#6BD3D3", my: 3 }} variant="h6">
                            Appointment
                        </Typography>
                        <Typography sx={{ color: 'white', my: 3, fontWeight: 400 }} variant="h4">
                            Make an appointment Today
                        </Typography>
                        <Typography sx={{ color: 'white', my: 3, fontWeight: 200, fontSize: 14, }} variant="h6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, consequatur. Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. provident, recusandae eligendi placeat consequatur quos?
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: "#11D0E0" }}>Learn More</Button>
                    </Box>

                </Grid>

            </Grid>
        </Box >
    );
};

export default AppointmentBanner;