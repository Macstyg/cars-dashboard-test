import { Button } from '@mui/material';
import React, { memo } from 'react';

interface Props {
  text: string;
}

const SubmitButton: React.FC<Props> = ({ text }) => {
  return (
    <Button
      size="large"
      variant="contained"
      color="secondary"
      type="submit"
      sx={{      
        margin: (theme) => `${theme.spacing(4)}px auto`,
        display: 'block',
      }}
    >
      {text}
    </Button>
  );
};

export default memo(SubmitButton);
