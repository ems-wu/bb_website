import React from 'react'
import MediaCard from './Card';
import { Grid } from '@material-ui/core';
import Emily from '../../images/sample_image.jpg';

function E_Board() {
    return (
        <Grid container spacing={4} justify="center">
            <Grid item xs={6} sm={4}>
                <MediaCard 
                    name="Jessica Li"
                    designation="Director of Banking - Sell-Side"
                    linkedin=""
                    image={Emily}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <MediaCard 
                    name="Cara Nguyen"
                    designation="Director of Banking - Buy-Side"
                    linkedin=""
                    image={Emily}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <MediaCard 
                    name="Madelyn Wells"
                    designation="Director of Consulting"
                    linkedin=""
                    image={Emily}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <MediaCard 
                    name="Emily Lai"
                    designation="Director of Accounting"
                    linkedin=""
                    image={Emily}/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <MediaCard 
                    name="Mina Han"
                    designation="Director of Marketing"
                    linkedin=""
                    image={Emily}/>
            </Grid>
        </Grid>
    )
}

export default E_Board