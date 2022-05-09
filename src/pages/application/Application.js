import { Paper, Typography, Button, TextField } from '@mui/material'
import React from 'react'
import "./Application.css"
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    cgpa: yup
        .number('Enter you CGPA')
        .max(10, "Enter a valid CGPA")
        .required('CGPA is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    phone: yup
        .number('Enter your phone number')
        .max(10, 'Enter a valid Phone number')
        .min(10, 'Enter a valid phone number')
        .required('Phone number id required')
});

export default function Application() {
    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='application-cointainer'>
            <Typography style={{ marginBottom: 30 }} gutterBottom variant="h4">Fill internship Application</Typography>
            <Paper className="job-profile-paper">
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
                <Typography variant="h6">Minimum Qualifications</Typography>
                <div>
                    <li>Bachelor's degree in Computer Science or equivalent practical experience.</li>
                    <li>5 years of experience with design thinking, design sprint, and digital transformations in transformation programs for C-level leaders in enterprises.</li>
                    <li>Experience navigating organizations with distributed stakeholders.</li>
                    <li>Experience on disruptive technologies (e.g., Google Cloud, Big Data, Internet of Things (IOT), and Mobile).</li>
                </div>
                <br />
            </Paper>
            <div className='profile-container'>
                <Paper className='application-input-paper'>
                    <Typography gutterBottom variant="h6" >Title</Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField style={{ marginBottom: 20 }} id="outlined-basic" multiline rows={8} name='name' fullWidth label="Why should we hire you?" variant="outlined" />
                        <TextField style={{ marginBottom: 20 }} id="outlined-basic" multiline rows={10} name='email' fullWidth label="What is your experiance in this field?" variant="outlined" value={formik.values.experiance} />
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Submit
                        </Button>

                    </form>
                </Paper>
            </div>
        </div>
    )
}
