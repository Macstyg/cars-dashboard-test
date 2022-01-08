import { CircularProgress, Typography } from '@mui/material';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CarsForm from '../components/Cars/CarsForm';
import PageContainer from '../components/PageContainer';
import { updateCar } from '../features/cars/cars.slice';
import useCar from '../features/cars/hooks/useCar';
import { CreateCarDto, Status } from '../types';

const EditCar: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { carId } = useParams<{ carId: string }>();
  const { car, status } = useCar(carId!);

  const onSubmit = (data: Partial<CreateCarDto>) => {
    dispatch(updateCar({body: data, id: carId!}))
    navigate('/cars');
  };
  return (
    <PageContainer>
      <Typography variant="h5">Edit car</Typography>
      {status === Status.LOADING ? (
        <CircularProgress />
      ) : (
        <CarsForm onSubmit={onSubmit} defaultValues={car} />
      )}
    </PageContainer>
  );
};

export default memo(EditCar);
