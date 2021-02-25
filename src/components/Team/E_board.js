import React from 'react'
import MediaCard from './Card';
import { Grid } from '@material-ui/core';
import Emily from '../../images/sample_image.jpg';

function E_Board() {
    return (
        <Grid container spacing={4} justify="center">
            <Grid item xs={6} >
                <MediaCard 
                    name="Emily ZhouWang"
                    designation="Co-Founder"
                    linkedin=""
                    image={Emily}
                    clg="Junior at UC Berkeley"/>
            </Grid>
            <Grid item xs={6} >
                <MediaCard 
                    name="Kathleen Kong"
                    designation="Co-Founder"
                    linkedin=""
                    image={Emily}
                    clg="Junior at UC Berkeley"/>
            </Grid>
        </Grid>
    )
}

export default E_Board