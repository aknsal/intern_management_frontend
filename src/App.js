
import React, { useState } from 'react'
import Homepage from './pages/homepage/Homepage';

import Layout from './components/Layout';
import lightTheme from './theme/theme.light';
import { ThemeProvider } from '@mui/material/styles';
import StudentDashboard from './pages/dashboard/Dashboard.student';
import InternshipPage from './pages/internshipPage/InternshipPage';
import BrowseInternships from './pages/browseInternships/BrowseInternships';
import darkTheme from './theme/theme.dark';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FacultyDashboard from './pages/dashboard/Dashboard.faculty';
import UserDetailsProvider from './context/userDetailsProvider';
import StudentProfile from './pages/Profile/Profile.student';


function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log(isDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme} >
      <CssBaseline />
      <BrowserRouter>
        <UserDetailsProvider>
          <Layout setIsDarkTheme={setIsDarkTheme}>

            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/dashboard/student" element={<StudentDashboard />} />
              <Route exact path="/inter" element={<InternshipPage />} />
              <Route exact path="/browse-internship" element={<BrowseInternships />} />
              <Route exact path="/dashboard/faculty" element={< FacultyDashboard />} />
              <Route exact path="/profile/student" element={< StudentProfile />} />

            </Routes>
          </Layout>
        </UserDetailsProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
