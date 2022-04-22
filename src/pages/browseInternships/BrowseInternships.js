import { Typography } from '@mui/material'
import React from 'react'
import InternshipCard from '../../components/internshipCard/InternshipCard'
import "./BrowseInternships.css"
export default function BrowseInternships() {
  return (
    <div className='browse-internship-conatiner'>
        <Typography variant="h4">24 Intrenships Available</Typography>
        <br />
        <br />
        <div className='show-internships'>

        <InternshipCard />
        <InternshipCard />
        <InternshipCard />
        <InternshipCard />
        <InternshipCard />
        <InternshipCard />
        <InternshipCard />
        <InternshipCard />
        <InternshipCard />
        <InternshipCard />

        </div>

    </div>
  )
}
