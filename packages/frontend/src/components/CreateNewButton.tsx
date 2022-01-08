import React, { memo } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate  } from 'react-router-dom';

interface Props {}

const CreateNewButton: React.FC<Props> = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/new');
  };
    return (<Fab
      color="secondary"
      aria-label="add"
      sx={{marginRight: (theme) => theme.spacing(3)}}
      onClick={handleClick}
    >
      <AddIcon />
    </Fab>)
};

export default memo(CreateNewButton);
