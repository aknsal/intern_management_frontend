import { Paper, Typography, Button, TextField } from '@mui/material'
import React from 'react'
import "./Application.css"
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";


const validationSchema = yup.object({
    // email: yup
    //     .string('Enter your email')
    //     .email('Enter a valid email')
    //     .required('Email is required'),
    // cgpa: yup
    //     .number('Enter you CGPA')
    //     .max(10, "Enter a valid CGPA")
    //     .required('CGPA is required'),
    // password: yup
    //     .string('Enter your password')
    //     .min(8, 'Password should be of minimum 8 characters length')
    //     .required('Password is required'),
    // phone: yup
    //     .number('Enter your phone number')
    //     .max(10, 'Enter a valid Phone number')
    //     .min(10, 'Enter a valid phone number')
    //     .required('Phone number id required')
});

export default function Application() {

    const formik = useFormik({
        initialValues: {
            whyHire: '',
            experience: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            applyForIntern(values)
        },
    });


    const [internship, setinternship] = React.useState([]);
    const [faculty, setfaculty] = React.useState([])
    const { aid } = useParams()

    const applyForIntern = async (data) => {
        console.log(data);
        await axios.post(`http://localhost:3001/intern/apply/${aid}`, data, { withCredentials: true }).then((res) => console.log(res))
    }
    React.useEffect(() => {
        getInternshipDetails()
    }, [])

    const getInternshipDetails = async (req, res) => {
        let response = await axios.get(`http://localhost:3001/intern/internship/${aid}`, { withCredentials: true })

        if (response && response.data) {
            setinternship(response.data.data)
            setfaculty(response.data.faculty)
        }
    }



    return (
        <div className='application-cointainer'>
            <Typography style={{ marginBottom: 30 }} gutterBottom variant="h4">Fill internship Application</Typography>
            <Paper className="job-profile-paper">
                <div className='job-profile-paper-align'>

                    <div>
                        <Typography variant="h4">Teaching Assisstant</Typography>
                        <Typography variant="subtitle1">{internship.name ? internship.name : "Google"}</Typography>
                    </div>
                </div>
                <br />
                <Typography style={{ marginRight: 10 }} variant="caption">Duration : 2 months</Typography>
                <Typography variant="caption">Apply by : 12 July, 2022</Typography>
                <br />
                <Typography variant="h6">Minimum Qualifications</Typography>
                <div>
                    <li>Bachelor's degree in Computer Science or equivalent practical experience.</li>
                    <li>5 years of experience with design thinking, design sprint, and digital transformations in transformation programs for C-level leaders in enterprises.</li>
                    <li>Experience navigating organizations with distributed stakeholders.</li>
                    <li>Experience on disruptive technologies (e.g., Google Cloud, Big Data, Internet of Things (IOT), and Mobile).</li>
                </div>
                <br />

                <div>
                    <Typography variant="h4">Faculty Incharge: {faculty.name ? faculty.name : "Bibhas Ghoshal"}  </Typography>
                    <Typography variant="h4">Contact: {faculty.email} </Typography>

                </div>
            </Paper>
            <div className='profile-container'>
                <Paper className='application-input-paper'>
                    <Typography gutterBottom variant="h6" >Apply for intern</Typography>
                    <form onSubmit={formik.handleSubmit}>

                        <TextField style={{ marginBottom: 20 }} id="outlined-basic" multiline rows={8} name='whyHire' fullWidth label="Why should we hire you?"
                            onChange={formik.handleChange}
                            value={formik.values.whyHire}
                            variant="outlined" />

                        <TextField style={{ marginBottom: 20 }} id="outlined-basic" multiline rows={10} name='experience'
                            onChange={formik.handleChange}
                            value={formik.values.experience}
                            fullWidth label="What is your experiance in this field?" variant="outlined" />

                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Submit
                        </Button>

                    </form>
                </Paper>
            </div>
        </div>
    )
}
