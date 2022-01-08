import { Typography } from '@mui/material';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import CarsForm from '../components/Cars/CarsForm';
import { CreateCarDto } from '../types';
import { useDispatch } from 'react-redux';
import { createCar } from '../features/cars/cars.slice';

const CreateCar: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const onSubmit = (data: CreateCarDto) => {
    dispatch(createCar(data))
    navigate('/cars');
  };

  return (
    <PageContainer>
      <Typography variant="h5">New car</Typography>
      <CarsForm onSubmit={onSubmit} />
    </PageContainer>
  );
};

export default CreateCar
