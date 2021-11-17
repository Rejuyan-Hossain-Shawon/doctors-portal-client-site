import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import Calender from '../../../Shared/Calender/Calender';

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={chair} alt="" style={{ width: '100%' }}></img>

                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentHeader;