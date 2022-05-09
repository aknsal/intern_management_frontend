import { Paper, TextField, Typography, Button } from '@mui/material'
import React from 'react'
import avatar from "../../assets/avatar.webp"
import "./Profile.student.css"
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



export default function StudentProfile() {

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
    <div className='profile-container'>
      <Typography variant='h3'>My Profile</Typography>
      <Paper className='student-profile-paper'>
        <form onSubmit={formik.handleSubmit}>
          <TextField style={{ marginBottom: 20 }} id="outlined-basic" name='name' fullWidth label="Name" variant="outlined" disabled />
          <TextField style={{ marginBottom: 20 }} id="outlined-basic" name='email' fullWidth label="Email" variant="outlined" value={formik.values.email} disabled />
          <TextField style={{ marginBottom: 20, marginRight: 5 }} id="outlined-basic" label="CGPA" variant="outlined" />
          <TextField style={{ marginBottom: 20 }} id="outlined-basic" label="Enrollment Number" variant="outlined" disabled />
          <TextField style={{ marginBottom: 20, marginRight: 5 }} id="outlined-basic" label="Phone" variant="outlined" />
          <TextField style={{ marginBottom: 20 }} id="outlined-basic" label="Branch" variant="outlined" disabled />
          <TextField style={{ marginBottom: 20 }} id="outlined-basic" name='resume' fullWidth label="Resume Link" variant="outlined" helperText="Preferebely a Gdrive link shared with every one" />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>

        </form>
      </Paper>
    </div>
  )
}
