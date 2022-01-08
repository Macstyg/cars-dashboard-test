import React from 'react';
import { Button, Link, SvgIcon } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

interface Props {
  startIcon: typeof SvgIcon;
  text: string;
  to: string;
}

const AppBarMenuButton: React.FC<Props> = ({
  startIcon: StartIcon,
  text,
  to,
}) => {
  return (
    <Link component={RouterLink} to={to}>
      <Button
        sx={{
          color: '#fff',
          margin: (theme) => theme.spacing(1),
        }}
        color="inherit"
        startIcon={<StartIcon />}
      >
        {text}
      </Button>
    </Link>
  );
};

export default AppBarMenuButton;
