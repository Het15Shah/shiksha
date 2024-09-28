import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import SchoolIcon from '@mui/icons-material/School';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1a237e 30%, #3f51b5 90%)',
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  transition: 'background 0.3s ease',
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    '& .MuiTypography-root, & .MuiSvgIcon-root': {
      color: theme.palette.common.white,
    },
  },
  '& .MuiTypography-root, & .MuiSvgIcon-root': {
    transition: 'color 0.3s ease',
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'white',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1),
  },
}));

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const menuItems = [
    { title: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { title: 'Courses', icon: <SchoolIcon />, path: '/courses' },
    { title: 'Assignments', icon: <AssignmentIcon />, path: '/assignments' },
    { title: 'Classmates', icon: <PeopleIcon />, path: '/classmates' },
  ];

  const userMenuItems = [
    { title: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
    { title: 'Log out', icon: <ExitToAppIcon />, path: '/log-out' },
  ];

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoText
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <SchoolIcon /> Shiksha-Setu
          </LogoText>

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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {menuItems.map((item) => (
                <StyledMenuItem key={item.title} onClick={handleCloseNavMenu}>
                  <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                    {item.icon}
                    <Typography sx={{ ml: 1 }}>{item.title}</Typography>
                  </Link>
                </StyledMenuItem>
              ))}
            </Menu>
          </Box>

          <LogoText
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <SchoolIcon /> Shiksha-Setu
          </LogoText>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item) => (
              <StyledMenuItem key={item.title} onClick={handleCloseNavMenu}>
                <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                  {item.icon}
                  <Typography sx={{ ml: 1 }}>{item.title}</Typography>
                </Link>
              </StyledMenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userMenuItems.map((item) => (
                <StyledMenuItem key={item.title} onClick={handleCloseUserMenu}>
                  <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                    {item.icon}
                    <Typography sx={{ ml: 1 }}>{item.title}</Typography>
                  </Link>
                </StyledMenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Navbar;