import { Button, Typography } from '@mui/material'
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import ListInternshipTable from '../../components/listInternshipTable/ListInternshipTable'
import "./Dashboard.student.css"
import { userDetailsContext } from "../../context/userDetailsProvider";

export default function StudentDashboard() {
  const [userDetails, setUserDetails] = useContext(userDetailsContext);
  const [loading, setLoading] = useState(false);

  // const handleGetUser = async () => {
  //   try {
  //     setLoading(true);
  //     // let response = await getUser(email);
  //     setUserDetails({ isStudent: true, studentName: "Mehta" });
  //   } catch (error) {
  //     console.log(error);
  //     // TODO: better error handling
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   if (!userDetails) {
  //     handleGetUser();
  //   }
  // }, []);

  return (
    <div className="page-container">
      <Typography variant="h4">My Applications</Typography>
      <br />
      <ListInternshipTable />
      <br />
      <br />
      <Button component={Link} to="/browse-internship">
        <Typography variant="h6">Browse More Internships</Typography>
      </Button>
    </div>
  )
}
