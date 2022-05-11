import { Paper, TextField, Typography, Button } from '@mui/material'
import React from 'react'
import avatar from "../../assets/avatar.webp"
import "./Profile.student.css"
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { userDetailsContext } from "../../context/userDetailsProvider";
import { SignalCellularNullRounded } from '@mui/icons-material';

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




export default function FacultyProfile() {

    React.useEffect(() => {
        fetchAuthUser()
    }, [])
    const [userDetails, setUserDetails] = React.useContext(userDetailsContext);

    const fetchAuthUser = async () => {
        const response = await axios.get("http://localhost:3001/profile", { withCredentials: true }).catch((err) => {
            setUserDetails(null);
        });

        if (response && response.data) {
            setUserDetails(response.data.user);
        }
        formik.values.areaOfInterest = response.data.user.areaOfInterest;
        formik.values.qualifications = response.data.user.qualifications;
        formik.values.website = response.data.user.website;
        formik.values.phoneNo = response.data.user.phoneNo;
        console.log(response.data)
    }

    const registerFaculty = async (values) => {
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
            areaOfInterest: '',
            qualifications: '',
            website: '',
            phoneNo: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            registerFaculty(values)
        },
    });

    return (
        <div className='profile-container'>
            <Typography variant='h3'>My Profile</Typography>
            <Paper className='student-profile-paper'>
                <form onSubmit={formik.handleSubmit}>
                    {
                        userDetails && userDetails.email ?

                            <TextField style={{ marginBottom: 20 }} id="outlined-basic" name='name' fullWidth label="Name" variant="outlined"
                                value={userDetails.name}
                                disabled />
                            :
                            SignalCellularNullRounded
                    }
                    {
                        userDetails && userDetails.email ?


                            <TextField style={{ marginBottom: 20 }} id="outlined-basic" name='email' fullWidth label="Email" variant="outlined"
                                value={userDetails.email}
                                disabled />
                            :
                            SignalCellularNullRounded
                    }
                    <TextField style={{ marginBottom: 20, marginRight: 7 }} id="outlined-basic" label="Phone"
                        onChange={formik.handleChange}
                        value={formik.values.phoneNo}
                        variant="outlined" />

                    <TextField style={{ marginBottom: 20 }} id="outlined-basic" name="qualifications" label="Qualifications"
                        onChange={formik.handleChange}
                        value={formik.values.qualifications}
                        variant="outlined" />

                    <TextField style={{ marginBottom: 20 }} id="outlined-basic" name="areaofInterest" fullWidth label="Area of Interests"
                        onChange={formik.handleChange}
                        value={formik.values.areaOfInterest}
                        variant="outlined" />

                    <TextField style={{ marginBottom: 20 }} id="outlined-basic" name='website' fullWidth label="Website"
                        onChange={formik.handleChange}
                        value={formik.values.website}
                        variant="outlined" />

                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                    </Button>

                </form>
            </Paper>
        </div>
    )
}
