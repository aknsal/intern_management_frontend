import { Paper, Typography } from '@mui/material'
import React from 'react'
import avatar from "../../assets/avatar.webp"
import "./Profile.student.css"

export default function StudentProfile() {
  return (
    <div className='profile-container'>
      <Paper className='student-profile-paper'>
        <div>
          <img src={avatar} width="100px"></img>
        </div>
        <div>
          <Typography>
            Name
          </Typography>
          <Typography>
            Mohit Chauhan
          </Typography>
        </div>
      </Paper>
    </div>
  )
}
