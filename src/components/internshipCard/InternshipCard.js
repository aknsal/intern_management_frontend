import { Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./InternshipCard.css"

export default function InternshipCard(props) {
    
    return (
        <div className="internship-card-container">
            <Paper className="internship-card-container-paper">
                <div className='job-profile-paper-align'>

                    <div>
                        <Typography variant="h4">Teaching Assisstant</Typography>
                        <Typography variant="subtitle1">{props.data.name ? props.data.name : "Google"}</Typography>
                    </div>
                </div>
                <br />
                <Typography style={{ marginRight: 10 }} variant="caption">Duration : 2 months</Typography>
                <Typography variant="caption">Apply by : 12 July, 2022</Typography>
                <Typography style={{ marginRight: 20 }} variant="caption">Stipend : {props.data.stipend}</Typography>
                <Typography variant="caption">Minimum CGPA : {props.data.minCGPA}</Typography>
                <br />
                
                <br />
                <div>
                    <Link to={`/application/${props.data._id}`}> <Button>View Details</Button> </Link>
                </div>
            </Paper>
        </div>
    )
}
