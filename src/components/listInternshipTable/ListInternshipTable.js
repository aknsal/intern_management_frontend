import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(facultyName, profile, appliedOn, numberOfApplicants, applicationStatus) {
  return { facultyName, profile, appliedOn, numberOfApplicants, applicationStatus };
}

const rows = [
  // createData('O.P Vyas', 'Software Engineer', "24/07/22", 24, 4.0),
  // createData('Dr. Anjali Gautam', 'Software Engineer', "06/05/22", 37, 4.3),
  // createData('Dr. Bibhas Ghoshal', "ML Engineer", "15/03/22", 24, 6.0),
  // createData('Dr. Muhammed Javed', "Technical Analyst", "24/04/22", 67, 4.3),
  // createData('Dr. rahul Kala', "Risk Analyst", "13/07/22", 49, 3.9),
];

export default function ListInternshipTable() {

  React.useEffect(() => {
    fetchDetails()
  }, []);

  const [applications,setapplications] = React.useState(null)

  const fetchDetails = async() => {
      const response = await axios.get('http://localhost:3001/intern/appliedInternships' , {withCredentials:true})

      console.log(response)
      if(response){
          setapplications(response.data.data)
      }
  }

  if(!applications){
      return (
          <h1>
              Loading
          </h1>
      )
  }

  if(applications && rows.length == 0){
      for(let i=0; i<applications.length; i++){
          rows.push( createData(applications[i].facultyId, 'ML Engineer' , applications[i].createdAt.substring(0,10) , 25 , applications[i].isApproved ? "Accepted" : "Pending"))
      }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Faculty id </StyledTableCell>
            <StyledTableCell align="center">Profile</StyledTableCell>
            <StyledTableCell align="center">Applied on</StyledTableCell>
            <StyledTableCell align="center">Number of Applicants</StyledTableCell>
            <StyledTableCell align="center">Application Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.facultyName}>
              <StyledTableCell component="th" scope="row">
                {row.facultyName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.profile}</StyledTableCell>
              <StyledTableCell align="center">{row.appliedOn}</StyledTableCell>
              <StyledTableCell align="center">{row.numberOfApplicants}</StyledTableCell>
              <StyledTableCell align="center">{row.applicationStatus}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}