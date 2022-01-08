import React from 'react';
import { CircularProgress } from '@mui/material';


import EmptyBox from '../components/EmptyBox';
import PageContainer from '../components/PageContainer';
import CarsList from '../components/Cars/CarsList';
import useCars from '../features/cars/hooks/useCars';


const Cars: React.FC = () => {
  const { status, cars } = useCars();
  return (
    <PageContainer maxWidth="lg">
      {status === 'loading' ? (
        <CircularProgress />
      ) : cars && cars.length ? (
        <CarsList cars={cars} />
      ) : (
        <EmptyBox entityName="cars" />
      )}
    </PageContainer>
  );
};

export default Cars
