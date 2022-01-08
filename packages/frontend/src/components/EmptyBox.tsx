import { Container, Paper, Typography } from '@mui/material';
import React, { memo } from 'react';

interface Props {
  entityName: 'cars';
}

const EmptyBox: React.FC<Props> = ({ entityName }) => {
  return (
    <Container maxWidth="md" sx={{paddingTop: (theme) => theme.spacing(4)}}>
      <Paper sx={{      
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <Typography variant="h5" align="center">
          <div>You haven't got any {entityName} yet.</div>
          <div>To add new one - click + button</div>
        </Typography>
      </Paper>
    </Container>
  );
};

export default memo(EmptyBox);
