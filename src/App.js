
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
import FacultyProfile from './pages/Profile/Profile.faculty';
import Application from './pages/application/Application';
import ReviewApplication from "./pages/application/ReviewApplication";
import PostApplication from './pages/admin/postApplication';

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
              <Route exact path="/profile/faculty" element={< FacultyProfile />} />
              <Route exact path="/application/:aid" element={< Application />} />
              <Route exact path="/review/:aid" element={< ReviewApplication />} />
              <Route exact path="/admin" element = {< PostApplication />} />

            </Routes>
          </Layout>
        </UserDetailsProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
