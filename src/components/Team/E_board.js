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
                    image={Emily}
                    clg="Junior at UC Berkeley"
                    linkedin="https://linkedin.com/in/neelanshisharma"
                    description="Emily (a.k.a. Amily) is a 3rd year at UC Berkeley studying Economics and Data Science with a minor in Theater Performance. On campus, she serves as the Director of Professional Development for 180 Degrees Consulting and the Marketing Chair for the Berkeley Finance Club. She is going to Credit Suisse next summer as an Investment Banking Summer Analyst. Outside of school, she’s interested in photography, film production, and Avatar the Last Airbender. Feel free to reach out with any questions!"/>
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