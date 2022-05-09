import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom';
import { userDetailsContext } from "../../context/userDetailsProvider";
import axios from 'axios';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = ({ setIsDarkTheme }) => {

  const [userDetails, setUserDetails] = React.useContext(userDetailsContext);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchAuthUser();
  }, [])


  React.useEffect(() => {
    setUserDetails({ isStudent: false, studentName: "Mehta" });
    console.log("userDetails", userDetails);
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [checked, setChecked] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleThemeChange = (event) => {
    setChecked(event.target.checked);
    setIsDarkTheme(event.target.checked);
  }


  const fetchAuthUser = async () => {
    const response = await axios.get("http://localhost:3001/profile", { withCredentials: true }).catch((err) => {
      setUserDetails(null);
    });

    if (response && response.data) {
      setUserDetails(response.data.user);
    }
  }



  const redirectToGoogleSSOStudent = async () => {
    let timer = null;
    const googleLoginURL = "http://localhost:3001/login/student";
    const newWindow = window.open(googleLoginURL, "_blank", "width=500,height=600");

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          fetchAuthUser();
          if (timer) clearInterval(timer);
        }
      }, 500)
    }
  }

  const redirectToGoogleSSOFaculty = async () => {
    let timer = null;
    const googleLoginURL = "http://localhost:3001/login/faculty";
    const newWindow = window.open(googleLoginURL, "_blank", "width=500,height=600");

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          fetchAuthUser();
          if (timer) clearInterval(timer);
        }
      }, 500)
    }
  }

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            style={{ textDecoration: "none", color: "#ffffff" }}

            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />

            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              <MenuItem component={Link} to={userDetails && userDetails.isStudent ? "/dashboard/student" : "/dashboard/faculty"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Dashboard</Typography>
              </MenuItem>
              <Switch
                checked={checked}
                onChange={handleThemeChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            style={{ textDecoration: "none", color: "#ffffff" }}
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}

          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, justifyContent: "flex-end", alignItems: "center", display: { xs: 'none', md: 'flex' }, paddingRight: 3 }}>

            <Switch
              checked={checked}
              onChange={handleThemeChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />


            <Button
              component={Link} to={userDetails && userDetails.isStudent ? "/dashboard/student" : "/dashboard/faculty"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Dashboard
            </Button>

            <Button
              component={Link} to={userDetails && userDetails.isStudent ? "/profile/student" : "/profile/faculty"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Profile
            </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {
              userDetails && userDetails.email ?
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                : <div>

                  <Button color='primary' variant='contained' onClick={redirectToGoogleSSOStudent}>Login as Student</Button>
                  <Button color='primary' variant='contained' onClick={redirectToGoogleSSOFaculty}>Login as Faculty</Button>
                </div>

            }
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;