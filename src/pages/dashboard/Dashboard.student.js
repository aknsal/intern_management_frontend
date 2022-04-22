import { Typography } from '@mui/material'
import React from 'react'
import ListInternshipTable from '../../components/listInternshipTable/ListInternshipTable'
import "./Dashboard.student.css"

export default function StudentDashboard() {
  return (
    <div className="page-container">
        <Typography variant="h4">My Applications</Typography>
        <br />
        <ListInternshipTable />
        <br />
        <br />
        <Typography variant="h6">Browse More Internships</Typography>
    </div>
  )
}
