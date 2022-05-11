import { Paper, TextField, Typography, Button } from '@mui/material'
import React from 'react'
import avatar from "../../assets/avatar.webp"
import "./Profile.student.css"
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { userDetailsContext } from "../../context/userDetailsProvider";

const validationSchema = yup.object({
  // CGPA: yup
  //   .number('Enter you CGPA')
  //   .max(10, "Enter a valid CGPA")
  //   .required('CGPA is required'),
  // phone: yup
  //   .number('Enter your phone number')
  //   .max(10, 'Enter a valid Phone number')
  //   .min(10, 'Enter a valid phone number')
  //   .required('Phone number id required'),
  // resume: yup
  // .string('Enter your resume')
  // .required('Resume id required')
});


export default function StudentProfile() {

  const [userDetails, setUserDetails] = React.useContext(userDetailsContext);


  React.useEffect(() => {
    fetchAuthUser()
  }, [])


  const fetchAuthUser = async () => {
    const response = await axios.get("http://localhost:3001/profile", { withCredentials: true }).catch((err) => {
      setUserDetails(null);
    });

    if (response && response.data) {
      setUserDetails(response.data.user);
    }
    formik.values.phone = response.data.user.phoneNo;
    formik.values.CGPA = response.data.user.CGPA;
    formik.values.resume = response.data.user.resume;
    console.log(response.data.user)
  }

  const registerStudent = async (values) => {
    console.log(values)

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      data: values
    };

    await axios.post("http://localhost:3001/register/student", config, { withCredentials: true })
      .then((res) => console.log(res))
  }

  const formik = useFormik({
    initialValues: {
      CGPA: '',
      phone: '',
      resume: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      registerStudent(values)
    },
    enableReinitialze: true,
  });



  return (
    <div className='profile-container'>
      <Typography variant='h3'>My Profile</Typography>
      <Paper className='student-profile-paper'>
        <form onSubmit={formik.handleSubmit}>
          {userDetails && userDetails.name ?
            <TextField style={{ marginBottom: 20 }} id="outlined-basic" name='name' fullWidth label="Name" variant="outlined"
              value={userDetails.name}
              disabled />
            :
            null
          }
          {userDetails && userDetails.name ?
            <TextField style={{ marginBottom: 20 }} id="outlined-basic" name='email' fullWidth label="Email" variant="outlined" value={userDetails.email} disabled />
            :
            null
          }




          <TextField style={{ marginBottom: 20, marginRight: 5 }} id="outlined-basic" name='CGPA'
            onChange={formik.handleChange}
            value={formik.values.CGPA}
            label="CGPA" variant="outlined" />

          {userDetails && userDetails.name ?
            <TextField style={{ marginBottom: 20 }} id="outlined-basic" label="Enrollment Number" value={userDetails.enrollmentNumber} variant="outlined" disabled />
            :
            null
          }



          <TextField style={{ marginBottom: 20, marginRight: 5 }} id="outlined-basic" label="Phone" name='phone'
            onChange={formik.handleChange}
            value={formik.values.phone}
            variant="outlined" />

          {userDetails && userDetails.name ?
            <TextField style={{ marginBottom: 20 }} id="outlined-basic" label="Branch" value={userDetails.branch} variant="outlined" disabled />
            :
            null
          }

          <TextField style={{ marginBottom: 20 }} id="outlined-basic" name='resume'
            onChange={formik.handleChange}
            value={formik.values.resume}
            fullWidth label="Resume Link" variant="outlined" helperText="Preferebely a Gdrive link shared with every one" />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>

        </form>
      </Paper>
    </div>
  )
}
