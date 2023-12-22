// MaterialUISidebar.js
import { Link } from 'react-router-dom';
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GrassIcon from '@mui/icons-material/Grass';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import the AccountCircleIcon
import PersonIcon from '@mui/icons-material/Person'; // Import the PersonIcon
import Logo from './logo'; // Import the Logo component

const MaterialUISidebar = () => {
  const iconStyle = { marginTop: 4, color: '#009688' }; // Adjust the marginTop and color values as needed

  return (
    <Drawer anchor="left" open={true} variant="persistent">
      <List>
        {/* Logo */}
        <ListItem>
          <ListItemIcon>
            <Logo />
          </ListItemIcon>
        </ListItem>

        {/* Profile */}
        <ListItem button>
          <ListItemIcon style={{ ...iconStyle }}>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" disableTypography />
        </ListItem>

        {/* Other Items */}
        <ListItem button>
          <ListItemIcon style={{ color: '#4caf50', ...iconStyle }}>
            <LocalFloristIcon />
          </ListItemIcon>
          <ListItemText primary="Select Destination" disableTypography />
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{ color: '#009688', ...iconStyle }}>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Explore Maps" disableTypography />
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{ color: '#009688', ...iconStyle }}>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText primary="Farm Houses" disableTypography />
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{ color: '#009688', ...iconStyle }}>
            <GrassIcon />
          </ListItemIcon>
          <ListItemText primary="Our favourite cities" disableTypography />
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{ color: '#009688', ...iconStyle }}>
            <PersonAddIcon />
          </ListItemIcon>
          <Link to='/Register'>Sign Up</Link>
         {/* <ListItemText primary="Sign Up" disableTypography /> */}
        </ListItem>
        <ListItem button>
          <ListItemIcon style={{ color: '#f44336', ...iconStyle }}>
            <LoginIcon />
          </ListItemIcon>
          <Link to='/Login'>Login</Link>
          {/* <ListItemText primary="Sign In" disableTypography /> */}
        </ListItem>
        
      </List>

      <Divider />

      <List sx={{ marginTop: 10 }}>
        {/* User icon */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon style={{ color: '#009688' }} /> {/* Add color to the PersonIcon */}
            </ListItemIcon>
            <ListItemText primary="ANAND" />
          </ListItemButton>
        </ListItem>
        
        {/* Logout */}
        <ListItemButton>
          <ListItemIcon>
            <ExitToAppIcon style={{ color: '#009688' }} /> {/* Add color to the ExitToAppIcon */}
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default MaterialUISidebar;
