import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Service from '../Service/Service';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'


const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aliquid id voluptas explicabo distinctio assumenda odio architecto quod maxime molestias. Cupiditate nulla optio dolore debitis id blanditiis earum, veritatis numquam.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aliquid id voluptas explicabo distinctio assumenda odio architecto quod maxime molestias. Cupiditate nulla optio dolore debitis id blanditiis earum, veritatis numquam.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, aliquid id voluptas explicabo distinctio assumenda odio architecto quod maxime molestias. Cupiditate nulla optio dolore debitis id blanditiis earum, veritatis numquam.',
        img: whitening
    },
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Container>
                <Typography sx={{ fontWeight: 400, color: 'success.main', m: 2 }} variant="h5" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}>

                        </Service>)
                    }
                </Grid>
            </Container>

        </Box>
    );
};

export default Services;