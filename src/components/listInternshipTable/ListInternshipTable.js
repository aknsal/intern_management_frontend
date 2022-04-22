import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createData(companyName, profile, appliedOn, numberOfApplicants, applicationStatus) {
  return { companyName, profile, appliedOn, numberOfApplicants, applicationStatus };
}

const rows = [
  createData('Microsoft', 'Software Engineer', 6.0, 24, 4.0),
  createData('Google', 'Software Engineer', 9.0, 37, 4.3),
  createData('Sprinklr', "ML Engineer", 16.0, 24, 6.0),
  createData('Goldman Sachs', "Technical Analyst", 3.7, 67, 4.3),
  createData('Accenture', "Risk Analyst", 16.0, 49, 3.9),
];

export default function ListInternshipTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell align="center">Profile</StyledTableCell>
            <StyledTableCell align="center">Applied on</StyledTableCell>
            <StyledTableCell align="center">Number of Applicants</StyledTableCell>
            <StyledTableCell align="center">Application Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.companyName}
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