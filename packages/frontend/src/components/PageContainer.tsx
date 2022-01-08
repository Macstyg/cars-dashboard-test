import React from 'react';
import { Container } from '@mui/material';

interface Props {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  children: JSX.Element | JSX.Element[];
}

const PageContainer: React.FC<Props> = ({ children, maxWidth = 'md' }) => {
  return (
    <Container maxWidth={maxWidth} sx={{
        paddingTop: (theme) => theme.spacing(4),
      paddingBottom: (theme) => theme.spacing(4),
    }}>
      {children}
    </Container>
  );
};

export default PageContainer;
