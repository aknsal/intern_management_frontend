import { Button, Paper, Typography } from '@mui/material'
import React from 'react'
import "./InternshipCard.css"

export default function InternshipCard() {
    return (
        <div className="internship-card-container">
            <Paper className="internship-card-container-paper">
                <div className='job-profile-paper-align'>

                    <div>
                        <Typography variant="h4">Software Engineer</Typography>
                        <Typography variant="subtitle1">Google</Typography>
                    </div>
                    <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png' height={40}></img>
                </div>
                <br />
                <Typography style={{ marginRight: 10 }} variant="caption">Duration : 2 months</Typography>
                <Typography variant="caption">Apply by : 12 July, 2022</Typography>
                <br />
                
                <br />
                <div>
                    <Button>View Details</Button>
                </div>
            </Paper>
        </div>
    )
}
