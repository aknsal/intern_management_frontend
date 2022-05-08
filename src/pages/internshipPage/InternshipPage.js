import { Button, Paper, Typography } from '@mui/material'
import React from 'react'
import Skills from '../../components/skills/Skills'
import "./InternshipPage.css"

export default function InternshipPage() {
  return (
    <div className='page-container internship-page-container'>
      <div className='internship_page-sub'>
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

          <div>
            <Button variant="contained">Apply Now</Button>
          </div>
        </Paper>
        <br />
        <Paper className="job-description-paper">
          <Typography variant="h5">Job Description</Typography>
          <br />
          <Typography variant="h6">About the job</Typography>
          <Typography variant="body1">When leading companies choose Google Cloud it's a huge win for spreading the power of cloud computing globally. Once educational institutions, government agencies, and other businesses sign on to use Google Cloud products, you come in to facilitate making their work more productive, mobile, and collaborative. You listen and deliver what is most helpful for the customer. You assist fellow sales Googlers by problem-solving key technical issues for our customers. You liaise with the product marketing management and engineering teams to stay on top of industry trends and devise enhancements to Google Cloud products.</Typography>
          <br />
          <Typography style={{ marginBottom: 8 }} variant="h6">Skills Required</Typography>
          <Skills></Skills>
          <br />
          <Typography variant="h6">Responsibilities</Typography>
          <Typography variant="body1">Travel to customer sites, conferences, and other related events.</Typography>

          <br />
          <Typography variant="h6">Location</Typography>
          <Typography variant="body1">San Francisco</Typography>
          <br />
          <div>
            <Button variant="contained">Apply Now</Button>
          </div>

        </Paper>
        <br />
        <Paper className="job-description-paper">
          <Typography variant="h5">About Company</Typography>
          <br />
          <Typography variant="h6">Google</Typography>
          <Typography variant="body1">Quality Engineering & Software Technologies Pvt. Ltd. (QuEST) is a leading provider of engineering solutions for advanced technology products in the Aerospace, Automotive, Power Generation, Oil & Gas, and Industrial Product domains. We are a Six Sigma trained company with expertise that ranges from concept to product realization services</Typography>
          <br />
        </Paper>
      </div>
    </div>
  )
}
