import { Typography } from '@mui/material'
import React from 'react'
import InternshipCard from '../../components/internshipCard/InternshipCard'
import "./BrowseInternships.css"
import { userDetailsContext } from "../../context/userDetailsProvider";
import axios from 'axios';

const BrowseInternships = () => {
  
  const [internships,setinternships] = React.useState([]);
  const [loading,setloading] = React.useState(true)

  React.useEffect(() => {
    getAllAvaliableInternships()
  },[])

  const getAllAvaliableInternships = async(req,res) => {
    let response = await axios.get('http://localhost:3001/intern/internship')
    
    if (response && response.data) {
      setinternships(response.data.data)
    }
  }

  if(internships.length === 0){
    return (
      <h1>Loading</h1>
    )
  }
  else{
    
    return (
      <div className='browse-internship-conatiner'>
          <Typography variant="h4">24 Intrenships Available</Typography>
          <br />
          <br />
          <div className='show-internships'>

          {internships.map((internship) => 
              <InternshipCard data={internship}/>
          )}
          
          </div>  

      </div>
    )
  }
}

export default BrowseInternships;