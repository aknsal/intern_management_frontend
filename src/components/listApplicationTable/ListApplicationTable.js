import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PreviewIcon from '@mui/icons-material/Preview';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
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

function createData(studentName, jobRole, appliedOn, applicationStatus, applicationId) {
    return { studentName, jobRole, appliedOn, applicationStatus, applicationId };
}

const rows = [
    createData('O.P Vyas', 'Software Engineer', "24/07/22", "Pending", 78432),
    createData('Dr. Anjali Gautam', 'Software Engineer', "06/05/22", "Pending", 389214),
    // createData('Dr. Bibhas Ghoshal', "ML Engineer", "15/03/22", "Pending", 32819),
    // createData('Dr. Muhammed Javed', "Technical Analyst", "24/04/22", "Pending", 32983),
    // createData('Dr. rahul Kala', "Risk Analyst", "13/07/22", "Pending", 329810),
];

export default function ListApplicationTable() {

    React.useEffect(() => {
        fetchDetails()
    }, []);

    const [applications,setapplications] = React.useState(null)

    const fetchDetails = async() => {
        const response = await axios.get('http://localhost:3001/intern/facultyInterships' , {withCredentials:true})

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
            rows.push( createData(applications[i].studentId, 'ML Engineer' , applications[i].createdAt.substring(0,10)  , applications[i].isApproved ? "Accepted" : "Pending"
             , applications[i]._id))
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Student id</StyledTableCell>
                        <StyledTableCell align="center">Profile</StyledTableCell>
                        <StyledTableCell align="center">Applied on</StyledTableCell>
                        <StyledTableCell align="center">Application Status</StyledTableCell>
                        <StyledTableCell align="center">Review Application</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.applicationId}>
                            <StyledTableCell component="th" scope="row">
                                {row.studentName}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.jobRole}</StyledTableCell>
                            <StyledTableCell align="center">{row.appliedOn}</StyledTableCell>
                            <StyledTableCell align="center">{row.applicationStatus}</StyledTableCell>
                            <StyledTableCell align="center"> <Button component={Link} to={`/review/${row.applicationId}`} ><PreviewIcon /></Button> </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}