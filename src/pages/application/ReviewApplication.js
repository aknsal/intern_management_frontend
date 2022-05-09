import { Typography, Paper, Button } from '@mui/material'
import React from 'react'
import "./ReviewApplication.css"

export default function ReviewApplication() {
    return (
        <div className="review-application-container">
            <div className='review-student-details'>
                <Paper className='review-paper'>
                    <Typography color='primary' gutterBottom variant="h5">Student Details</Typography>
                    <Typography><b>Name : </b>Mohit Chauhan</Typography>
                    <Typography><b>Email : </b>mc@email.com</Typography>
                    <Typography><b>Phone: </b>9876543289</Typography>
                    <Typography><b>CGPA: </b>8.7</Typography>
                    <Typography><b>Enrollment Number: </b>IIT2020249</Typography>
                    <Typography><b>Branch: </b>Information Technology</Typography>
                    <Typography><b>Resume Link: </b>http://resume.com</Typography>

                </Paper>

                <Paper className='review-paper'>
                    <Typography color='primary' gutterBottom variant="h5">Application Details</Typography>
                    <Typography><b>Why hire me</b>: Lorem jkdfjfajkldsfdsacndsjklacdjkcnksdajnckjsdfkdsfjdncdkjni cdsjkhcdsjkf dskcjbuicij cnsd fkjds csd</Typography>
                    <Typography><b>My Experiance : </b>My experiance</Typography>
                </Paper>
                <div className='aproove-or-reject'>
                    <Button style={{ marginRight: 20 }} variant='contained' fullWidth color='success'>Approve</Button>
                    <Button style={{ marginLeft: 20 }} variant='contained' fullWidth color='error' >Reject</Button>
                </div>
            </div>
        </div>
    )
}
