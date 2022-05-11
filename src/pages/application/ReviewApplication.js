import { Typography, Paper, Button } from '@mui/material'
import React from 'react'
import "./ReviewApplication.css"
import axios from "axios"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

export default function ReviewApplication() {

    const [application, setapplication] = React.useState([]);
    const [student, setstudent] = React.useState([])
    const { aid } = useParams()

    React.useEffect(() => {
        getApplicationDetails()
    }, [])

    const getApplicationDetails = async (req, res) => {
        let response = await axios.get(`http://localhost:3001/intern/application/${aid}`, { withCredentials: true })
        console.log(response);
        if (response && response.data) {
            setapplication(response.data.data)
            setstudent(response.data.student)
        }
    }

    const approve = async (req, res) => {
        await axios.get(`http://localhost:3001/intern/approve/${aid}`, { withCredentials: true })
    }

    const reject = async (req, res) => {
        await axios.get(`http://localhost:3001/intern/reject/${aid}`, { withCredentials: true })
    }



    return (
        <div className="review-application-container">
            <div className='review-student-details'>
                <Paper className='review-paper'>
                    {
                        student && student.name ?
                            <div>
                                <Typography color='primary' gutterBottom variant="h5">Student Details</Typography>
                                <Typography><b>Name : </b>{student.name ? student.name : "Mohit Chauhan"}</Typography>
                                <Typography><b>Email : </b> {student.email}</Typography>
                                <Typography><b>Phone: </b> {student.phoneNo} </Typography>
                                <Typography><b>CGPA: </b> {student.CGPA} </Typography>
                                <Typography><b>Enrollment Number: </b>{student.enrollmentNumber}</Typography>
                                <Typography><b>Branch: </b> {student.branch} </Typography>
                                <Typography><b>Resume Link: </b> {student.resume} </Typography>
                            </div>
                            : null
                    }


                </Paper>

                <Paper className='review-paper'>
                    <Typography color='primary' gutterBottom variant="h5">Application Details</Typography>
                    <Typography><b>Why hire me : </b> {application.whyHire} </Typography>
                    <Typography><b>My Experiance : </b> {application.experience} </Typography>
                    <Typography><b>Status: </b> {application.status} </Typography>
                </Paper>
                {
                    application && application.status === "Pending" ?

                        <div className='aproove-or-reject'>
                            <Button style={{ marginRight: 20 }} variant='contained' fullWidth color='success' onClick={() => { approve() }}>Approve</Button>
                            <Button style={{ marginLeft: 20 }} variant='contained' fullWidth color='error' onClick={() => { reject() }} >Reject</Button>
                        </div>
                        :
                        null
                }
            </div>
        </div>
    )
}
