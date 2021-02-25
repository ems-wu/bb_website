import React from 'react'
import MediaCard from './Card';
import { Grid } from '@material-ui/core';
import Emily from '../../images/sample_image.jpg';

function VP() {
    return (
        <Grid container spacing={4} justify="center">
            <Grid item xs={6} sm={4}>
                <MediaCard 
                    name="Emily Wu"
                    designation="VP of Technology"
                    linkedin=""
                    image={Emily}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <MediaCard 
                    name="Vyshali Gondi"
                    designation="VP of Recruitment"
                    linkedin=""
                    image={Emily}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <MediaCard 
                    name="Tamara Sato"
                    designation="VP of Recruitment"
                    linkedin=""
                    image={Emily}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <MediaCard 
                    name="Chelsea Kwak"
                    designation="VP of Outreach"
                    linkedin=""
                    image={Emily}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <MediaCard 
                    name="Lina Zhou"
                    designation="VP of Social Media"
                    linkedin=""
                    image={Emily}/>
            </Grid>
        </Grid>
    )
}

export default VP