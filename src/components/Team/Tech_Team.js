import React from 'react'
import MediaCard from './Card';
import { Grid } from '@material-ui/core';
import Emily from '../../images/sample_image.jpg';

function Tech_Team() {
    return (
        <Grid container spacing={4} justify="center">
            <Grid item xs={6} sm={4}>
                <MediaCard 
                    name={"Lu Wang"}
                    linkedin={""}
                    image={Emily}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <MediaCard 
                    name={"Neelanshi Sharma"}
                    linkedin={""}
                    image={Emily}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <MediaCard 
                    name={"Soohyun Ahn"}
                    linkedin={""}
                    image={Emily}/>
            </Grid>
        </Grid>
    )
}

export default Tech_Team