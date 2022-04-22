
import React,{useState} from 'react'
import Homepage from './pages/homepage/Homepage';

import Layout from './components/Layout';
import lightTheme from './theme/theme.light';
import {ThemeProvider } from '@mui/material/styles';
import StudentDashboard from './pages/dashboard/Dashboard.student';
import InternshipPage from './pages/internshipPage/InternshipPage';
import BrowseInternships from './pages/browseInternships/BrowseInternships';
import darkTheme from './theme/theme.dark';
import { CssBaseline } from '@mui/material';


function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log(isDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme} >
      <CssBaseline />
      <Layout setIsDarkTheme= {setIsDarkTheme}>
        {/* <Homepage /> */}
        {/* <StudentDashboard /> */}
        <InternshipPage />
        {/* <BrowseInternships /> */}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
