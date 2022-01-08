import { AppBar as MUIAppBar, Toolbar } from '@mui/material';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import React from 'react';
import logo from '../assets/logo.svg';
import AppBarMenuButton from './AppBarMenuButton';
import CreateNewButton from './CreateNewButton';

const AppBar: React.FC = () => {
  return (
    <MUIAppBar position="static">
      <Toolbar sx={{
          paddingTop: (theme) => theme.spacing(3),
          paddingBottom: (theme) => theme.spacing(3),
          justifyContent: 'space-between',
        }}>
        <img src={logo} alt="Logo" />
        <div>
            <CreateNewButton />
            <AppBarMenuButton text="Cars" startIcon={DriveEtaIcon} to="/cars" />
        </div>
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
