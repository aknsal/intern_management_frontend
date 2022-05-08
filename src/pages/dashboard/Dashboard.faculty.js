import React from 'react'
import ListApplicationTable from '../../components/listApplicationTable/ListApplicationTable'
import { Typography } from '@mui/material'


export default function FacultyDashboard() {
    return (
        <div className="page-container">
            <Typography variant="h4">Pending Applications</Typography>
            <br />
            <ListApplicationTable />
            <br />
        </div>
    )
}
